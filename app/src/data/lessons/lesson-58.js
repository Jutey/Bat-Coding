// Lesson 58 — Log System
export default {
  id: 'world-06/lesson-58-log-system',
  title: 'Log System',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Every System Keeps Logs',
      body: 'Every server, every app, every operating system writes logs.\n\nLogs record what happened, when, and what went wrong. They are how engineers debug real systems.\n\nYou are going to build one.',
      code: null,
    },
    {
      type: 'learn',
      title: 'A Simple Event Log',
      body: 'Each time an event happens, append a line to the log file. Include what happened.',
      code: '@echo off\nset /p event=Log event: \necho [EVENT] %event% >> system.log\necho Logged.\ntype system.log\npause',
      output: '[EVENT] Sector scan initiated\n[EVENT] Firewall updated\n[EVENT] Intruder detected',
    },
    {
      type: 'predict',
      question: 'Why is it important to prefix each log entry with [EVENT] or similar?',
      options: [
        { text: 'It makes entries easy to identify and search when the log is long', correct: true, explanation: 'Structured logs are much easier to read and filter.' },
        { text: 'Batch requires it', correct: false, explanation: 'It is a convention, not a requirement.' },
        { text: 'It makes the file smaller', correct: false, explanation: 'Prefixes add characters.' },
        { text: 'It prevents file corruption', correct: false, explanation: 'Batch files are plain text.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\necho [BOOT] System started ',
      blank: '>>',
      after: ' boot.log\necho Logged.\npause',
      answer: '>>',
      hint: 'Each boot should add to the log, not replace it',
    },
    {
      type: 'build',
      prompt: 'Build a system monitor log. Create a loop with a menu:\n1. Log "Scan complete"\n2. Log "Alert triggered"\n3. Log "System restart"\n4. View log\n5. Exit\n\nEach option (1-3) appends a formatted line to events.log. Option 4 displays it.',
      minLines: 20,
      starterCode: '@echo off\n:menu\ncls\necho EVENT LOGGER\necho 1. Scan Complete\necho 2. Alert Triggered\necho 3. System Restart\necho 4. View Log\necho 5. Exit\nchoice /c 12345\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'System logging active. All network events are now recorded.',
    },
  ],
};
