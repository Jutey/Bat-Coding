// Lesson 47 — Probability Check
export default {
  id: 'world-05/lesson-47-probability-check',
  title: 'Probability Check',
  world: 'SECTOR 5 — THE RANDOM SERVER',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Not All Chances Are Equal',
      body: 'A coin flip is 50/50. But in games, a rare item should drop maybe 1 in 10 times.\n\nYou control probability by setting the range and checking only part of it.',
      code: null,
    },
    {
      type: 'learn',
      title: '10% Chance',
      body: 'Roll 0-9. If you get exactly 0, that is a 1-in-10 (10%) chance.',
      code: '@echo off\nset /a roll=%random% %% 10\nif %roll%==0 echo CRITICAL HIT!\nif %roll% GTR 0 echo Normal hit.\npause',
      output: 'Normal hit.',
    },
    {
      type: 'predict',
      question: 'If you use `%random% %% 4` and check `if %roll%==0`, roughly how often does the event trigger?',
      options: [
        { text: '25% of the time', correct: true, explanation: 'One out of four values (0,1,2,3) matches.' },
        { text: '50% of the time', correct: false, explanation: 'That would be checking half the range.' },
        { text: '100% of the time', correct: false, explanation: 'Only value 0 matches, not all values.' },
        { text: '10% of the time', correct: false, explanation: 'For 10%, use modulo 10.' },
      ],
    },
    {
      type: 'learn',
      title: 'Weighted Loot Table',
      body: 'Use ranges to give different weights to different items.',
      code: '@echo off\nset /a roll=%random% %% 10\nif %roll% LSS 5 echo Common: Iron Ore\nif %roll% GEQ 5 if %roll% LSS 8 echo Uncommon: Silver\nif %roll% GEQ 8 echo RARE: Gold!\npause',
      output: 'Common: Iron Ore',
    },
    {
      type: 'fill',
      before: '@echo off\nset /a roll=%random% %% 100\nif %roll% LSS 70 echo Common drop\nif %roll% GEQ 70 if %roll% LSS 95 echo Rare drop\nif %roll% GEQ 95 echo ',
      blank: 'LEGENDARY drop',
      after: '\npause',
      answer: 'LEGENDARY drop',
      hint: 'What should show up only 5% of the time?',
    },
    {
      type: 'build',
      prompt: 'Create a loot system with three tiers:\n- 60% chance: junk\n- 30% chance: equipment\n- 10% chance: legendary\nUse %random% %% 10 and print the result.',
      minLines: 6,
      starterCode: '@echo off\nset /a roll=%random% %% 10\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Probability matrices calibrated. The server can now weight outcomes.',
    },
  ],
};
