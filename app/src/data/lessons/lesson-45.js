// Lesson 45 — Random Encounters
export default {
  id: 'world-05/lesson-45-random-encounters',
  title: 'Random Encounters',
  world: 'SECTOR 5 — THE RANDOM SERVER',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'The Encounter System',
      body: 'In every RPG, something unexpected can happen at any moment.\n\nYou move through a dungeon — will you find a monster, a treasure, or nothing?\n\nThat randomness keeps players engaged. You can build it in Batch.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Random Range for Encounters',
      body: 'Use `%random% %% 3` to get 0, 1, or 2 — three possible outcomes.',
      code: '@echo off\nset /a encounter=%random% %% 3\necho Encounter roll: %encounter%\npause',
      output: 'Encounter roll: 1',
    },
    {
      type: 'predict',
      question: 'What values can `%random% %% 3` produce?',
      options: [
        { text: '0, 1, or 2', correct: true, explanation: 'Modulo 3 gives remainders 0, 1, 2.' },
        { text: '1, 2, or 3', correct: false, explanation: 'Modulo starts at 0, not 1.' },
        { text: 'Any number', correct: false, explanation: 'Modulo limits the range.' },
        { text: 'Only 0', correct: false, explanation: 'The remainder changes each time.' },
      ],
    },
    {
      type: 'learn',
      title: 'Three Outcomes',
      body: 'Use `if` to check which roll happened and print the matching event.',
      code: '@echo off\nset /a roll=%random% %% 3\nif %roll%==0 echo You found a monster!\nif %roll%==1 echo You found treasure!\nif %roll%==2 echo The path is empty.\npause',
      output: 'You found treasure!',
    },
    {
      type: 'fill',
      before: '@echo off\nset /a roll=%random% %% 3\nif %roll%==0 echo DANGER\nif %roll%==1 echo SAFE\nif %roll%==2 echo ',
      blank: 'MYSTERY',
      after: '\npause',
      answer: 'MYSTERY',
      hint: 'Add a third outcome label after `echo`',
    },
    {
      type: 'fix',
      code: '@echo off\nset /a roll=%random% %% 3\nif roll==0 echo Monster!\nif roll==1 echo Treasure!\npause',
      answer: '@echo off\nset /a roll=%random% %% 3\nif %roll%==0 echo Monster!\nif %roll%==1 echo Treasure!\npause',
      hint: 'Variable names need % signs when you read them',
      hint2: 'Both if lines need %roll%',
    },
    {
      type: 'build',
      prompt: 'Build an encounter table with at least 4 different outcomes. Use %random% %% 4 to get 0-3, then print a different event for each.',
      minLines: 7,
      starterCode: '@echo off\nset /a roll=%random% %% 4\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'The Random Server is responding. Chaos is becoming pattern.',
    },
  ],
};
