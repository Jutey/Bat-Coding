// Lesson 90 — BOSS BATTLE: Firewall Breach
export default {
  id: 'world-09/lesson-90-boss-battle-firewall-breach',
  title: 'BOSS BATTLE — Firewall Breach',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'SECTOR 9 BOSS: THE FIREWALL BREACH',
      body: 'The Network Nexus firewall has been breached. An unknown entity is probing every node.\n\nYour mission: build a full NETWORK OPERATIONS CENTER script that monitors, scans, reports, and protects the network.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Boss Requirements',
      body: 'Build the NETWORK OPERATIONS CENTER:\n1. Startup: display network status panel with your name, date, computer, IP info\n2. Main menu loop\n3. Scan: simulated scanner (loop over 8 "nodes", random up/down)\n4. Report: generate full network report to noc_report.txt\n5. Monitor: show active connections (netstat)\n6. Process check: search for a user-specified process in tasklist\n7. Alert log: append any manual alerts to alerts.log\n8. Exit with summary\n9. Minimum 12 labels, all functions use call/exit\n10. All major events append to noc_events.log',
      code: null,
    },
    {
      type: 'predict',
      question: 'In a real NOC, why would multiple operators share the same log file?',
      options: [
        { text: 'So all team members can see what happened, even if they were not there', correct: true, explanation: 'Shared logs create a single source of truth for the whole team.' },
        { text: 'Batch requires a single log file', correct: false, explanation: 'You can have as many files as you want.' },
        { text: 'To save disk space', correct: false, explanation: 'Log files are tiny compared to other data.' },
        { text: 'Shared logs are not used in real NOCs', correct: false, explanation: 'Centralized logging is standard practice.' },
      ],
    },
    {
      type: 'fix',
      prompt: 'The intrusion alert system is supposed to log every alert with a timestamp, but the append redirect is missing — each new alert wipes out all previous ones. The breach history is being destroyed. Fix the redirect so alerts.log keeps a full record.',
      code: '@echo off\nset /p msg=Alert message: \necho [%DATE% %TIME%] %msg% > alerts.log\necho Alert logged.\npause',
      answer: '@echo off\nset /p msg=Alert message: \necho [%DATE% %TIME%] %msg% >> alerts.log\necho Alert logged.\npause',
      hint: 'A log file must accumulate entries over time, not be replaced each time something new happens.',
      hint2: 'Change > to >> before alerts.log so each alert is appended instead of overwriting the file.',
    },
    {
      type: 'build',
      prompt: 'BUILD THE NETWORK OPERATIONS CENTER.\n\nRequired sections:\n- :startup — banner, date, user, ipconfig summary\n- :main_menu — 7 options displayed cleanly\n- :scan — loop scanning 8 simulated nodes (random up/down), save to scan.txt\n- :full_report — ipconfig + netstat + date to noc_report.txt\n- :process_check — ask for process name, search tasklist\n- :alert — ask for alert message, append to alerts.log with timestamp\n- :log_event — utility function appending to noc_events.log\n- :exit_noc — summary of session, final log entry\n- 12+ labels, all functions end exit /b\n- Minimum 70 lines',
      minLines: 70,
      starterCode: '@echo off\ncall :startup\n:main\ncls\ncall :main_menu\nchoice /c 1234567\n',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'world9_boss',
      storyUpdate: 'SECTOR 9 RESTORED. The Firewall Breach has been contained. Network Nexus: SECURE.',
    },
  ],
};
