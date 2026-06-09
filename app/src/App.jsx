import { useState, useEffect, useCallback } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import BootSequence from './components/BootSequence/BootSequence';
import TitleBar from './components/TitleBar';
import WorldMap from './components/WorldMap';
import LessonView from './components/LessonView';
import GlobalToasts from './components/GlobalToasts';
import DailyMissions from './components/DailyMissions/DailyMissions';
import SkillTree from './components/SkillTree/SkillTree';
import HallOfLegends from './components/HallOfLegends/HallOfLegends';
import Profile from './components/Profile/Profile';
import CommandEncyclopedia from './components/CommandEncyclopedia/CommandEncyclopedia';
import Settings, { isAdminMode } from './components/Settings/Settings';
import Progress from './components/Progress/Progress';
import Sandbox from './components/Sandbox/Sandbox';
import { findSecret } from './data/secrets';
import './App.css';

const NAV_ITEMS = [
  { id: 'map',      label: 'Lessons',      icon: '📚' },
  { id: 'progress', label: 'Progress',     icon: '🗺️' },
  { id: 'sandbox',  label: 'Lab',          icon: '⚗️' },
  { id: 'missions', label: 'Missions',     icon: '🎯' },
  { id: 'cmds',     label: 'Command Book', icon: '📖' },
  { id: 'tree',     label: 'Skills',       icon: '🌳' },
  { id: 'hall',     label: 'Hall of Fame', icon: '🏆' },
  { id: 'profile',  label: 'Profile',      icon: '👤' },
  { id: 'settings', label: 'Settings',     icon: '⚙️' },
];

function AppInner() {
  const game = useGame();
  const [booted, setBooted] = useState(game.bootComplete);
  const [view, setView] = useState('map');
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [secretBuffer, setSecretBuffer] = useState('');
  const [worlds, setWorlds] = useState([]);
  const [adminBanner, setAdminBanner] = useState(() => isAdminMode());

  useEffect(() => {
    window.api.getWorlds().then(setWorlds).catch(() => {});
  }, []);

  // Keep admin banner in sync when Settings enables/disables admin mode
  useEffect(() => {
    function onStorage(e) {
      if (e.key === 'admin_mode') setAdminBanner(e.newValue === 'true');
    }
    window.addEventListener('storage', onStorage);
    // Also poll on focus for same-tab updates (localStorage doesn't fire 'storage' in same tab)
    function onFocus() { setAdminBanner(isAdminMode()); }
    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', game.theme || 'default');
  }, [game.theme]);

  // Secret command listener — type anywhere
  const handleKey = useCallback((e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const newBuffer = (secretBuffer + e.key).slice(-20);
    setSecretBuffer(newBuffer);
    const secret = findSecret(newBuffer);
    if (secret) {
      setSecretBuffer('');
      game.findSecret(secret.id);
      if (secret.effect?.startsWith('theme:')) game.setTheme(secret.effect.split(':')[1]);
      if (secret.effect?.startsWith('xp:')) game.addXP(parseInt(secret.effect.split(':')[1]));
    }
  }, [secretBuffer, game]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  function handleBootComplete() {
    setBooted(true);
    game.setBootComplete();
  }

  if (!booted) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  if (selectedLesson) {
    return (
      <>
        <LessonView
          lesson={selectedLesson}
          progress={game}
          onBack={() => setSelectedLesson(null)}
          onComplete={game.completeLesson}
          onTriggerAchievement={game.unlockAchievement}
        />
        <GlobalToasts />
      </>
    );
  }

  return (
    <div className="app">
      <TitleBar />
      <div className="app-layout">
        <div className="app-center">
          <nav className="app-nav">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                className={`nav-btn ${view === item.id ? 'active' : ''}`}
                onClick={() => { setView(item.id); setSelectedWorld(null); }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </nav>

          {adminBanner && (
            <div style={{
              padding: '6px 16px',
              background: 'rgba(255, 100, 0, 0.10)',
              borderBottom: '1px solid #ff6400',
              color: '#ff6400',
              fontFamily: 'Courier New, monospace',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textAlign: 'center',
            }}>
              ⚠ Admin Mode Active — no XP awarded
            </div>
          )}

          <div className="app-content">
            {view === 'map' && (
              <WorldMap
                worlds={worlds}
                progress={game}
                selectedWorld={selectedWorld}
                onSelectWorld={setSelectedWorld}
                onSelectLesson={setSelectedLesson}
                onTriggerAchievement={game.unlockAchievement}
              />
            )}
            {view === 'progress'  && (
              <Progress
                completedLessons={game.completedLessons}
                totalXP={game.totalXP}
                levelInfo={game.levelInfo}
                onSelectLesson={(worldNum, lessonNum) => {
                  setView('map');
                }}
              />
            )}
            {view === 'sandbox'   && <Sandbox onRun={(lines) => { game.trackStat('linesWritten', lines); game.trackStat('scriptsRun', 1); }} />}
            {view === 'missions'  && <DailyMissions />}
            {view === 'hall'      && <HallOfLegends />}
            {view === 'tree'      && <SkillTree />}
            {view === 'cmds'      && <CommandEncyclopedia />}
            {view === 'profile'   && <Profile />}
            {view === 'settings'  && <Settings />}
          </div>
        </div>
      </div>
      <GlobalToasts />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppInner />
    </GameProvider>
  );
}
