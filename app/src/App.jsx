import { useState, useEffect, useCallback } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import BootSequence from './components/BootSequence/BootSequence';
import TitleBar from './components/TitleBar';
import HomeBase from './components/HomeBase/HomeBase';
import WorldMap from './components/WorldMap';
import LessonView from './components/LessonView';
import GlobalToasts from './components/GlobalToasts';
import DailyMissions from './components/DailyMissions/DailyMissions';
import SkillTree from './components/SkillTree/SkillTree';
import Museum from './components/Museum/Museum';
import HallOfLegends from './components/HallOfLegends/HallOfLegends';
import Profile from './components/Profile/Profile';
import CommandEncyclopedia from './components/CommandEncyclopedia/CommandEncyclopedia';
import { findSecret } from './data/secrets';
import './App.css';

const NAV_ITEMS = [
  { id: 'map',       label: 'WORLD MAP',    icon: '🗺️' },
  { id: 'missions',  label: 'MISSIONS',     icon: '📋' },
  { id: 'museum',    label: 'MUSEUM',       icon: '🏛️' },
  { id: 'hall',      label: 'HALL',         icon: '🏆' },
  { id: 'tree',      label: 'SKILL TREE',   icon: '🌳' },
  { id: 'cmds',      label: 'COMMANDS',     icon: '📖' },
  { id: 'profile',   label: 'PROFILE',      icon: '👤' },
];

function AppInner() {
  const game = useGame();
  const [booted, setBooted] = useState(game.bootComplete);
  const [view, setView] = useState('map');
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [secretBuffer, setSecretBuffer] = useState('');
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    window.api.getWorlds().then(setWorlds).catch(() => {});
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
        {/* Left sidebar — Terminal Prime home base */}
        <HomeBase />

        {/* Center nav + content */}
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
            {view === 'missions'  && <DailyMissions />}
            {view === 'museum'    && <Museum />}
            {view === 'hall'      && <HallOfLegends />}
            {view === 'tree'      && <SkillTree />}
            {view === 'cmds'      && <CommandEncyclopedia />}
            {view === 'profile'   && <Profile />}
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
