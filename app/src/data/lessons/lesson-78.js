// Lesson 78 — System Report
export default {
  id: 'world-08/lesson-78-system-report',
  title: 'System Report',
  world: 'SECTOR 8 — AUTOMATION ARENA',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Collecting System Information',
      body: 'Real automation scripts gather system information and compile it into a report.\n\nBatch can run system commands and redirect their output to a file — this is how network admins generate automatic status reports.',
      code: null,
    },
    {
      type: 'learn',
      title: 'systeminfo and Environment Variables',
      body: 'Windows provides built-in environment variables with system info you can use directly.',
      code: '@echo off\necho COMPUTER: %COMPUTERNAME%\necho USER: %USERNAME%\necho OS: %OS%\necho DATE: %DATE%\necho TIME: %TIME%\npause',
      output: 'COMPUTER: WORKSTATION-01\nUSER: Cadet\nOS: Windows_NT\nDATE: Mon 06/09/2026\nTIME: 14:32:05',
    },
    {
      type: 'predict',
      question: 'What is `%COMPUTERNAME%` — where does this value come from?',
      options: [
        { text: 'A built-in Windows environment variable with the computer\'s name', correct: true, explanation: 'Windows pre-loads many environment variables at startup.' },
        { text: 'A variable you must set manually', correct: false, explanation: 'COMPUTERNAME is automatic.' },
        { text: 'A file on the hard drive', correct: false, explanation: 'It is in memory, not a file.' },
        { text: 'It requires admin rights to read', correct: false, explanation: 'All users can read COMPUTERNAME.' },
      ],
    },
    {
      type: 'learn',
      title: 'Saving the Report to File',
      body: 'Redirect output to a file using > and >> to build a complete report.',
      code: '@echo off\necho ========== SYSTEM REPORT ========== > report.txt\necho Computer: %COMPUTERNAME% >> report.txt\necho User: %USERNAME% >> report.txt\necho Date: %DATE% >> report.txt\necho ==================================== >> report.txt\necho Report saved to report.txt\ntype report.txt\npause',
      output: 'Report saved to report.txt\n========== SYSTEM REPORT ==========\nComputer: WORKSTATION-01\n[etc]',
    },
    {
      type: 'fill',
      before: '@echo off\necho REPORT: %DATE% > sysinfo.txt\necho User: ',
      blank: '%USERNAME%',
      after: ' >> sysinfo.txt\ntype sysinfo.txt\npause',
      answer: '%USERNAME%',
      hint: 'Use the built-in Windows variable for the current user',
    },
    {
      type: 'build',
      prompt: 'Build an automated System Report Generator that:\n1. Collects: COMPUTERNAME, USERNAME, OS, DATE, TIME\n2. Asks for a custom "Operator notes" field\n3. Saves everything to system_report.txt in a formatted layout\n4. Displays the report\n5. Appends to report_log.txt "Report generated on [DATE]"',
      minLines: 15,
      starterCode: '@echo off\nset /p notes=Operator notes: \n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Diagnostic reporting online. System status can now be captured and exported.',
    },
  ],
};
