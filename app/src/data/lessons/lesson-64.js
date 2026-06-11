// Lesson 64 — Combat Function
export default {
  id: 'world-07/lesson-64-combat-function',
  title: 'Combat Function',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Isolating Complex Logic',
      body: 'Battle logic is complex: damage rolls, crit checks, HP updates, death checks.\n\nPut all of that inside a :combat function. The main game loop stays clean — it just calls :combat when needed.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The Combat Module',
      body: 'Functions can read and modify global variables. Your combat function reads playerHP and enemyHP, updates them, then returns.',
      code: '@echo off\nset playerHP=50\nset enemyHP=30\n:gameloop\ncls\necho Your HP: %playerHP% | Enemy HP: %enemyHP%\necho.\nchoice /c AF /m "Attack or Flee"\nif errorlevel 2 goto flee\ncall :combat\nif %enemyHP% LEQ 0 goto win\ngoto gameloop\n:flee\necho You fled!\ngoto end\n:win\necho VICTORY!\ngoto end\n:end\npause\nexit /b\n\n:combat\nset /a dmg=%random% %% 10 + 5\nset /a enemyHP=%enemyHP%-%dmg%\nset /a retaliation=%random% %% 6 + 2\nset /a playerHP=%playerHP%-%retaliation%\necho You deal %dmg% damage. Enemy retaliates for %retaliation%.\nexit /b',
      output: 'Your HP: 50 | Enemy HP: 30\n\n[A]ttack or [F]lee\nYou deal 8 damage. Enemy retaliates for 5.',
    },
    {
      type: 'predict',
      question: 'Why does the main loop check `if %enemyHP% LEQ 0` AFTER calling :combat, not inside :combat?',
      options: [
        { text: 'The main loop controls game flow; :combat just handles numbers', correct: true, explanation: 'Good design: functions do one job. The loop decides what happens next.' },
        { text: 'You cannot use if inside a function', correct: false, explanation: 'You can use if anywhere.' },
        { text: 'LEQ only works in the main script', correct: false, explanation: 'LEQ works everywhere.' },
        { text: 'It does not matter where you check', correct: false, explanation: 'Separation of concerns makes code cleaner and easier to change.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset hp=50\ncall :attack\necho HP after: %hp%\npause\nexit /b\n\n:attack\nset /a dmg=%random% %% 10 + 1\nset /a hp=%hp%-%dmg%\necho Took %dmg% damage.\n',
      blank: 'exit /b',
      after: '',
      answer: 'exit /b',
      hint: 'The :attack function needs to return',
    },
    {
      type: 'fix',
      prompt: 'The :combat function uses += syntax, which Batch does not support. Fix the damage calculation lines so they use set /a correctly.',
      code: '@echo off\nset playerHP=50\nset enemyHP=30\ncall :combat\necho HP: %playerHP% vs %enemyHP%\npause\nexit /b\n\n:combat\nset /a dmg=%random% %% 10 + 5\nenemyHP += dmg\nset /a retaliation=%random% %% 6 + 2\nplayerHP += retaliation\necho You deal %dmg% damage. Enemy retaliates for %retaliation%.\nexit /b',
      answer: '@echo off\nset playerHP=50\nset enemyHP=30\ncall :combat\necho HP: %playerHP% vs %enemyHP%\npause\nexit /b\n\n:combat\nset /a dmg=%random% %% 10 + 5\nset /a enemyHP=%enemyHP%-%dmg%\nset /a retaliation=%random% %% 6 + 2\nset /a playerHP=%playerHP%-%retaliation%\necho You deal %dmg% damage. Enemy retaliates for %retaliation%.\nexit /b',
      hint: 'Batch does not have a += operator like other languages.',
      hint2: 'Use `set /a enemyHP=%enemyHP%-%dmg%` and `set /a playerHP=%playerHP%-%retaliation%`.',
    },
    {
      type: 'build',
      prompt: 'Build a game with a dedicated :combat function. The function should:\n- Roll player damage (1-12)\n- Roll enemy damage (1-8)\n- 20% crit chance for player (roll 0-1 on %random% %% 10)\n- Print the round result\n- Update both HP variables\n\nThe main loop should call it and handle win/lose.',
      minLines: 28,
      starterCode: '@echo off\nset playerHP=60\nset enemyHP=35\n:loop\ncls\necho HP: %playerHP% vs %enemyHP%\nchoice /c AF /m "Attack/Flee"\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Combat modules encapsulated. Clean code architecture achieved.',
    },
  ],
};
