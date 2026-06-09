// Lesson 79 — Personal Assistant
export default {
  id: 'world-08/lesson-79-personal-assistant',
  title: 'Personal Assistant',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'A Script That Serves You',
      body: 'Personal assistants in sci-fi respond to commands, check status, launch tools, and manage your world.\n\nYou can build a real (if simple) version right now.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Command-Response Pattern',
      body: 'Ask for a command. Match it. Execute the right action. Loop back.',
      code: '@echo off\n:loop\nset /p cmd=Command: \nif "%cmd%"=="status" call :status\nif "%cmd%"=="time" echo Current time: %TIME%\nif "%cmd%"=="exit" goto end\nif "%cmd%"=="help" call :help\ngoto loop\n:end\npause\nexit /b\n:status\necho All systems nominal.\nexit /b\n:help\necho Commands: status, time, exit, help\nexit /b',
      output: 'Command: status\nAll systems nominal.\nCommand: time\nCurrent time: 14:32:05',
    },
    {
      type: 'predict',
      question: 'What happens when the user types a command that is not in the if list?',
      options: [
        { text: 'Nothing happens and the loop restarts (awaiting next command)', correct: true, explanation: 'No matching if means no action — the loop just continues.' },
        { text: 'The script crashes', correct: false, explanation: 'Unmatched input is silently ignored.' },
        { text: 'An error message appears', correct: false, explanation: 'Unless you explicitly echo an error, nothing shows.' },
        { text: 'The last command repeats', correct: false, explanation: 'The cmd variable updates each loop.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\n:loop\nset /p cmd=> \nif "%cmd%"=="hello" echo Greetings, Operator.\nif "%cmd%"=="quit" goto end\n',
      blank: 'goto loop',
      after: '\n:end\npause',
      answer: 'goto loop',
      hint: 'What keeps the command input running in a loop?',
    },
    {
      type: 'build',
      prompt: 'Build AEGIS Lite — a personal assistant with at least 6 commands:\n- hello\n- status (shows system info)\n- time\n- date\n- open notepad (launches notepad)\n- save (saves a quick note to notes.txt)\n- help (lists all commands)\n- exit\n\nAll unrecognized commands print "Unknown command. Type help."',
      minLines: 30,
      starterCode: '@echo off\ntitle AEGIS LITE\ncls\necho AEGIS LITE ONLINE\necho Type help for commands.\necho.\n:loop\nset /p cmd=AEGIS> \n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Personal assistant module active. The network now has an interactive operator interface.',
    },
  ],
};
