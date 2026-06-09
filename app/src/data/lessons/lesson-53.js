// Lesson 53 — Appending Files
export default {
  id: 'world-06/lesson-53-appending-files',
  title: 'Appending Files',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: '> vs >> — Overwrite vs Append',
      body: '`>` wipes the file and writes fresh.\n`>>` adds to the end without deleting what is already there.\n\nFor a log file or high score list, you want `>>` — otherwise each new entry erases the last.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Building a Log',
      body: 'Run this three times and the file grows — it does not restart.',
      code: '@echo off\necho Entry added >> log.txt\necho Done.\npause',
      output: 'Done.\n(log.txt gains one line each run)',
    },
    {
      type: 'predict',
      question: 'You run `echo Score=100 >> scores.txt` three times. How many lines are in scores.txt?',
      options: [
        { text: '3 lines', correct: true, explanation: '>> appends each time without deleting.' },
        { text: '1 line', correct: false, explanation: 'That would be > (overwrite).' },
        { text: '0 lines', correct: false, explanation: '>> creates the file if needed.' },
        { text: '9 lines', correct: false, explanation: 'Each run adds exactly one line.' },
      ],
    },
    {
      type: 'type',
      prompt: 'Write the command to ADD "ALERT=1" to the end of system.log without deleting existing content',
      answer: 'echo ALERT=1 >> system.log',
      hint: 'Use >> instead of > to append',
    },
    {
      type: 'fix',
      code: '@echo off\necho Round 1 > match.log\necho Round 2 > match.log\necho Round 3 > match.log\ntype match.log\npause',
      answer: '@echo off\necho Round 1 > match.log\necho Round 2 >> match.log\necho Round 3 >> match.log\ntype match.log\npause',
      hint: 'After the first write, use >> to keep previous lines',
      hint2: 'Only the first line should use > — the rest use >>',
    },
    {
      type: 'build',
      prompt: 'Build an activity logger. Each time it runs it asks "What did you do?" and appends the answer with a timestamp label (fake it: just add "LOG:" before the text) to activity.log. Then display the full log.',
      minLines: 6,
      starterCode: '@echo off\nset /p activity=What did you do? \n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Append protocols active. The system can now maintain running records.',
    },
  ],
};
