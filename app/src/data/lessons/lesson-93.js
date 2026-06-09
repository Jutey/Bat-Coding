// Lesson 93 — Logic Bugs
export default {
  id: 'world-10/lesson-93-logic-bugs',
  title: 'Logic Bugs',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'When the Code Runs But Does the Wrong Thing',
      body: 'Logic bugs are the trickiest. The program runs without error — but the output is wrong.\n\nExamples:\n- A gate opens when it should stay closed\n- A counter counts backwards\n- A condition is always true\n\nYou have to reason through the code, not just look for typos.',
      code: null,
    },
    {
      type: 'predict',
      question: 'What does this code do wrong?',
      code: '@echo off\nset /p password=Password: \nif not "%password%"=="secret" echo Access granted\nif "%password%"=="secret" echo Access denied\npause',
      options: [
        { text: 'The if conditions are reversed — correct password is denied, wrong is allowed', correct: true, explanation: 'The logic is backwards. not should be removed from the first line.' },
        { text: 'The password comparison is case sensitive', correct: false, explanation: 'That is a different issue — the logic itself is backwards.' },
        { text: 'Missing % signs around password', correct: false, explanation: 'The % signs are correctly placed.' },
        { text: 'Nothing is wrong', correct: false, explanation: 'Try tracing through: correct password → runs line 2 (not match = true) → grants access. That is wrong.' },
      ],
    },
    {
      type: 'fix',
      code: '@echo off\nset /p password=Password: \nif not "%password%"=="secret" echo Access granted\nif "%password%"=="secret" echo Access denied\npause',
      answer: '@echo off\nset /p password=Password: \nif "%password%"=="secret" echo Access granted\nif not "%password%"=="secret" echo Access denied\npause',
      hint: 'The conditions for granted and denied are swapped',
      hint2: 'Correct password should grant access — remove "not" from the first if',
    },
    {
      type: 'fix',
      code: '@echo off\nset count=0\n:loop\necho Count: %count%\nset /a count=%count%-1\nif %count% LSS 5 goto loop\npause',
      answer: '@echo off\nset count=0\n:loop\necho Count: %count%\nset /a count=%count%+1\nif %count% LSS 5 goto loop\npause',
      hint: 'The counter is going the wrong direction',
      hint2: 'Change the minus to plus in the set /a line',
    },
    {
      type: 'fix',
      code: '@echo off\nset hp=100\nset /a damage=%random% %% 20 + 1\nset /a hp=%hp%+damage\necho HP after hit: %hp%\npause',
      answer: '@echo off\nset hp=100\nset /a damage=%random% %% 20 + 1\nset /a hp=%hp%-%damage%\necho HP after hit: %hp%\npause',
      hint: 'Damage should reduce HP, not increase it',
      hint2: 'Change + to - in the HP calculation',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Logic fault containment complete. The dungeon\'s traps have been neutralized.',
    },
  ],
};
