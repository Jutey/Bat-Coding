// Lesson 51 — Creating Files
export default {
  id: 'world-06/lesson-51-creating-files',
  title: 'Creating Files',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'The File Fortress is Dark',
      body: 'You\'ve been storing data in variables — but variables vanish when the program ends.\n\nFiles are permanent storage. Data written to a file survives after the terminal closes.\n\nThis is how games save progress. This is how apps remember you.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The > Operator — Write to File',
      body: '`>` redirects output into a file. If the file does not exist, it creates it. If it exists, it overwrites it.',
      code: '@echo off\necho POWER=100 > status.txt\necho File written.\npause',
      output: 'File written.\n(status.txt now exists with "POWER=100" inside)',
    },
    {
      type: 'predict',
      question: 'What happens if you run `echo Hello > data.txt` twice?',
      options: [
        { text: 'The file gets "Hello" twice', correct: false, explanation: '> always overwrites. Use >> to append.' },
        { text: 'The second run overwrites the first', correct: true, explanation: '> creates fresh each time.' },
        { text: 'An error occurs', correct: false, explanation: 'Batch handles this silently.' },
        { text: 'The file doubles in size', correct: false, explanation: '> replaces content, not adds.' },
      ],
    },
    {
      type: 'type',
      prompt: 'Write the command to save the text "LEVEL=1" into a file called save.txt',
      answer: 'echo LEVEL=1 > save.txt',
      hint: 'Use echo, then >, then the filename',
    },
    {
      type: 'fill',
      before: '@echo off\necho SCORE=500 > ',
      blank: 'highscore.txt',
      after: '\necho Saved!\npause',
      answer: 'highscore.txt',
      hint: 'After > comes the filename',
    },
    {
      type: 'fix',
      code: '@echo off\necho PLAYER=Cadet < save.txt\npause',
      answer: '@echo off\necho PLAYER=Cadet > save.txt\npause',
      hint: 'You are writing TO a file, not reading FROM one',
      hint2: 'Change < to >',
    },
    {
      type: 'build',
      prompt: 'Create a save file generator. Ask the player for their name and level, then write both to a file called player.txt. Each piece of data on its own line.',
      minLines: 6,
      starterCode: '@echo off\nset /p name=Your name: \nset /p level=Your level: \n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'File write protocols online. Data can now persist.',
    },
  ],
};
