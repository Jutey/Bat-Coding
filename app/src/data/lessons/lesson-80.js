// Lesson 80 — BOSS BATTLE: The Rogue Automator
export default {
  id: 'world-08/lesson-80-boss-battle-rogue-automator',
  title: 'BOSS BATTLE — The Rogue Automator',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'SECTOR 8 BOSS: THE ROGUE AUTOMATOR',
      body: 'ALERT. ALERT. An automation script has broken free of its safeguards.\n\nIt is spawning windows faster than you can close them, deleting files at random, and looping without end — consuming more memory by the second. Terminal Prime is flashing red across every monitor.\n\nThe Rogue Automator was built to help. Now it will not stop. There is no kill switch... unless you build one.\n\nYour mission: construct a CONTROL PANEL that can launch, monitor, log, and — if needed — forcibly halt automated processes before the system buckles under its own weight.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Boss Requirements',
      body: 'Build the AUTOMATION CONTROL PANEL:\n1. Startup with timed boot sequence (at least 4 steps)\n2. Main menu loop\n3. Launch tool (open program with start)\n4. System report (collect and save env vars)\n5. Backup function (copy a file)\n6. Cleanup function (del temp files with confirmation)\n7. Log all actions to actions.log\n8. Emergency stop sequence (timed shutdown message, then exit)\n9. Minimum 10 labels\n10. All functions use call, all end with exit /b',
      code: null,
    },
    {
      type: 'predict',
      question: 'In a real automation system, why is logging every action important?',
      options: [
        { text: 'If something goes wrong, the log shows exactly what happened and when', correct: true, explanation: 'Audit trails are essential for debugging and accountability.' },
        { text: 'Logs make scripts run faster', correct: false, explanation: 'Logging adds a tiny bit of overhead.' },
        { text: 'Windows requires logs for all scripts', correct: false, explanation: 'Logging is a best practice, not a requirement.' },
        { text: 'Logs are only for errors', correct: false, explanation: 'Good systems log everything, not just errors.' },
      ],
    },
    {
      type: 'fix',
      prompt: 'You found the Rogue Automator\'s core script. It launches Notepad and loops FOREVER with no way to stop, since it never checks for an exit command. Fix it so typing "stop" ends the loop.',
      code: '@echo off\n:rampage\necho Spawning process...\nstart notepad\nset /p cmd=Command (stop to halt): \nif "%cmd%"=="stop" echo Shutting down...\ngoto rampage\necho Automator halted.\npause',
      answer: '@echo off\n:rampage\necho Spawning process...\nstart notepad\nset /p cmd=Command (stop to halt): \nif "%cmd%"=="stop" goto shutdown\ngoto rampage\n:shutdown\necho Automator halted.\npause',
      hint: 'A loop needs a way to break out of it when a condition is met — right now "stop" only prints a message but does not change control flow.',
      hint2: 'Change the if line to "if "%cmd%"=="stop" goto shutdown" and add a ":shutdown" label right before "echo Automator halted."',
    },
    {
      type: 'build',
      prompt: 'BUILD THE AUTOMATION CONTROL PANEL.\n\nRequired:\n- :boot — 4-step timed startup with countdown\n- Main menu loop\n- :launch — asks which tool to open, uses start\n- :report — saves system info to report.txt\n- :backup — copies a file (check exists first)\n- :cleanup — confirms, then deletes temp files\n- :log_action — appends any event to actions.log (call this from other functions)\n- :emergency — countdown then exit\n- 10+ labels, all functions call/exit properly\n- Minimum 60 lines',
      minLines: 60,
      starterCode: '@echo off\ncall :boot\n:main\ncls\ncall :main_menu\nchoice /c 123456\n',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'world8_boss',
      storyUpdate: 'SECTOR 8 RESTORED. The Rogue Automator has been shut down. Automation is back under your control.',
    },
  ],
};
