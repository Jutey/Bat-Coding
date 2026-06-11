// Lesson 76 — Startup Launcher
export default {
  id: 'world-08/lesson-76-startup-launcher',
  title: 'Startup Launcher',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Your Personal Boot Script',
      body: 'System administrators write startup scripts that run when they log in — they open their tools, set up their environment, and have everything ready instantly.\n\nYou can do the same.',
      code: null,
    },
    {
      type: 'learn',
      title: 'A Morning Routine Script',
      body: 'Open tools, display info, prepare the workspace — all automatic.',
      code: '@echo off\ntitle MORNING STARTUP\ncls\necho ==========================\necho OPERATOR STARTUP SEQUENCE\necho ==========================\necho.\necho Opening workspace tools...\ntimeout /t 1 /nobreak >nul\nstart notepad\necho Notepad: READY\ntimeout /t 1 /nobreak >nul\necho.\necho All systems GO.\npause',
      output: 'OPERATOR STARTUP SEQUENCE\n==========================\n\nOpening workspace tools...\nNotepad: READY\n\nAll systems GO.',
    },
    {
      type: 'predict',
      question: 'Why would a professional use a startup script instead of manually opening each program?',
      options: [
        { text: 'It saves time — one double-click launches everything perfectly, every time', correct: true, explanation: 'Automation eliminates repetitive manual steps.' },
        { text: 'Programs run faster when launched from Batch', correct: false, explanation: 'Launch speed is the same.' },
        { text: 'Windows requires startup scripts', correct: false, explanation: 'They are optional, not required.' },
        { text: 'You cannot open programs manually', correct: false, explanation: 'Manual opening always works.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\necho Launching dev environment...\nstart notepad\ntimeout /t 1 /nobreak >nul\n',
      blank: 'start calc',
      after: '\necho Environment ready.\npause',
      answer: 'start calc',
      hint: 'Open the Calculator using the start command',
    },
    {
      type: 'fix',
      prompt: 'This startup script tries to launch Notepad and Calculator, but one line is missing the command to actually open the program. Fix it.',
      code: '@echo off\ntitle MORNING STARTUP\ncls\necho Opening workspace tools...\nstart notepad\ntimeout /t 1 /nobreak >nul\ncalc\necho All systems GO.\npause',
      answer: '@echo off\ntitle MORNING STARTUP\ncls\necho Opening workspace tools...\nstart notepad\ntimeout /t 1 /nobreak >nul\nstart calc\necho All systems GO.\npause',
      hint: 'Launching a program from a startup script needs a specific command before its name.',
      hint2: 'Add "start " before calc so it reads "start calc".',
    },
    {
      type: 'build',
      prompt: 'Design your ideal startup launcher. It should:\n1. Show a personalized header with your callsign\n2. Check if a "tasks.txt" file exists and display it if so\n3. Open at least 2 programs (notepad, calc, etc.)\n4. Show a "workspace ready" confirmation\n5. Use timing for dramatic effect',
      minLines: 15,
      starterCode: '@echo off\ntitle MY STARTUP\ncls\necho === PERSONAL WORKSPACE ===\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Startup automation configured. Every session begins in optimal state.',
    },
  ],
};
