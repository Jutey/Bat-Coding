// Lesson 95 — Math Bugs
export default {
  id: 'world-10/lesson-95-math-bugs',
  title: 'Math Bugs',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'When Numbers Lie',
      body: 'Math bugs are subtle. The code runs, produces a number — but it is the wrong number.\n\nCommon math bugs:\n- Wrong operator (+ instead of -)\n- Wrong order of operations\n- Off-by-one in loops\n- Forgetting to initialize a counter',
      code: null,
    },
    {
      type: 'predict',
      question: 'What does this print?',
      code: '@echo off\nset /a result=10+5*2\necho %result%\npause',
      options: [
        { text: '20 (10+5=15, 15*2=30 — wait, actually Batch evaluates left to right)', correct: false, explanation: 'Batch set /a follows standard math precedence.' },
        { text: '20 (5*2=10, 10+10=20)', correct: true, explanation: 'Batch set /a does follow precedence: * before +. So 5*2=10, then 10+10=20.' },
        { text: '30 (left to right: 10+5=15, 15*2=30)', correct: false, explanation: 'Batch follows standard order of operations.' },
        { text: '15 (adds first, ignores multiply)', correct: false, explanation: 'Multiplication is performed first.' },
      ],
    },
    {
      type: 'fix',
      code: '@echo off\nset /a total=5+3\nset /a doubled=total*2\necho Total: %total%\necho Doubled: %doubled%\npause',
      answer: '@echo off\nset /a total=5+3\nset /a doubled=%total%*2\necho Total: %total%\necho Doubled: %doubled%\npause',
      hint: 'In set /a, to reference another variable, what do you need?',
      hint2: 'Use %total% with percent signs inside set /a: set /a doubled=%total%*2',
    },
    {
      type: 'fix',
      code: '@echo off\nset score=0\nset /a score=score+10\nset /a score=score+10\nset /a score=score+10\necho Final score: %score%\npause',
      answer: '@echo off\nset score=0\nset /a score=%score%+10\nset /a score=%score%+10\nset /a score=%score%+10\necho Final score: %score%\npause',
      hint: 'set /a needs to read the current variable value properly',
      hint2: 'Add % signs around score in each set /a line',
    },
    {
      type: 'fix',
      code: '@echo off\nset /a damage=%random% %% 10\necho Damage: %damage%\nset /a hp=50-damage\necho HP: %hp%\npause',
      answer: '@echo off\nset /a damage=%random% %% 10\necho Damage: %damage%\nset /a hp=50-%damage%\necho HP: %hp%\npause',
      hint: 'The HP calculation has the same variable reference bug',
      hint2: 'Add % signs around damage in the last set /a',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Mathematical error matrix cleared. Calculations are now reliable.',
    },
  ],
};
