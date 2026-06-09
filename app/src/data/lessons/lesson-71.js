// Lesson 71 — Open Programs
export default {
  id: 'world-08/lesson-71-open-programs',
  title: 'Open Programs',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Your Computer Obeys Commands',
      body: 'Sector 8 is where Batch stops being just a game engine and becomes a real automation tool.\n\n`start` tells Windows to launch a program. You can open anything: Notepad, Calculator, browsers — from a script.',
      code: null,
    },
    {
      type: 'learn',
      title: 'start — Launch a Program',
      body: '`start notepad` opens Notepad. `start calc` opens Calculator. You can chain multiple starts.',
      code: '@echo off\necho Opening tools...\nstart notepad\necho Notepad launched.\npause',
      output: 'Opening tools...\nNotepad launched.\n(Notepad opens in background)',
    },
    {
      type: 'predict',
      question: 'If your script runs `start notepad` and then `echo done`, in what order do things happen?',
      options: [
        { text: 'Notepad opens, then "done" prints — they happen nearly simultaneously', correct: true, explanation: 'start is non-blocking — the script continues while Notepad opens.' },
        { text: 'Script waits for Notepad to close before printing done', correct: false, explanation: 'That would require `start /wait`.' },
        { text: 'done prints first, then Notepad opens', correct: false, explanation: 'Commands run in order.' },
        { text: 'An error occurs', correct: false, explanation: 'start notepad is a valid command.' },
      ],
    },
    {
      type: 'type',
      prompt: 'Write the command to open the Windows Calculator',
      answer: 'start calc',
      hint: 'Use start followed by the program name',
    },
    {
      type: 'fill',
      before: '@echo off\necho Launching workspace...\n',
      blank: 'start notepad',
      after: '\nstart calc\necho Workspace ready.\npause',
      answer: 'start notepad',
      hint: 'Open Notepad using the start command',
    },
    {
      type: 'build',
      prompt: 'Build a "Workspace Launcher" script. Ask the user which workspace to open:\n1. Writer workspace (opens Notepad)\n2. Math workspace (opens Calculator)\n3. Custom (ask for a program name and start it)\n4. Exit',
      minLines: 14,
      starterCode: '@echo off\necho WORKSPACE LAUNCHER\nchoice /c 1234 /m "Writer/Math/Custom/Exit"\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Launch protocols online. Batch can now control the OS.',
    },
  ],
};
