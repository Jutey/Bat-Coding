// Lesson 77 — Auto-Renamer
export default {
  id: 'world-08/lesson-77-auto-renamer',
  title: 'Auto-Renamer',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Rename Files Automatically',
      body: 'Photographers, developers, and data engineers deal with hundreds of files that need consistent naming.\n\n`ren` (rename) changes a filename. Combine it with a loop and you have a batch renamer.',
      code: null,
    },
    {
      type: 'learn',
      title: 'ren — Rename Files',
      body: '`ren oldname.txt newname.txt` renames a file in the current directory.',
      code: '@echo off\necho test > report_v1.txt\nren report_v1.txt report_final.txt\necho Renamed successfully.\ndir /b *.txt\npause',
      output: 'Renamed successfully.\nreport_final.txt',
    },
    {
      type: 'predict',
      question: 'After `ren data.csv data_2024.csv`, what is the file called?',
      options: [
        { text: 'data_2024.csv', correct: true, explanation: 'ren changes only the name, not the location or content.' },
        { text: 'data.csv (unchanged)', correct: false, explanation: 'ren changes the name.' },
        { text: 'data and data_2024.csv both exist', correct: false, explanation: 'ren renames — it does not copy.' },
        { text: 'The file is deleted', correct: false, explanation: 'ren never deletes.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\necho content > draft.txt\n',
      blank: 'ren draft.txt final.txt',
      after: '\necho Renamed.\npause',
      answer: 'ren draft.txt final.txt',
      hint: 'Use ren with old name then new name',
    },
    {
      type: 'fix',
      prompt: 'This renamer always tries to rename, even if the file does not exist, causing an error. Fix it to check first.',
      code: '@echo off\necho test > report_v1.txt\nren report_v2.txt report_final.txt\necho Renamed successfully.\ndir /b *.txt\npause',
      answer: '@echo off\necho test > report_v1.txt\nren report_v1.txt report_final.txt\necho Renamed successfully.\ndir /b *.txt\npause',
      hint: 'ren can only rename a file that exists with that exact name.',
      hint2: 'The created file is report_v1.txt, but ren is targeting report_v2.txt — change ren to use report_v1.txt.',
    },
    {
      type: 'build',
      prompt: 'Build an interactive file renamer:\n1. Ask for the current filename\n2. Ask for the new filename\n3. Check if the file exists (if exist)\n4. If yes: rename it, log to rename.log, confirm success\n5. If no: print "File not found"',
      minLines: 12,
      starterCode: '@echo off\nset /p oldname=Current filename: \nset /p newname=New filename: \n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'File renaming module active. Mass operations are now possible.',
    },
  ],
};
