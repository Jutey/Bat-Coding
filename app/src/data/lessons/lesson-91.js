// Lesson 91 — Typo Bugs
export default {
  id: 'world-10/lesson-91-typo-bugs',
  title: 'Typo Bugs',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Welcome to the Debug Dungeon',
      body: 'Sector 10 is where you confront something every developer faces: broken code.\n\nDebugging is not a sign of failure — it is a skill. The best engineers are the best debuggers.\n\nEvery lesson here gives you broken code. Your job: find the bug, understand it, fix it.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The Most Common Bug: Typos',
      body: 'A single misspelled character can break an entire program. Batch is unforgiving — `ecoh` is not a command, `puse` is not a command.',
      code: '@echo off\necho Hello World\npause',
      output: 'Hello World\n[waits for key]',
    },
    {
      type: 'predict',
      question: 'Which line has the typo?',
      code: '@echo off\necho SYSTEM ONLINE\npause\necho SEQUENCE COMPLETE',
      options: [
        { text: 'There is no typo — the code is correct', correct: false, explanation: 'Look at each command carefully.' },
        { text: 'Line 1: @echo off — should be @ECHO OFF', correct: false, explanation: 'Batch commands are case-insensitive.' },
        { text: 'No typo here — the issue is order', correct: true, explanation: 'Actually the code runs fine — pause blocks execution so line 4 only runs after user presses a key. No typos here.' },
        { text: 'Line 3: paus instead of pause', correct: false, explanation: 'Line 3 shows pause correctly.' },
      ],
    },
    {
      type: 'fix',
      code: '@echo off\necho Welcome to Terminal Prime\npuse\necho Initialized.',
      answer: '@echo off\necho Welcome to Terminal Prime\npause\necho Initialized.',
      hint: 'One of the commands has a letter wrong',
      hint2: 'Check line 3 — "puse" is not a real command',
    },
    {
      type: 'fix',
      code: '@echo off\ntitle CONTROL ROOM\ncolur 0A\necho Diagnostic mode.\npause',
      answer: '@echo off\ntitle CONTROL ROOM\ncolor 0A\necho Diagnostic mode.\npause',
      hint: 'A command name is misspelled',
      hint2: 'Look at line 3 — "colur" should be "color"',
    },
    {
      type: 'build',
      prompt: 'Write a 6-line program that demonstrates you can use echo, cls, title, color, and pause all correctly — no typos allowed! The program should display a status panel.',
      minLines: 6,
      starterCode: '@echo off\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Typo detection matrix calibrated. Common entry-level bugs are now detectable.',
    },
  ],
};
