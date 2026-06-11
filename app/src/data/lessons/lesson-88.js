// Lesson 88 — Network Report Generator
export default {
  id: 'world-09/lesson-88-network-report',
  title: 'Network Report Generator',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Automating the Daily Network Report',
      body: 'Network Operations Centers run daily reports automatically. They collect data from multiple sources, format it, and distribute it.\n\nYou are going to build one of those.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Combining Multiple Commands into One Report',
      body: 'Collect ipconfig, hostname, and user info into a single formatted document.',
      code: '@echo off\necho ====== NETWORK REPORT ====== > full_report.txt\necho Date: %DATE% >> full_report.txt\necho User: %USERNAME% >> full_report.txt\necho Host: %COMPUTERNAME% >> full_report.txt\necho. >> full_report.txt\necho -- IP CONFIG -- >> full_report.txt\nipconfig >> full_report.txt\necho. >> full_report.txt\necho Report complete.\ntype full_report.txt\npause',
      output: '====== NETWORK REPORT ======\nDate: Mon 06/09/2026\nUser: Cadet\nHost: WORKSTATION-01\n\n-- IP CONFIG --\n[ipconfig output]',
    },
    {
      type: 'predict',
      question: 'Why does `echo.` appear in the report? (note: echo followed by a period)',
      options: [
        { text: 'It adds a blank line for readability', correct: true, explanation: 'echo. prints a blank line. Great for formatting.' },
        { text: 'It ends the file', correct: false, explanation: 'The file ends when the script ends.' },
        { text: 'It is required between commands', correct: false, explanation: 'It is purely cosmetic formatting.' },
        { text: 'echo. is an error', correct: false, explanation: 'echo. is a valid blank-line trick.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\necho REPORT > report.txt\necho Date: %DATE% >> report.txt\n',
      blank: 'ipconfig >> report.txt',
      after: '\ntype report.txt\npause',
      answer: 'ipconfig >> report.txt',
      hint: 'Append the ipconfig output to the existing report file',
    },
    {
      type: 'fix',
      prompt: 'This report should have a header line followed by a date line below it, but the second echo overwrites the file with > instead of adding to it, so the header is lost. Fix the redirect.',
      code: '@echo off\necho REPORT > report.txt\necho Date: %DATE% > report.txt\ntype report.txt\npause',
      answer: '@echo off\necho REPORT > report.txt\necho Date: %DATE% >> report.txt\ntype report.txt\npause',
      hint: 'Only the very first write to a file should create/overwrite it. Every line after that needs a different operator.',
      hint2: 'Change the second > to >> so the date line is appended after REPORT instead of replacing it.',
    },
    {
      type: 'build',
      prompt: 'Build the Full Network Status Report:\n1. Header with date, time, user, computer name\n2. Section: IP Configuration (ipconfig)\n3. Section: Active Connections (netstat -n)\n4. Section: Running Processes (tasklist — first 20 lines only)\n5. Footer: "END OF REPORT"\n6. Save to network_status_report.txt\n7. Display the complete report',
      minLines: 18,
      starterCode: '@echo off\necho Generating comprehensive network report...\npause\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Full network diagnostics compiled. Report generation is automated.',
    },
  ],
};
