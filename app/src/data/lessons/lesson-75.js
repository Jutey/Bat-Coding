// Lesson 75 — Cleanup Script
export default {
  id: 'world-08/lesson-75-cleanup-script',
  title: 'Cleanup Script',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Temp Files and Cleanup',
      body: 'Programs create temporary files. Left over time, they pile up and waste space.\n\nA cleanup script removes files that are no longer needed. This is real system administration.',
      code: null,
    },
    {
      type: 'learn',
      title: 'del — Delete Files',
      body: '`del filename` removes a file. Use carefully — this is permanent.',
      code: '@echo off\necho temp data > temp.txt\necho temp data > old.log\necho Files before:\ndir /b *.txt 2>nul\ndir /b *.log 2>nul\ndel temp.txt\ndel old.log\necho Files after cleanup done.\npause',
      output: 'Files before:\ntemp.txt\nold.log\nFiles after cleanup done.',
    },
    {
      type: 'predict',
      question: 'Why is `del` dangerous compared to most commands you have used?',
      options: [
        { text: 'It permanently deletes files — there is no undo', correct: true, explanation: 'del bypasses the Recycle Bin. The file is gone.' },
        { text: 'It is very slow', correct: false, explanation: 'Speed is not the concern.' },
        { text: 'It requires admin rights always', correct: false, explanation: 'You can delete your own files without admin.' },
        { text: 'It crashes if the file does not exist', correct: false, explanation: 'del shows an error but does not crash.' },
      ],
    },
    {
      type: 'learn',
      title: 'Safe Cleanup Pattern',
      body: 'Check if the file exists BEFORE deleting. Never delete blindly.',
      code: '@echo off\nif exist temp.txt (\n  del temp.txt\n  echo Removed temp.txt\n) else (\n  echo temp.txt not found.\n)\npause',
      output: 'Removed temp.txt',
    },
    {
      type: 'fill',
      before: '@echo off\nif exist cache.tmp (\n  ',
      blank: 'del cache.tmp',
      after: '\n  echo Cache cleared.\n)\npause',
      answer: 'del cache.tmp',
      hint: 'Use del to remove the cache file',
    },
    {
      type: 'fix',
      prompt: 'This cleanup script crashes due to a broken if/else block. Fix the structure so it checks before deleting.',
      code: '@echo off\necho temp data > temp.txt\nif exist temp.txt (\n  del temp.txt\n  echo Removed temp.txt\nelse (\n  echo temp.txt not found.\n)\npause',
      answer: '@echo off\necho temp data > temp.txt\nif exist temp.txt (\n  del temp.txt\n  echo Removed temp.txt\n) else (\n  echo temp.txt not found.\n)\npause',
      hint: 'An if/else block in Batch needs the closing parenthesis before the word else.',
      hint2: 'Add ) right before "else (" so it reads ") else (" on its own line.',
    },
    {
      type: 'build',
      prompt: 'Build a safe cleanup script that:\n1. Creates 3 temp files to simulate leftover files\n2. Asks "Run cleanup? (Y/N)"\n3. If Y: check each file exists before deleting, log each deletion to cleanup.log\n4. If N: exit with message "Cleanup cancelled"\n5. Show cleanup.log at the end',
      minLines: 16,
      starterCode: '@echo off\necho temp1 > temp1.tmp\necho temp2 > temp2.tmp\necho temp3 > temp3.tmp\necho Temp files created.\nchoice /c YN /m "Run cleanup?"\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Cleanup protocols active. The system stays lean and efficient.',
    },
  ],
};
