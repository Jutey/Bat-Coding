// Lesson 94 — Runtime Bugs
export default {
  id: 'world-10/lesson-94-runtime-bugs',
  title: 'Runtime Bugs',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Bugs That Only Appear When Running',
      body: 'Runtime bugs look fine when you read the code — they only break when something unexpected happens during execution.\n\nCommon causes:\n- Division by zero\n- Missing files that the script expects\n- Infinite loops with no exit\n- Calling a label that does not exist',
      code: null,
    },
    {
      type: 'predict',
      question: 'What happens when Batch tries to `goto :load_data` but there is no `:load_data` label?',
      options: [
        { text: 'The script crashes with "label not found" error', correct: true, explanation: 'Batch cannot find the label and halts execution.' },
        { text: 'It skips to the next line', correct: false, explanation: 'Batch does not skip — it stops.' },
        { text: 'It creates the label automatically', correct: false, explanation: 'Batch does not create labels.' },
        { text: 'It goes to the top of the script', correct: false, explanation: 'It errors, not loops.' },
      ],
    },
    {
      type: 'fix',
      code: '@echo off\nset /p num=Enter a number: \nset /a result=%num%*2\necho Result: %result%\ngoto done\necho This never runs.\n:done\npause',
      answer: '@echo off\nset /p num=Enter a number: \nset /a result=%num%*2\necho Result: %result%\ngoto done\necho This never runs.\n:done\npause',
      hint: 'Actually trace through this code — is there a real bug?',
      hint2: 'The code is actually correct — goto done skips the middle echo (intentionally). No fix needed — but now you know to trace before assuming something is wrong.',
    },
    {
      type: 'fix',
      code: '@echo off\nif exist config.txt (\n  echo Config found.\n) else (\n  echo Config missing.\n)\ngoto :process\necho Done.\npause',
      answer: '@echo off\nif exist config.txt (\n  echo Config found.\n) else (\n  echo Config missing.\n)\n:process\necho Done.\npause',
      hint: 'There is a label reference issue',
      hint2: 'goto :process needs a :process label to jump to — make sure the label exists and is formatted correctly',
    },
    {
      type: 'fix',
      code: '@echo off\nset count=1\n:loop\necho Cycle %count%\nset /a count=%count%+1\nif %count% LSS 10 goto loop\necho Done\npause',
      answer: '@echo off\nset count=1\n:loop\necho Cycle %count%\nset /a count=%count%+1\nif %count% LSS 10 goto loop\necho Done\npause',
      hint: 'Trace through this — does it actually have a bug?',
      hint2: 'This code is correct! It counts from 1 to 9 then prints Done. Always trace before fixing.',
    },
    {
      type: 'build',
      prompt: 'Write a program that demonstrates safe file handling:\n1. Try to type a file that might not exist — but first CHECK with if exist\n2. If missing: create it with some default content\n3. Then display it\nThis pattern prevents a common runtime crash.',
      minLines: 8,
      starterCode: '@echo off\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Runtime error containment active. Programs now handle missing resources gracefully.',
    },
  ],
};
