import lesson01 from './lesson-01.js';
import lesson02 from './lesson-02.js';
import lesson03 from './lesson-03.js';
import lesson04 from './lesson-04.js';
import lesson05 from './lesson-05.js';
import lesson06 from './lesson-06.js';
import lesson07 from './lesson-07.js';
import lesson08 from './lesson-08.js';
import lesson09 from './lesson-09.js';
import lesson10 from './lesson-10.js';
import lesson11 from './lesson-11.js';
import lesson12 from './lesson-12.js';
import lesson13 from './lesson-13.js';
import lesson14 from './lesson-14.js';
import lesson15 from './lesson-15.js';
import lesson16 from './lesson-16.js';
import lesson17 from './lesson-17.js';
import lesson18 from './lesson-18.js';
import lesson19 from './lesson-19.js';
import lesson20 from './lesson-20.js';
import lesson21 from './lesson-21.js';
import lesson22 from './lesson-22.js';
import lesson23 from './lesson-23.js';
import lesson24 from './lesson-24.js';
import lesson25 from './lesson-25.js';
import lesson26 from './lesson-26.js';
import lesson27 from './lesson-27.js';
import lesson28 from './lesson-28.js';
import lesson29 from './lesson-29.js';
import lesson30 from './lesson-30.js';
import lesson31 from './lesson-31.js';
import lesson32 from './lesson-32.js';
import lesson33 from './lesson-33.js';

const LESSONS = {
  'world-01/lesson-01-hello-world': lesson01,
  'world-01/lesson-02-the-computer-waits': lesson02,
  'world-01/lesson-03-clearing-the-screen': lesson03,
  'world-01/lesson-04-changing-the-title': lesson04,
  'world-01/lesson-05-colors': lesson05,
  'world-01/lesson-06-ascii-art': lesson06,
  'world-01/lesson-07-the-computer-talks': lesson07,
  'world-01/lesson-08-fake-operating-system': lesson08,
  'world-01/lesson-09-terminal-adventure': lesson09,
  'world-01/lesson-10-boss-battle-dead-terminal': lesson10,

  'world-02/lesson-11-what-is-memory': lesson11,
  'world-02/lesson-12-displaying-variables': lesson12,
  'world-02/lesson-13-player-names': lesson13,
  'world-02/lesson-14-health-bars': lesson14,
  'world-02/lesson-15-gold-system': lesson15,
  'world-02/lesson-16-inventory-system': lesson16,
  'world-02/lesson-17-stats': lesson17,
  'world-02/lesson-18-character-creator': lesson18,
  'world-02/lesson-19-save-character': lesson19,
  'world-02/lesson-20-boss-battle-amnesia-virus': lesson20,

  'world-03/lesson-21-if-statements': lesson21,
  'world-03/lesson-22-password-checker': lesson22,
  'world-03/lesson-23-age-checker': lesson23,
  'world-03/lesson-24-decision-trees': lesson24,
  'world-03/lesson-25-multiple-outcomes': lesson25,
  'world-03/lesson-26-branching-stories': lesson26,
  'world-03/lesson-27-choose-your-adventure': lesson27,
  'world-03/lesson-28-conversation-system': lesson28,
  'world-03/lesson-29-not-and-combining-conditions': lesson29,
  'world-03/lesson-30-boss-battle-logic-bomb': lesson30,

  'world-04/lesson-31-labels-and-goto': lesson31,
  'world-04/lesson-32-infinite-loops': lesson32,
  'world-04/lesson-33-game-loops': lesson33,
};

export function getLessonData(worldId, lessonId) {
  const key = `${worldId}/${lessonId}`;
  return LESSONS[key] || null;
}

export default LESSONS;
