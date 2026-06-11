// Lesson 85 — tasklist
export default {
  id: 'world-09/lesson-85-tasklist',
  title: 'tasklist',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'What Is Running Right Now?',
      body: '`tasklist` shows every process running on your computer — like opening Task Manager but in the terminal.\n\nThis is how you find rogue programs, memory hogs, and unauthorized processes.',
      code: null,
    },
    {
      type: 'learn',
      title: 'tasklist — List Running Processes',
      body: 'Each row: process name, PID (process ID), memory usage.',
      code: '@echo off\necho Running processes:\ntasklist\npause',
      output: 'Image Name           PID   Mem Usage\n========================\nnotepad.exe          3842  10,456 K\nchrome.exe           5120  245,312 K',
    },
    {
      type: 'predict',
      question: 'What is a PID?',
      options: [
        { text: 'Process ID — a unique number Windows assigns to each running program', correct: true, explanation: 'PIDs let you identify and target specific processes.' },
        { text: 'Program installation directory', correct: false, explanation: 'That would be a path, not a number.' },
        { text: 'The program\'s file size', correct: false, explanation: 'File size and memory usage are different fields.' },
        { text: 'Port identifier', correct: false, explanation: 'Ports are network concepts; PIDs are process concepts.' },
      ],
    },
    {
      type: 'learn',
      title: 'Filtering with findstr',
      body: 'Pipe tasklist into `findstr` to find a specific process.',
      code: '@echo off\necho Checking for Notepad...\ntasklist | findstr notepad\npause',
      output: 'notepad.exe  3842  Console  1  10,456 K',
    },
    {
      type: 'fill',
      before: '@echo off\necho Searching for chrome...\ntasklist | ',
      blank: 'findstr chrome',
      after: '\npause',
      answer: 'findstr chrome',
      hint: 'Pipe tasklist through findstr to search for chrome',
    },
    {
      type: 'fix',
      prompt: 'This script tries to filter the process list for "chrome" using findstr, but the pipe symbol is missing so tasklist and findstr run as separate, broken commands. Fix it.',
      code: '@echo off\necho Searching for chrome...\ntasklist findstr chrome\npause',
      answer: '@echo off\necho Searching for chrome...\ntasklist | findstr chrome\npause',
      hint: 'To send the output of one command into another, you need a special character between them.',
      hint2: 'Add a pipe | between tasklist and findstr: "tasklist | findstr chrome".',
    },
    {
      type: 'build',
      prompt: 'Build a Process Inspector:\n1. Save full tasklist to processes.txt\n2. Ask operator: "Search for process:" \n3. Search processes.txt using findstr for that name\n4. If found: print "Process located!"\n5. Append the search query + date to search_history.log',
      minLines: 12,
      starterCode: '@echo off\ntasklist > processes.txt\nset /p search=Search for process: \n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Process visibility restored. All running programs are now auditable.',
    },
  ],
};
