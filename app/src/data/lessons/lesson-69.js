// Lesson 69 — Function Library
export default {
  id: 'world-07/lesson-69-function-library',
  title: 'Function Library',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Standard Tools You Write Once',
      body: 'Professional developers keep a library of utility functions they reuse across projects.\n\nYours might include:\n- :divider (prints a line)\n- :clear_screen (cls + header)\n- :confirm (yes/no prompt)\n- :wait (pause with message)\n\nBuild these once. Copy them into any project.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Utility Functions',
      body: 'Small, single-purpose functions that handle common tasks.',
      code: '@echo off\ncall :divider\necho MAIN CONTENT\ncall :divider\ncall :confirm\nif errorlevel 2 echo Cancelled.\nif errorlevel 1 echo Confirmed!\npause\nexit /b\n\n:divider\necho ============================\nexit /b\n\n:confirm\necho Confirm action? (Y/N)\nchoice /c YN\nexit /b',
      output: '============================\nMAIN CONTENT\n============================\nConfirm action? (Y/N)',
    },
    {
      type: 'predict',
      question: 'Why is a :divider function useful even though it is just one echo line?',
      options: [
        { text: 'If you change the divider style, it updates everywhere', correct: true, explanation: 'Change one function, instantly update every screen that uses it.' },
        { text: 'It runs faster than a direct echo', correct: false, explanation: 'Speed is not the benefit.' },
        { text: 'echo lines cannot print dashes', correct: false, explanation: 'echo works fine for dashes.' },
        { text: 'Functions must be at least 5 lines', correct: false, explanation: 'Functions can be any length.' },
      ],
    },
    {
      type: 'type',
      prompt: 'Write a :beep_warn function that echoes "WARNING: Check system logs" and then calls exit /b',
      answer: ':beep_warn\necho WARNING: Check system logs\nexit /b',
      hint: 'Start with the label, echo the message, then return',
    },
    {
      type: 'fix',
      prompt: 'The :divider utility function is missing its return statement, so calling it falls straight through into :confirm. Fix the function.',
      code: '@echo off\ncall :divider\necho MAIN CONTENT\ncall :divider\npause\nexit /b\n\n:divider\necho ============================\n\n:confirm\necho Confirm action? (Y/N)\nchoice /c YN\nexit /b',
      answer: '@echo off\ncall :divider\necho MAIN CONTENT\ncall :divider\npause\nexit /b\n\n:divider\necho ============================\nexit /b\n\n:confirm\necho Confirm action? (Y/N)\nchoice /c YN\nexit /b',
      hint: 'Every function called with `call` must end with a line that returns control.',
      hint2: 'Add `exit /b` after the echo line in :divider so it returns instead of running into :confirm.',
    },
    {
      type: 'build',
      prompt: 'Build your personal Batch utility library. Create at least 5 utility functions:\n1. :header — prints app name in a box\n2. :divider — prints a line\n3. :confirm — yes/no with choice\n4. :error_msg — prints a formatted error\n5. :success_msg — prints a formatted success\n\nThen build a demo program that calls all 5.',
      minLines: 30,
      starterCode: '@echo off\ncall :header\ncall :divider\necho Test output\ncall :success_msg\ncall :confirm\npause\nexit /b\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Utility library compiled. Reusable tools are standing by for any mission.',
    },
  ],
};
