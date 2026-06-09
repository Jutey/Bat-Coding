// Lesson 96 — Multi-System Bugs
export default {
  id: 'world-10/lesson-96-multi-system-bugs',
  title: 'Multi-System Bugs',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 120,
  steps: [
    {
      type: 'learn',
      title: 'When Everything Is Wrong at Once',
      body: 'The hardest bugs are in complex programs where multiple systems interact.\n\nA variable bug in the save system corrupts the load system. A logic bug in combat breaks the item system.\n\nYou need a strategy: isolate each system, test it alone, then reintegrate.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The Debug Strategy',
      body: '1. Add echo statements to see what variables contain at each step\n2. Comment out sections to isolate the problem\n3. Test with fixed input before testing with user input',
      code: '@echo off\nset hp=50\nset /a damage=10\necho DEBUG: hp=%hp% damage=%damage%\nset /a hp=%hp%-%damage%\necho DEBUG: hp after hit=%hp%\npause',
      output: 'DEBUG: hp=50 damage=10\nDEBUG: hp after hit=40',
    },
    {
      type: 'fix',
      code: '@echo off\nset /p name=Name: \nset level=1\necho %name%.txt > profile.txt\necho level=%levl% >> profile.txt\ntype profile.txt\npause',
      answer: '@echo off\nset /p name=Name: \nset level=1\necho %name% > profile.txt\necho level=%level% >> profile.txt\ntype profile.txt\npause',
      hint: 'Find all the bugs — there are two',
      hint2: 'Bug 1: echo %name%.txt writes the name WITH .txt as content. Bug 2: %levl% has a typo — should be %level%',
    },
    {
      type: 'fix',
      code: '@echo off\nset gold=100\nset hp=50\ncall :shop\necho Gold: %gold% HP: %hp%\npause\nexit /b\n\n:shop\nset /a gold=gold-30\nset /a hp=%hp%+20\necho Bought potion!\nexit /b',
      answer: '@echo off\nset gold=100\nset hp=50\ncall :shop\necho Gold: %gold% HP: %hp%\npause\nexit /b\n\n:shop\nset /a gold=%gold%-30\nset /a hp=%hp%+20\necho Bought potion!\nexit /b',
      hint: 'One set /a line is missing something',
      hint2: 'In set /a, variable references need % signs: set /a gold=%gold%-30',
    },
    {
      type: 'build',
      prompt: 'Write a complete program with at least 3 functions that you KNOW is bug-free. Test it mentally before submitting:\n- A function that calculates something with set /a\n- A function that saves a result to a file\n- A function that reads the file back\n\nAll math correct, all variable references use %, all functions end with exit /b.',
      minLines: 25,
      starterCode: '@echo off\ncall :calculate\ncall :save_result\ncall :load_result\npause\nexit /b\n',
    },
    {
      type: 'reward',
      xp: 120,
      storyUpdate: 'Multi-system error cascade halted. All subsystems operating within parameters.',
    },
  ],
};
