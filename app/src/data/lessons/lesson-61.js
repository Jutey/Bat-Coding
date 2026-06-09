// Lesson 61 — What Are Functions
export default {
  id: 'world-07/lesson-61-what-are-functions',
  title: 'What Are Functions',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'The Function Factory',
      body: 'Sector 7 is where programs get modular.\n\nRight now, if you want the same block of code in two places, you copy it. That creates bugs — change one copy but forget the other.\n\n**Functions** let you write code once and call it from anywhere.',
      code: null,
    },
    {
      type: 'learn',
      title: 'call — Run a Label Like a Function',
      body: '`call :labelname` jumps to that label, runs the code, then returns to where you called from.\n\nThis is fundamentally different from `goto` — goto does not return.',
      code: '@echo off\ncall :greet\necho Back in main program.\npause\nexit /b\n\n:greet\necho Hello from the greet function!\nexit /b',
      output: 'Hello from the greet function!\nBack in main program.',
    },
    {
      type: 'predict',
      question: 'What is the key difference between `call :label` and `goto :label`?',
      options: [
        { text: 'call returns to the caller; goto does not', correct: true, explanation: 'call is like a detour. goto is a one-way road.' },
        { text: 'They do the same thing', correct: false, explanation: 'goto never returns.' },
        { text: 'call is faster', correct: false, explanation: 'Speed is not the difference.' },
        { text: 'goto can be used anywhere; call cannot', correct: false, explanation: 'Both can be used anywhere.' },
      ],
    },
    {
      type: 'learn',
      title: 'exit /b — Return from Function',
      body: '`exit /b` at the end of a function returns to the caller. Without it, execution falls through to the next label.',
      code: '@echo off\ncall :status\ncall :status\ncall :status\npause\nexit /b\n\n:status\necho System: ONLINE\nexit /b',
      output: 'System: ONLINE\nSystem: ONLINE\nSystem: ONLINE',
    },
    {
      type: 'fill',
      before: '@echo off\ncall :scan\necho Done.\npause\nexit /b\n\n:scan\necho Scanning network...\n',
      blank: 'exit /b',
      after: '',
      answer: 'exit /b',
      hint: 'What command returns from the function back to the caller?',
    },
    {
      type: 'fix',
      code: '@echo off\ncall :welcome\npause\nexit /b\n\n:welcome\necho Welcome, Operator.\n',
      answer: '@echo off\ncall :welcome\npause\nexit /b\n\n:welcome\necho Welcome, Operator.\nexit /b',
      hint: 'The function is missing something at the end',
      hint2: 'Add exit /b at the end of the :welcome function',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Function Factory core activated. Reusable code modules are now online.',
    },
  ],
};
