// Daily missions and weekly challenges
export const MISSION_POOL = [
  { id: 'echo_5',      title: 'Signal Burst',        desc: 'Use echo 5 times in one script.',         xp: 30,  type: 'daily',  check: (stats) => (stats.echoCount || 0) >= 5 },
  { id: 'run_3',       title: 'System Test',          desc: 'Run 3 scripts today.',                    xp: 40,  type: 'daily',  check: (stats) => (stats.scriptsRun || 0) >= 3 },
  { id: 'fix_1',       title: 'Bug Stomper',          desc: 'Fix 1 broken program today.',             xp: 50,  type: 'daily',  check: (stats) => (stats.bugsFixed || 0) >= 1 },
  { id: 'lesson_1',    title: 'On Mission',           desc: 'Complete 1 lesson today.',                xp: 60,  type: 'daily',  check: (stats) => (stats.lessonsToday || 0) >= 1 },
  { id: 'lines_20',    title: 'Code Output',          desc: 'Write 20 lines of code today.',           xp: 35,  type: 'daily',  check: (stats) => (stats.linesToday || 0) >= 20 },
  { id: 'predict_3',   title: 'Oracle',               desc: 'Answer 3 prediction questions correctly.', xp: 40, type: 'daily',  check: (stats) => (stats.predictionsToday || 0) >= 3 },
];

export const WEEKLY_POOL = [
  { id: 'week_lessons_5', title: 'Five Missions',     desc: 'Complete 5 lessons this week.',           xp: 300, type: 'weekly' },
  { id: 'week_boss',      title: 'Boss Defeated',     desc: 'Beat a boss battle this week.',           xp: 500, type: 'weekly' },
  { id: 'week_build',     title: 'Builder',           desc: 'Complete 3 build challenges.',            xp: 250, type: 'weekly' },
  { id: 'week_streak',    title: 'Streak',            desc: 'Open the app 5 days this week.',          xp: 200, type: 'weekly' },
];

export function getDailyMissions(date) {
  // Pick 3 daily missions based on the date (deterministic)
  const seed = parseInt(date.replace(/-/g, ''));
  const indices = [(seed % 6), ((seed + 2) % 6), ((seed + 4) % 6)];
  return indices.map(i => MISSION_POOL[i]);
}

export function getWeeklyChallenge(weekNum) {
  return WEEKLY_POOL[weekNum % WEEKLY_POOL.length];
}

export function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}
