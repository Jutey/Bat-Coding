// Daily missions and weekly challenges
// check(stats, completedLessons, dailyStats) — dailyStats resets each day

export const MISSION_POOL = [
  {
    id: 'run_3',
    title: 'System Test',
    desc: 'Run 3 scripts today.',
    xp: 40,
    type: 'daily',
    check: (stats, cls, ds) => (ds?.scriptsToday || 0) >= 3,
  },
  {
    id: 'fix_1',
    title: 'Bug Stomper',
    desc: 'Fix a broken program.',
    xp: 50,
    type: 'daily',
    check: (stats, cls, ds) => (stats.bugsFixed || 0) >= 1,
  },
  {
    id: 'lesson_1',
    title: 'On Mission',
    desc: 'Complete 1 lesson today.',
    xp: 60,
    type: 'daily',
    check: (stats, cls, ds) => (ds?.lessonsToday || 0) >= 1,
  },
  {
    id: 'lines_20',
    title: 'Code Output',
    desc: 'Write 20 lines of code today.',
    xp: 35,
    type: 'daily',
    check: (stats, cls, ds) => (ds?.linesWrittenToday || 0) >= 20,
  },
  {
    id: 'predict_3',
    title: 'Oracle',
    desc: 'Answer 3 prediction questions correctly.',
    xp: 40,
    type: 'daily',
    check: (stats, cls, ds) => (ds?.predictionsToday || 0) >= 3,
  },
  {
    id: 'lessons_3',
    title: 'Triple Threat',
    desc: 'Complete 3 lessons today.',
    xp: 120,
    type: 'daily',
    check: (stats, cls, ds) => (ds?.lessonsToday || 0) >= 3,
  },
];

export const WEEKLY_POOL = [
  { id: 'week_lessons_5', title: 'Five Missions',  desc: 'Complete 5 lessons this week.',     xp: 300, type: 'weekly', check: (stats, cls, ds) => (ds?.lessonsThisWeek || 0) >= 5 },
  { id: 'week_boss',      title: 'Boss Defeated',  desc: 'Beat a boss battle this week.',     xp: 500, type: 'weekly', check: (stats, cls, ds) => (ds?.bossesThisWeek || 0) >= 1 },
  { id: 'week_build',     title: 'Builder',        desc: 'Complete 3 build challenges.',      xp: 250, type: 'weekly', check: (stats, cls, ds) => (stats.scriptsRun || 0) >= 3 },
  { id: 'week_streak',    title: 'Five Lessons',   desc: 'Complete 5 lessons total.',         xp: 200, type: 'weekly', check: (stats, cls, ds) => cls.length >= 5 },
];

export function getDailyMissions(date) {
  const seed = parseInt(date.replace(/-/g, ''));
  const indices = [(seed % 6), ((seed + 2) % 6), ((seed + 4) % 6)];
  const unique = [...new Set(indices)];
  while (unique.length < 3) unique.push((unique[unique.length - 1] + 1) % 6);
  return unique.slice(0, 3).map(i => MISSION_POOL[i]);
}

export function getWeeklyChallenge(weekNum) {
  return WEEKLY_POOL[weekNum % WEEKLY_POOL.length];
}

export function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}
