// Lesson 55 — Loading Game State
export default {
  id: 'world-06/lesson-55-loading-game-state',
  title: 'Loading Game State',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Reading Back a Save File',
      body: 'Writing is half the job. The other half: reading the save file and putting data back into variables.\n\nIn Batch, `for /f` can read a file line by line and extract the value after `=`.',
      code: null,
    },
    {
      type: 'learn',
      title: 'for /f — Read File into Variable',
      body: '`for /f "tokens=2 delims=="` splits each line at `=` and grabs the second part.',
      code: '@echo off\necho name=Cadet > save.txt\nfor /f "tokens=2 delims==" %%a in (save.txt) do set loaded=%%a\necho Loaded: %loaded%\npause',
      output: 'Loaded: Cadet',
    },
    {
      type: 'predict',
      question: 'In `for /f "tokens=2 delims=="`, what does `delims==` mean?',
      options: [
        { text: 'Split the line at the = character', correct: true, explanation: 'delims sets the separator. Here it is the equals sign.' },
        { text: 'Read only lines equal to something', correct: false, explanation: 'delims defines where to split, not what to match.' },
        { text: 'Write to the file', correct: false, explanation: 'for /f only reads.' },
        { text: 'Skip blank lines', correct: false, explanation: 'skip= handles that, not delims.' },
      ],
    },
    {
      type: 'learn',
      title: 'Checking if File Exists',
      body: 'Before loading, check the file exists. Use `if exist`.',
      code: '@echo off\nif exist save.txt (\n  echo Save file found. Loading...\n  type save.txt\n) else (\n  echo No save file. Starting fresh.\n)\npause',
      output: 'Save file found. Loading...\n[file contents]',
    },
    {
      type: 'fill',
      before: '@echo off\nif exist player.txt (\n  echo Loading player data...\n  type player.txt\n) else (\n  echo ',
      blank: 'No save found.',
      after: '\n)\npause',
      answer: 'No save found.',
      hint: 'What message should appear when there is no save file?',
    },
    {
      type: 'build',
      prompt: 'Build a save/load system:\n1. If save.txt exists, display "LOADING..." then type the file\n2. If it does not exist, ask the player for their name and level, save them to save.txt, display "SAVED"\n\nThis simulates a real game save system.',
      minLines: 10,
      starterCode: '@echo off\nif exist save.txt (\n\n) else (\n\n)\npause',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Load protocols operational. Save states can now be restored.',
    },
  ],
};
