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
      body: 'An automation script has gone rogue. It is deleting files, filling up storage, and opening programs endlessly.\n\nYour mission: build a CONTROL PANEL that can manage, monitor, and stop automated processes.',
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
