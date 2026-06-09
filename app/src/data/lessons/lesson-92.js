// Lesson 92 — Variable Bugs
export default {
  id: 'world-10/lesson-92-variable-bugs',
  title: 'Variable Bugs',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'The Three Variable Bug Types',
      body: '1. **Missing equals sign** — `set name value` instead of `set name=value`\n2. **Missing percent signs** — `echo name` instead of `echo %name%`\n3. **Wrong variable name** — reading `%namee%` when you set `%name%`\n\nAll three are silent fails — no error message, just wrong output.',
      code: null,
    },
    {
      type: 'predict',
      question: 'What does this output?',
      code: '@echo off\nset name=Cadet\necho name\npause',
      options: [
        { text: 'name (the literal word)', correct: true, explanation: 'Without % signs, echo prints the word "name", not the variable value.' },
        { text: 'Cadet', correct: false, explanation: 'You would need echo %name% to print Cadet.' },
        { text: 'Nothing', correct: false, explanation: 'echo name prints the word name.' },
        { text: 'An error', correct: false, explanation: 'echo always prints something — it never errors.' },
      ],
    },
    {
      type: 'fix',
      code: '@echo off\nset player=Operator\necho Welcome, player\npause',
      answer: '@echo off\nset player=Operator\necho Welcome, %player%\npause',
      hint: 'The variable value is not being accessed properly',
      hint2: 'Add % signs around the variable name in the echo',
    },
    {
      type: 'fix',
      code: '@echo off\nset /p usernme=Enter name: \necho Hello, %username%\npause',
      answer: '@echo off\nset /p usernme=Enter name: \necho Hello, %usernme%\npause',
      hint: 'The variable was stored under one name but read with another',
      hint2: 'Compare the set /p variable name with the echo variable name — they don\'t match',
    },
    {
      type: 'fix',
      code: '@echo off\nset hp 100\necho HP: %hp%\npause',
      answer: '@echo off\nset hp=100\necho HP: %hp%\npause',
      hint: 'The variable assignment is malformed',
      hint2: 'set needs an equals sign: set hp=100',
    },
    {
      type: 'build',
      prompt: 'Write a program that:\n1. Stores three different variables correctly (name, level, score)\n2. Asks for all three via input\n3. Displays them all correctly\nFocus: every variable must use = when set and % when read.',
      minLines: 8,
      starterCode: '@echo off\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Variable corruption cleared. Memory systems are stable.',
    },
  ],
};
