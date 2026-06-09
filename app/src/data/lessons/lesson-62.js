// Lesson 62 — Reusable Code
export default {
  id: 'world-07/lesson-62-reusable-code',
  title: 'Reusable Code',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Write Once, Use Many Times',
      body: 'A function is most useful when you need the same logic in multiple places.\n\nImagine a display_header function — call it at the top of every screen instead of copy-pasting 5 echo lines everywhere.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Calling the Same Function Multiple Times',
      body: 'Call the same function before different sections — the code runs fresh each time.',
      code: '@echo off\ncall :header\necho SECTION: Status\ncall :header\necho SECTION: Log\npause\nexit /b\n\n:header\necho ====================\necho TERMINAL PRIME v2.0\necho ====================\nexit /b',
      output: '====================\nTERMINAL PRIME v2.0\n====================\nSECTION: Status\n====================\nTERMINAL PRIME v2.0\n====================\nSECTION: Log',
    },
    {
      type: 'predict',
      question: 'If you fix a typo inside :header, how many places are fixed?',
      options: [
        { text: 'All places that call :header', correct: true, explanation: 'That is the power of functions — fix in one place, fixed everywhere.' },
        { text: 'Only the first call', correct: false, explanation: 'The function body is shared by all calls.' },
        { text: 'None, you must also fix the caller', correct: false, explanation: 'The caller does not contain the echo text.' },
        { text: 'You must create a new function', correct: false, explanation: 'Just edit the original function.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\ncall :divider\necho MAIN MENU\ncall :divider\npause\nexit /b\n\n:divider\necho --------------------\n',
      blank: 'exit /b',
      after: '',
      answer: 'exit /b',
      hint: 'The function needs a return statement',
    },
    {
      type: 'build',
      prompt: 'Create a program with three separate "screens" (sections). Each screen calls a :header function at the top showing the app name. After the header, each screen shows different content. Use cls between screens and pause to wait.',
      minLines: 20,
      starterCode: '@echo off\ncall :header\necho SCREEN 1 content\npause\ncls\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Reusability protocols established. Code duplication eliminated.',
    },
  ],
};
