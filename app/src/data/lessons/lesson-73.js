// Lesson 73 — Batch Scheduler
export default {
  id: 'world-08/lesson-73-batch-scheduler',
  title: 'Batch Scheduler',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Making Programs Wait',
      body: 'Automation often needs timing — wait 5 seconds, then do the next thing.\n\n`timeout /t N` pauses the script for N seconds. Unlike `pause`, it does not wait for a keypress — it counts down automatically.',
      code: null,
    },
    {
      type: 'learn',
      title: 'timeout /t — Timed Pause',
      body: '`/nobreak` prevents the user from skipping the countdown.',
      code: '@echo off\necho Starting in 3 seconds...\ntimeout /t 3 /nobreak\necho GO!\npause',
      output: 'Starting in 3 seconds...\n[countdown: 3... 2... 1...]\nGO!',
    },
    {
      type: 'predict',
      question: 'What does `/nobreak` do in `timeout /t 5 /nobreak`?',
      options: [
        { text: 'Prevents the user from pressing a key to skip the countdown', correct: true, explanation: 'Without /nobreak, any keypress cancels the timeout.' },
        { text: 'Makes the script run faster', correct: false, explanation: 'It controls interruption, not speed.' },
        { text: 'Prevents the script from crashing', correct: false, explanation: 'timeout does not crash.' },
        { text: 'Counts up instead of down', correct: false, explanation: 'timeout always counts down.' },
      ],
    },
    {
      type: 'learn',
      title: 'A Timed Sequence',
      body: 'Combine timeouts with echo to simulate a real launch sequence.',
      code: '@echo off\necho LAUNCH SEQUENCE INITIATED\ntimeout /t 2 /nobreak >nul\necho T-3: Systems check...\ntimeout /t 1 /nobreak >nul\necho T-2: Engines warming...\ntimeout /t 1 /nobreak >nul\necho T-1: Final checks...\ntimeout /t 1 /nobreak >nul\necho LAUNCH!\npause',
      output: 'LAUNCH SEQUENCE INITIATED\nT-3: Systems check...\nT-2: Engines warming...\n[etc]',
    },
    {
      type: 'fill',
      before: '@echo off\necho Scanning...\ntimeout /t 2 ',
      blank: '/nobreak',
      after: ' >nul\necho Scan complete.\npause',
      answer: '/nobreak',
      hint: 'Which flag prevents the user from skipping the timeout?',
    },
    {
      type: 'fix',
      prompt: 'This countdown script has a typo in the timeout command — it errors instead of pausing. Fix it.',
      code: '@echo off\necho Initializing scan...\ntimeout /t five /nobreak >nul\necho Scan complete.\ntimeout /t 2 /nobreak >nul\necho Ready.\npause',
      answer: '@echo off\necho Initializing scan...\ntimeout /t 5 /nobreak >nul\necho Scan complete.\ntimeout /t 2 /nobreak >nul\necho Ready.\npause',
      hint: 'timeout /t expects a number of seconds, not a word.',
      hint2: 'Change "five" to 5 on the first timeout line.',
    },
    {
      type: 'build',
      prompt: 'Build a "System Boot Sequence" with at least 5 timed steps. Each step should:\n- Print what is happening ("Loading drivers...")\n- Wait 1-2 seconds\n- Move to the next step\nEnd with "SYSTEM ONLINE" in a formatted box.',
      minLines: 15,
      starterCode: '@echo off\ntitle SYSTEM BOOT\ncls\necho BOOTING TERMINAL PRIME...\necho.\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Timing protocols synchronized. The network can now sequence operations.',
    },
  ],
};
