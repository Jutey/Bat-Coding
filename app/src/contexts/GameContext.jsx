import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ACHIEVEMENTS, getAchievement } from '../data/achievements';

// ── Levels & Titles ──────────────────────────────────────────────
export const LEVELS = [
  { level: 1,   xp: 0,     title: 'RECRUIT',    color: '#5a7a5a' },
  { level: 2,   xp: 200,   title: 'CADET',      color: '#00aa44' },
  { level: 3,   xp: 500,   title: 'OPERATOR',   color: '#00ff41' },
  { level: 4,   xp: 1000,  title: 'ENGINEER',   color: '#00ccff' },
  { level: 5,   xp: 2000,  title: 'SPECIALIST', color: '#aa44ff' },
  { level: 6,   xp: 3500,  title: 'COMMANDER',  color: '#ff9900' },
  { level: 7,   xp: 5500,  title: 'ARCHITECT',  color: '#ff4466' },
  { level: 8,   xp: 8000,  title: 'LEGEND',     color: '#ffdd00' },
  { level: 9,   xp: 12000, title: 'MASTER',     color: '#ffffff' },
  { level: 10,  xp: 20000, title: 'TERMINAL PRIME', color: '#00ff41' },
];

export function getLevelInfo(totalXP) {
  let current = LEVELS[0];
  let next = LEVELS[1];
  for (let i = 0; i < LEVELS.length; i++) {
    if (totalXP >= LEVELS[i].xp) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }
  const xpIntoLevel = next ? totalXP - current.xp : 0;
  const xpNeeded = next ? next.xp - current.xp : 1;
  const pct = next ? Math.round((xpIntoLevel / xpNeeded) * 100) : 100;
  return { current, next, xpIntoLevel, xpNeeded, pct };
}

// ── Home Base Evolution ──────────────────────────────────────────
export const BASE_STAGES = [
  { minLevel: 1,  desc: 'Lights flicker. One terminal active.',              emoji: '🔴' },
  { minLevel: 2,  desc: 'Power grid stable. Second terminal online.',        emoji: '🟡' },
  { minLevel: 3,  desc: 'Communications tower broadcasting.',                emoji: '📡' },
  { minLevel: 4,  desc: 'Defense grid activated.',                           emoji: '🛡️' },
  { minLevel: 5,  desc: 'Power fully restored. All lights green.',           emoji: '🟢' },
  { minLevel: 6,  desc: 'AI systems coming online. Robots moving.',          emoji: '🤖' },
  { minLevel: 7,  desc: 'City sector alive. Traffic routing restored.',      emoji: '🏙️' },
  { minLevel: 8,  desc: 'Full orbital uplink. Global network stable.',       emoji: '🌐' },
  { minLevel: 9,  desc: 'Terminal Prime almost fully restored.',             emoji: '⚡' },
  { minLevel: 10, desc: 'TERMINAL PRIME FULLY OPERATIONAL.',                 emoji: '🏆' },
];

export function getBaseStage(level) {
  let stage = BASE_STAGES[0];
  for (const s of BASE_STAGES) {
    if (level >= s.minLevel) stage = s;
  }
  return stage;
}

// ── Themes ───────────────────────────────────────────────────────
export const THEMES = {
  default:    { name: 'DEFAULT',    unlockLevel: 1,  primary: '#00ff41', bg: '#0d0d0d', surface: '#050f05', border: '#1a3a1a', text: '#9ab09a' },
  hacker:     { name: 'HACKER',     unlockLevel: 3,  primary: '#00ff41', bg: '#000000', surface: '#000500', border: '#003a00', text: '#00cc33' },
  retro:      { name: 'RETRO DOS',  unlockLevel: 4,  primary: '#ffaa00', bg: '#000080', surface: '#0000aa', border: '#0000ff', text: '#ffffff' },
  cyberpunk:  { name: 'CYBERPUNK',  unlockLevel: 5,  primary: '#ff00ff', bg: '#0a000a', surface: '#150015', border: '#440044', text: '#ff88ff' },
  ice:        { name: 'ICE GRID',   unlockLevel: 6,  primary: '#00ccff', bg: '#000a0d', surface: '#001015', border: '#003a4a', text: '#7ad0e0' },
  blood:      { name: 'BLOOD HEX',  unlockLevel: 7,  primary: '#ff3333', bg: '#0d0000', surface: '#0f0000', border: '#3a0000', text: '#cc7777' },
  gold:       { name: 'GOLD CORE',  unlockLevel: 8,  primary: '#ffdd00', bg: '#0d0a00', surface: '#0f0d00', border: '#3a3000', text: '#c0a060' },
  white:      { name: 'LIGHT',      unlockLevel: 1,  primary: '#1a6f3a', bg: '#f5f5f5', surface: '#e8e8e8', border: '#bbbbbb', text: '#333333' },
};

// ── Pets ─────────────────────────────────────────────────────────
export const PETS = [
  { id: 'glitch', name: 'GLITCH',  emoji: '🤖', desc: 'Your first companion. A small repair bot.',            unlockLevel: 1 },
  { id: 'byte',   name: 'BYTE',    emoji: '💾', desc: 'A memory fragment that became sentient.',              unlockLevel: 3 },
  { id: 'echo',   name: 'ECHO',    emoji: '📡', desc: 'A signal repeater who learned to talk.',               unlockLevel: 5 },
  { id: 'nexus',  name: 'NEXUS',   emoji: '⚡', desc: 'A power node with its own personality.',               unlockLevel: 7 },
  { id: 'prime',  name: 'PRIME',   emoji: '🏆', desc: 'Terminal Prime\'s core intelligence. Legendary.',      unlockLevel: 10 },
];

export const PET_EVOLUTIONS = {
  glitch: [
    { stage: 1, minLevel: 1,  form: '🤖', desc: 'Baby bot. Learning.' },
    { stage: 2, minLevel: 3,  form: '⚙️', desc: 'Upgraded. Smarter.' },
    { stage: 3, minLevel: 6,  form: '🦾', desc: 'Enhanced. Powerful.' },
    { stage: 4, minLevel: 10, form: '🌟', desc: 'Ascended. Legend.' },
  ],
};

// ── Avatars ──────────────────────────────────────────────────────
export const AVATARS = [
  { id: 'cadet',    emoji: '👤', name: 'Cadet',      unlockLevel: 1 },
  { id: 'hacker',   emoji: '🕵️', name: 'Hacker',     unlockLevel: 3 },
  { id: 'engineer', emoji: '👷', name: 'Engineer',   unlockLevel: 5 },
  { id: 'commander',emoji: '🎖️', name: 'Commander',  unlockLevel: 7 },
  { id: 'legend',   emoji: '🏆', name: 'Legend',     unlockLevel: 10 },
];

// ── Context ──────────────────────────────────────────────────────
const GameContext = createContext(null);

const DEFAULT_STATE = {
  totalXP: 0,
  completedLessons: [],
  achievements: [],
  unlockedCommands: [],
  theme: 'default',
  avatar: 'cadet',
  activePet: 'glitch',
  stats: { linesWritten: 0, scriptsRun: 0, bugsFixed: 0, predictionsCorrect: 0, secretsFound: 0 },
  hallOfLegends: [],
  dailyMissions: { date: null, missions: [], completed: [] },
  claimedMissions: {},
  weeklyChallenge: null,
  bootComplete: false,
  secretCommandsFound: [],
  projectGallery: [],
  museumEntries: [],
};

export function GameProvider({ children }) {
  const [state, setState] = useState(DEFAULT_STATE);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    window.api.getProgress().then(saved => {
      if (saved) setState(prev => ({ ...prev, ...saved }));
    });
  }, []);

  const save = useCallback((updates) => {
    setState(prev => {
      const next = { ...prev, ...updates };
      window.api.saveProgress(next);
      return next;
    });
  }, []);

  const addXP = useCallback((amount) => {
    setState(prev => {
      const oldLevel = getLevelInfo(prev.totalXP).current.level;
      const newXP = prev.totalXP + amount;
      const newLevel = getLevelInfo(newXP).current.level;
      const next = { ...prev, totalXP: newXP };
      window.api.saveProgress(next);
      if (newLevel > oldLevel) {
        const lvl = LEVELS.find(l => l.level === newLevel);
        pushToast({ type: 'levelup', title: `LEVEL ${newLevel}`, desc: lvl.title, color: lvl.color });
      }
      return next;
    });
  }, []);

  const unlockAchievement = useCallback(async (id) => {
    if (state.achievements.includes(id)) return;
    const ach = getAchievement(id);
    if (!ach) return;
    setState(prev => {
      const next = { ...prev, achievements: [...prev.achievements, id] };
      window.api.saveProgress(next);
      return next;
    });
    pushToast({ type: 'achievement', ...ach });
  }, [state.achievements]);

  const completeLesson = useCallback((lessonId, xpEarned = 100) => {
    // Guard against duplicate XP — only award once per lesson
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const next = { ...prev, completedLessons: [...prev.completedLessons, lessonId] };
      window.api.saveProgress(next);
      // Award XP inside the conditional so it only runs when lesson is newly completed
      setTimeout(() => addXP(xpEarned), 0);
      return next;
    });
  }, [addXP]);

  const trackStat = useCallback((stat, amount = 1) => {
    setState(prev => {
      const next = { ...prev, stats: { ...prev.stats, [stat]: (prev.stats[stat] || 0) + amount } };
      window.api.saveProgress(next);
      // 1000 lines achievement
      if (stat === 'linesWritten' && next.stats.linesWritten >= 1000) unlockAchievement('1000_lines');
      return next;
    });
  }, [unlockAchievement]);

  const claimMission = useCallback((missionId, xp, todayDate) => {
    setState(prev => {
      const key = `${todayDate}:${missionId}`;
      if (prev.claimedMissions?.[key]) return prev;
      const next = {
        ...prev,
        totalXP: prev.totalXP + xp,
        claimedMissions: { ...prev.claimedMissions, [key]: true },
      };
      window.api.saveProgress(next);
      return next;
    });
    pushToast({ type: 'xp', title: `+${xp} XP`, desc: 'Mission complete!', color: '#00ff41' });
  }, []);

  const recordHallEntry = useCallback((key, entry) => {
    setState(prev => {
      if (prev.hallOfLegends.some(h => h.id === key)) return prev;
      const next = { ...prev, hallOfLegends: [...prev.hallOfLegends, { id: key, ...entry }] };
      window.api.saveProgress(next);
      return next;
    });
  }, []);

  const findSecret = useCallback((secretId) => {
    setState(prev => {
      if (prev.secretCommandsFound.includes(secretId)) return prev;
      const next = { ...prev, secretCommandsFound: [...prev.secretCommandsFound, secretId] };
      window.api.saveProgress(next);
      return next;
    });
    unlockAchievement('explorer');
    pushToast({ type: 'secret', title: 'SECRET FOUND', desc: secretId, color: '#ffdd00' });
  }, [unlockAchievement]);

  const setTheme = useCallback((id) => {
    save({ theme: id });
    document.documentElement.setAttribute('data-theme', id);
  }, [save]);

  const setAvatar = useCallback((id) => save({ avatar: id }), [save]);
  const setActivePet = useCallback((id) => save({ activePet: id }), [save]);

  const setBootComplete = useCallback(() => save({ bootComplete: true }), [save]);

  const addProjectToGallery = useCallback((project) => {
    setState(prev => {
      const next = { ...prev, projectGallery: [...prev.projectGallery, { ...project, timestamp: Date.now() }] };
      window.api.saveProgress(next);
      return next;
    });
  }, []);

  function pushToast(toast) {
    const key = Date.now() + Math.random();
    setToasts(prev => [...prev, { ...toast, key }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.key !== key)), 5000);
  }

  const levelInfo = getLevelInfo(state.totalXP);
  const baseStage = getBaseStage(levelInfo.current.level);

  return (
    <GameContext.Provider value={{
      ...state,
      levelInfo,
      baseStage,
      toasts,
      addXP,
      unlockAchievement,
      completeLesson,
      trackStat,
      claimMission,
      recordHallEntry,
      findSecret,
      setTheme,
      setAvatar,
      setActivePet,
      setBootComplete,
      addProjectToGallery,
      pushToast,
      dismissToast: (key) => setToasts(prev => prev.filter(t => t.key !== key)),
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
