// Lesson 48 — Weighted Random
export default {
  id: 'world-05/lesson-48-weighted-random',
  title: 'Weighted Random',
  world: 'SECTOR 5 — THE RANDOM SERVER',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Making Things Feel Natural',
      body: 'Pure 50/50 random feels mechanical. Real games weight outcomes.\n\nA veteran player should crit more. A fragile enemy should dodge less. You control this by expanding the range and reserving parts of it.',
      code: null,
    },
    {
      type: 'learn',
      title: 'A Weighted Damage Roll',
      body: 'Roll 1-20. Low rolls (1-5) are weak. Middle (6-15) are normal. High (16-20) are crits.',
      code: '@echo off\nset /a roll=%random% %% 20 + 1\necho Roll: %roll%\nif %roll% LSS 6 echo Weak hit: 2 damage\nif %roll% GEQ 6 if %roll% LSS 16 echo Normal hit: 5 damage\nif %roll% GEQ 16 echo CRITICAL: 12 damage!\npause',
      output: 'Roll: 14\nNormal hit: 5 damage',
    },
    {
      type: 'predict',
      question: 'In the code above, what percentage of rolls produce a CRITICAL?',
      options: [
        { text: '25% (rolls 16-20 out of 1-20)', correct: true, explanation: 'Rolls 16, 17, 18, 19, 20 = 5 out of 20 = 25%.' },
        { text: '50%', correct: false, explanation: 'That would be 10 out of 20 values.' },
        { text: '5%', correct: false, explanation: '5% would be 1 out of 20.' },
        { text: '75%', correct: false, explanation: 'Most rolls land in the normal range.' },
      ],
    },
    {
      type: 'type',
      prompt: 'What command generates a random number from 1 to 6 (like a dice)?',
      answer: 'set /a roll=%random% %% 6 + 1',
      hint: 'Use set /a with %random% and modulo 6, then add 1',
    },
    {
      type: 'fix',
      code: '@echo off\nset /a roll=%random% % 20 + 1\nif %roll% LSS 6 echo Weak\nif %roll% GEQ 16 echo CRIT\npause',
      answer: '@echo off\nset /a roll=%random% %% 20 + 1\nif %roll% LSS 6 echo Weak\nif %roll% GEQ 16 echo CRIT\npause',
      hint: 'The modulo operator in Batch needs to be escaped',
      hint2: 'Use %% instead of % for modulo inside set /a',
    },
    {
      type: 'build',
      prompt: 'Build a weapon damage calculator. Roll 1-100. Print:\n- Glancing blow (1-20): 3 damage\n- Solid hit (21-70): 8 damage\n- Power strike (71-90): 15 damage\n- DEVASTATING (91-100): 25 damage',
      minLines: 8,
      starterCode: '@echo off\nset /a roll=%random% %% 100 + 1\necho Roll: %roll%\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Weighted probability nodes online. The server is learning nuance.',
    },
  ],
};
