// Lesson 98 — Final Debug Challenge
export default {
  id: 'world-10/lesson-98-final-debug-challenge',
  title: 'Final Debug Challenge',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 150,
  steps: [
    {
      type: 'learn',
      title: 'The Hardest Bugs You Have Seen',
      body: 'This lesson contains five programs. Each one has a bug.\n\nSome are typos. Some are logic errors. Some are subtle.\n\nThis is the most challenging debugging exercise in the dungeon.',
      code: null,
    },
    {
      type: 'fix',
      code: '@echo off\nset /p score=Score (0-100): \nif %score% GEQ 90 echo Grade: A\nif %score% GEQ 80 if %score% LSS 90 echo Grade: B\nif %score% GEQ 70 if %score% LSS 80 echo Grade: C\nif %score% LSS 70 echo Grade F\npause',
      answer: '@echo off\nset /p score=Score (0-100): \nif %score% GEQ 90 echo Grade: A\nif %score% GEQ 80 if %score% LSS 90 echo Grade: B\nif %score% GEQ 70 if %score% LSS 80 echo Grade: C\nif %score% LSS 70 echo Grade: F\npause',
      hint: 'Find the missing character — it is subtle',
      hint2: 'Line 6: "Grade F" is missing a colon — should be "Grade: F"',
    },
    {
      type: 'fix',
      code: '@echo off\nset /p name=Name: \necho %name% > profile.txt\nif exist profile.txt (\n  echo Profile saved.\n) else (\n  echo Error saving.\n)\necho Profile for %name:\ntype profile.txt\npause',
      answer: '@echo off\nset /p name=Name: \necho %name% > profile.txt\nif exist profile.txt (\n  echo Profile saved.\n) else (\n  echo Error saving.\n)\necho Profile for %name%:\ntype profile.txt\npause',
      hint: 'One variable reference is malformed',
      hint2: 'Line 9: %name: is missing the closing % — should be %name%:',
    },
    {
      type: 'fix',
      code: '@echo off\nset money=100\ncall :buy\ncall :buy\ncall :buy\necho Final money: %money%\npause\nexit /b\n\n:buy\nset /a money=%money%-25\nexit /b\necho Purchased.\n',
      answer: '@echo off\nset money=100\ncall :buy\ncall :buy\ncall :buy\necho Final money: %money%\npause\nexit /b\n\n:buy\nset /a money=%money%-25\necho Purchased.\nexit /b',
      hint: 'The function has an unreachable line — and one important line is in the wrong place',
      hint2: 'echo Purchased is AFTER exit /b — it never runs. Move echo before exit /b',
    },
    {
      type: 'build',
      prompt: 'Write the MOST CORRECT program you can. No bugs allowed.\n\nBuild a quiz game with 3 questions. For each question:\n- Show the question\n- Give 2-4 answer choices using choice\n- Check errorlevel to determine the correct answer\n- Track score (set /a score=%score%+1 for correct)\n\nAt the end, show the final score and a rating message.',
      minLines: 30,
      starterCode: '@echo off\nset score=0\necho TERMINAL PRIME QUIZ\necho.\n',
    },
    {
      type: 'reward',
      xp: 150,
      storyUpdate: 'Debug Dungeon nearly conquered. Your bug-hunting instincts are razor sharp.',
    },
  ],
};
