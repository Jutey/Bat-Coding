// Lesson 74 — Backup Script
export default {
  id: 'world-08/lesson-74-backup-script',
  title: 'Backup Script',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Copy — Duplicate Files',
      body: 'Backups protect data. Engineers back up critical files automatically.\n\n`copy source destination` duplicates a file. `xcopy` copies entire folders. These are real tools that professionals use.',
      code: null,
    },
    {
      type: 'learn',
      title: 'copy — Duplicate a File',
      body: 'Create a backup copy with a new name or in a different folder.',
      code: '@echo off\necho test data > important.txt\ncopy important.txt important_backup.txt\necho Backup created.\ntype important_backup.txt\npause',
      output: 'Backup created.\ntest data',
    },
    {
      type: 'predict',
      question: 'After `copy data.txt backup\\data.txt`, how many copies of the file exist?',
      options: [
        { text: '2 — the original and the backup', correct: true, explanation: 'copy duplicates — the original stays.' },
        { text: '1 — the file moved to backup\\', correct: false, explanation: 'move would move it. copy keeps both.' },
        { text: '0 — copy deletes the original', correct: false, explanation: 'copy never deletes.' },
        { text: 'It depends on the folder', correct: false, explanation: 'copy always leaves the original intact.' },
      ],
    },
    {
      type: 'learn',
      title: 'Backup with Timestamp Label',
      body: 'Label your backup so you know when it was made.',
      code: '@echo off\nset backup=save_backup.txt\necho DATA=important > save.txt\ncopy save.txt %backup%\necho Backup: %backup%\ntype %backup%\npause',
      output: 'Backup: save_backup.txt\nDATA=important',
    },
    {
      type: 'fill',
      before: '@echo off\necho critical > system.dat\n',
      blank: 'copy system.dat system_backup.dat',
      after: '\necho Backup done.\npause',
      answer: 'copy system.dat system_backup.dat',
      hint: 'Use copy with source then destination filename',
    },
    {
      type: 'build',
      prompt: 'Build an automated backup system:\n1. Check if save.txt exists (if exist)\n2. If yes: copy to backup.txt, echo "Backup created"\n3. If no: echo "No save file to backup"\n4. Log the backup event (append to backup.log)\n5. Show backup.log at the end',
      minLines: 12,
      starterCode: '@echo off\necho BACKUP SYSTEM\necho.\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Backup systems operational. Critical data is now protected.',
    },
  ],
};
