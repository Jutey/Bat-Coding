// Lesson 72 — File Organizer
export default {
  id: 'world-08/lesson-72-file-organizer',
  title: 'File Organizer',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Creating Folders with mkdir',
      body: 'Automation means making the computer do repetitive tasks for you.\n\n`mkdir` creates a directory (folder). `move` moves files. String these together and you have an organizer.',
      code: null,
    },
    {
      type: 'learn',
      title: 'mkdir — Create Directories',
      body: '`mkdir foldername` creates a new folder. If it already exists, it shows a harmless message.',
      code: '@echo off\nmkdir Reports\nmkdir Archives\nmkdir Temp\necho Folders created.\npause',
      output: 'Folders created.\n(Three folders now exist)',
    },
    {
      type: 'predict',
      question: 'What happens if you run `mkdir Reports` when Reports already exists?',
      options: [
        { text: 'A message says the folder already exists but no harm done', correct: true, explanation: 'mkdir fails gracefully — the folder is untouched.' },
        { text: 'The folder is deleted and recreated', correct: false, explanation: 'mkdir does not delete anything.' },
        { text: 'The script crashes', correct: false, explanation: 'mkdir errors are non-fatal.' },
        { text: 'A duplicate folder is created', correct: false, explanation: 'You cannot have two folders with the same name.' },
      ],
    },
    {
      type: 'learn',
      title: 'move — Move Files',
      body: '`move source destination` relocates a file. Combine with mkdir to organize automatically.',
      code: '@echo off\nmkdir TextFiles\necho test > sample.txt\nmove sample.txt TextFiles\\\necho File organized.\npause',
      output: 'File organized.\n(sample.txt is now in TextFiles folder)',
    },
    {
      type: 'fill',
      before: '@echo off\nmkdir Projects\necho My notes > notes.txt\n',
      blank: 'move notes.txt Projects\\',
      after: '\necho Organized!\npause',
      answer: 'move notes.txt Projects\\',
      hint: 'Use move to put notes.txt inside the Projects folder',
    },
    {
      type: 'build',
      prompt: 'Build a workspace setup script that:\n1. Creates folders: Documents, Images, Scripts, Temp\n2. Creates a sample .txt file in the root\n3. Moves it into Documents\n4. Prints "Workspace initialized" with a folder listing',
      minLines: 10,
      starterCode: '@echo off\necho Setting up workspace...\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'File system organization protocols active.',
    },
  ],
};
