import './Progress.css';

const WORLDS = [
  {
    num: 1,
    title: '01 Output',
    color: '#00ff41',
    lessons: [
      'Hello World', 'Wait for Key', 'Clear Screen', 'Window Title', 'Colors',
      'ASCII Art', 'Text to Speech', 'Fake OS', 'Mini Adventure', 'Boss Battle',
    ],
  },
  {
    num: 2,
    title: '02 Variables',
    color: '#00d4ff',
    lessons: [
      'What is Memory', 'Display Variables', 'Player Names', 'Health Bars', 'Gold System',
      'Inventory', 'Stats Panel', 'Character Creator', 'Save Character', 'Boss Battle',
    ],
  },
  {
    num: 3,
    title: '03 Logic',
    color: '#ff9900',
    lessons: [
      'If Statements', 'Password Check', 'Age Check', 'Decision Trees', 'Multiple Outcomes',
      'Branching Story', 'Choose Adventure', 'Conversation', 'NOT Conditions', 'Boss Battle',
    ],
  },
  {
    num: 4,
    title: '04 Loops',
    color: '#cc44ff',
    lessons: [
      'Labels & Goto', 'Infinite Loops', 'Game Loop', 'Countdown', 'Animation',
      'Progress Bar', 'Number Guesser', 'Loading Screen', 'Loop Minion', 'Boss Battle',
    ],
  },
  {
    num: 5,
    title: '05 Randomness',
    color: '#ff4444',
    lessons: [
      'What is Random', 'Coin Flip', 'Dice Roller', 'Loot Drops', 'Encounters',
      'Battle System', 'Probability', 'Weighted Random', 'Full Battle', 'Boss Battle',
    ],
  },
  {
    num: 6,
    title: '06 Files',
    color: '#ffdd00',
    lessons: [
      'Create Files', 'Read Files', 'Append Files', 'Save State', 'Load State',
      'High Scores', 'Profiles', 'Log System', 'Database Sim', 'Boss Battle',
    ],
  },
  {
    num: 7,
    title: '07 Functions',
    color: '#00ffaa',
    lessons: [
      'What are Functions', 'Reusable Code', 'Menu Function', 'Combat Fn', 'Shop Fn',
      'NPC Dialogue', 'Quest System', 'Multi-Fn RPG', 'Fn Library', 'Boss Battle',
    ],
  },
  {
    num: 8,
    title: '08 Automation',
    color: '#ff6644',
    lessons: [
      'Open Programs', 'File Organizer', 'Scheduler', 'Backup Script', 'Cleanup',
      'Startup Launcher', 'Auto-Renamer', 'System Report', 'Assistant', 'Boss Battle',
    ],
  },
  {
    num: 9,
    title: '09 Networks',
    color: '#44aaff',
    lessons: [
      'Ping', 'ipconfig', 'Tracert', 'Netstat', 'Tasklist',
      'Connectivity', 'Network Map', 'Network Report', 'Scanner Sim', 'Boss Battle',
    ],
  },
  {
    num: 10,
    title: '10 Debugging',
    color: '#ffffff',
    lessons: [
      'Typo Bugs', 'Variable Bugs', 'Logic Bugs', 'Runtime Bugs', 'Math Bugs',
      'Multi-System', 'Debug Toolkit', 'Final Debug', 'Grand Quest', 'Boss Battle',
    ],
  },
  {
    num: 11,
    title: '11 Python Bridge',
    color: '#ff44aa',
    lessons: [
      'Batch vs Python', 'Variables', 'Input', 'Loops', 'Functions',
      'Files', 'Run Python', 'Combining', 'Final Project', 'Graduation',
    ],
  },
];

function isLessonComplete(completedLessons, worldNum, lessonNum) {
  const wStr = String(worldNum).padStart(2, '0');
  const lStr = String(lessonNum).padStart(2, '0');
  return completedLessons.some(
    id => id.includes(`w${wStr}-l${lStr}`) || id.includes(`lesson-${lStr}`)
  );
}

function getWorldCompletedCount(completedLessons, worldNum) {
  let count = 0;
  for (let l = 1; l <= 10; l++) {
    if (isLessonComplete(completedLessons, worldNum, l)) count++;
  }
  return count;
}

function getLessonState(completedLessons, worldNum, lessonNum) {
  const done = isLessonComplete(completedLessons, worldNum, lessonNum);
  if (done) return 'completed';

  // Determine if locked
  if (lessonNum === 1) {
    if (worldNum === 1) return 'current'; // World 1 lesson 1 always unlocked
    // Lock if previous world < 50% done
    const prevDone = getWorldCompletedCount(completedLessons, worldNum - 1);
    return prevDone >= 5 ? 'current' : 'locked';
  }

  // Lesson N (N>1): locked if lesson N-1 not done
  const prevDone = isLessonComplete(completedLessons, worldNum, lessonNum - 1);
  if (!prevDone) return 'locked';

  // Check if any later lesson in this world is done (meaning this is "past current")
  // It's already shown as completed above if done. This is the first undone unlocked lesson = current.
  return 'current';
}

export default function Progress({ completedLessons = [], totalXP = 0, levelInfo, onSelectLesson }) {
  const level = levelInfo?.current?.level ?? 1;
  const levelTitle = levelInfo?.current?.title ?? 'Novice';
  const levelColor = levelInfo?.current?.color ?? 'var(--primary)';
  const xpPct = levelInfo?.pct ?? 0;
  const nextXP = levelInfo?.next ? levelInfo.next.xp - totalXP : 0;

  return (
    <div className="progress-roadmap">
      {/* XP Bar */}
      <div className="progress-xp-bar">
        <div className="progress-xp-info">
          <span className="progress-level-badge" style={{ color: levelColor }}>
            LVL {level}
          </span>
          <span className="progress-level-title" style={{ color: levelColor }}>
            {levelTitle}
          </span>
          <span className="progress-xp-count">{totalXP.toLocaleString()} XP</span>
        </div>
        <div className="progress-xp-track">
          <div
            className="progress-xp-fill"
            style={{ width: `${xpPct}%`, background: levelColor }}
          />
        </div>
        {levelInfo?.next && (
          <div className="progress-xp-next">{nextXP.toLocaleString()} XP to next level</div>
        )}
      </div>

      {/* World sections */}
      <div className="progress-worlds">
        {WORLDS.map(world => {
          const completedCount = getWorldCompletedCount(completedLessons, world.num);
          const pct = Math.round((completedCount / 10) * 100);

          return (
            <div key={world.num} className="progress-world">
              <div className="progress-world-header">
                <div
                  className="progress-world-dot"
                  style={{ background: world.color }}
                />
                <div className="progress-world-title" style={{ color: world.color }}>
                  {world.title}
                </div>
                <div className="progress-world-pct" style={{ color: world.color }}>
                  {completedCount}/10
                </div>
              </div>

              <div
                className="progress-world-bar"
                style={{ '--world-color': world.color }}
              >
                <div
                  className="progress-world-bar-fill"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="progress-nodes">
                {world.lessons.map((name, idx) => {
                  const lessonNum = idx + 1;
                  const state = getLessonState(completedLessons, world.num, lessonNum);
                  const isBoss = lessonNum === 10;
                  const canClick = state !== 'locked';

                  return (
                    <div key={lessonNum} className="progress-node-row">
                      {idx > 0 && (
                        <div
                          className={`progress-connector ${state === 'completed' || (state !== 'locked' && isLessonComplete(completedLessons, world.num, lessonNum - 1)) ? 'active' : ''}`}
                          style={{ '--world-color': world.color }}
                        />
                      )}
                      <button
                        className={`progress-node ${state} ${isBoss ? 'boss' : ''}`}
                        style={{ '--world-color': world.color }}
                        disabled={!canClick}
                        onClick={() => canClick && onSelectLesson && onSelectLesson(world.num, lessonNum)}
                        title={state === 'locked' ? 'Complete previous lessons to unlock' : name}
                      >
                        <div className="progress-node-icon">
                          {state === 'completed' && (
                            <span className="node-check">&#10003;</span>
                          )}
                          {state === 'current' && (
                            <span className="node-current-dot" />
                          )}
                          {state === 'locked' && (
                            <span className="node-lock">&#128274;</span>
                          )}
                        </div>
                        <div className="progress-node-label">
                          <span className="node-num">{lessonNum}</span>
                          <span className="node-name">{name}</span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
