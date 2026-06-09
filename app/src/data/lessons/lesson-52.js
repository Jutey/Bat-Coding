// Lesson 52 — Reading Files
export default {
  id: 'world-06/lesson-52-reading-files',
  title: 'Reading Files',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Retrieving Stored Data',
      body: 'Writing a file means nothing if you can not read it back.\n\nThe `type` command prints a file\'s contents to the terminal — like `echo` but for files.',
      code: null,
    },
    {
      type: 'learn',
      title: 'type — Display File Contents',
      body: '`type filename.txt` prints every line in the file.',
      code: '@echo off\necho POWER=100 > data.txt\necho HP=75 >> data.txt\ntype data.txt\npause',
      output: 'POWER=100\nHP=75',
    },
    {
      type: 'predict',
      question: 'What does `type save.txt` do?',
      options: [
        { text: 'Prints the contents of save.txt to the terminal', correct: true, explanation: 'type reads and displays a file.' },
        { text: 'Creates save.txt', correct: false, explanation: 'type reads, > creates.' },
        { text: 'Deletes save.txt', correct: false, explanation: 'type only reads.' },
        { text: 'Changes the file type', correct: false, explanation: 'type has nothing to do with file extensions.' },
      ],
    },
    {
      type: 'type',
      prompt: 'What command would you use to display the contents of log.txt?',
      answer: 'type log.txt',
      hint: 'The command is the same as its own name: type',
    },
    {
      type: 'fill',
      before: '@echo off\necho Data saved > result.txt\n',
      blank: 'type',
      after: ' result.txt\npause',
      answer: 'type',
      hint: 'Which command reads a file aloud to the terminal?',
    },
    {
      type: 'build',
      prompt: 'Build a save-and-load demo:\n1. Write three lines of "game data" to save.txt\n2. Then use type to read and display that file\n3. Add a message before reading: "Loading saved data..."',
      minLines: 7,
      starterCode: '@echo off\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'File read protocols restored. Archived data is accessible.',
    },
  ],
};
