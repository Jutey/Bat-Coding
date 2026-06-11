// Lesson 54 — Saving Game State
export default {
  id: 'world-06/lesson-54-saving-game-state',
  title: 'Saving Game State',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'What Is a Save File?',
      body: 'Every game you\'ve saved uses this exact pattern:\n1. Collect all important variables\n2. Write them to a file\n3. Next time you open the game, read that file and restore the variables\n\nYou are about to build exactly this.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Writing Multiple Variables to File',
      body: 'Write each variable on its own line using `>` for first, `>>` for the rest.',
      code: '@echo off\nset name=Cadet\nset level=3\nset hp=75\necho name=%name% > save.txt\necho level=%level% >> save.txt\necho hp=%hp% >> save.txt\necho Game saved!\npause',
      output: 'Game saved!\n(save.txt contains three lines)',
    },
    {
      type: 'predict',
      question: 'Why does the first line use `>` and the rest use `>>`?',
      options: [
        { text: '> starts fresh, >> adds to it', correct: true, explanation: 'If all used >>, old data might remain. If all used >, only the last line survives.' },
        { text: 'They do the same thing', correct: false, explanation: 'They behave very differently.' },
        { text: '>> is faster', correct: false, explanation: 'Speed is not the reason.' },
        { text: 'Only > works for variables', correct: false, explanation: 'Both work for any echo output.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset score=500\nset level=4\necho score=%score% > progress.txt\necho level=%level% ',
      blank: '>>',
      after: ' progress.txt\necho Saved.\npause',
      answer: '>>',
      hint: 'The second line should add to the file, not replace it',
    },
    {
      type: 'fix',
      prompt: 'Every line uses >>. If you run this twice, the save file grows with old data. Fix the first line to use > so the save file is always fresh.',
      code: '@echo off\nset name=Hero\nset hp=100\nset gold=50\necho name=%name% >> save.txt\necho hp=%hp% >> save.txt\necho gold=%gold% >> save.txt\necho Saved!\npause',
      answer: '@echo off\nset name=Hero\nset hp=100\nset gold=50\necho name=%name% > save.txt\necho hp=%hp% >> save.txt\necho gold=%gold% >> save.txt\necho Saved!\npause',
      hint: 'The first line of a save should start fresh. Only the first line needs the change.',
      hint2: 'Change the first echo ... >> save.txt to echo ... > save.txt to overwrite on each save.',
    },
    {
      type: 'build',
      prompt: 'Build a complete save system. Ask the player for:\n- Their name\n- Current level (1-10)\n- Favorite weapon\n\nSave all three to character.sav, then read it back and display "SAVE FILE LOADED:"',
      minLines: 10,
      starterCode: '@echo off\nset /p name=Name: \nset /p level=Level: \nset /p weapon=Weapon: \n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Save protocols engaged. Player data is now persistent.',
    },
  ],
};
