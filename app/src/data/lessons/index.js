import lesson01 from './lesson-01.js';
import lesson02 from './lesson-02.js';
import lesson03 from './lesson-03.js';

const LESSONS = {
  'world-01/lesson-01-hello-world': lesson01,
  'world-01/lesson-02-the-computer-waits': lesson02,
  'world-01/lesson-03-clearing-the-screen': lesson03,
};

export function getLessonData(worldId, lessonId) {
  const key = `${worldId}/${lessonId}`;
  return LESSONS[key] || null;
}

export default LESSONS;
