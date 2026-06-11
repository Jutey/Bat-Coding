// Lesson 84 — netstat
export default {
  id: 'world-09/lesson-84-netstat',
  title: 'netstat',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Seeing What is Connected',
      body: '`netstat` shows all active network connections on your machine — which ports are open, what is connecting, what programs are listening.\n\nSecurity engineers use this to detect unauthorized connections.',
      code: null,
    },
    {
      type: 'learn',
      title: 'netstat — Active Connections',
      body: '`netstat -n` shows numerical addresses (faster). `-a` shows all ports including listening ones.',
      code: '@echo off\necho Active network connections:\nnetstat -n\npause',
      output: 'Active Connections\n  Proto  Local Address    Foreign Address   State\n  TCP    127.0.0.1:5173   127.0.0.1:52301   ESTABLISHED',
    },
    {
      type: 'predict',
      question: 'What does "ESTABLISHED" mean in netstat output?',
      options: [
        { text: 'An active two-way connection currently in use', correct: true, explanation: 'ESTABLISHED means both sides are connected and communicating.' },
        { text: 'The connection was successful but is now closed', correct: false, explanation: 'CLOSE_WAIT or TIME_WAIT indicate closed connections.' },
        { text: 'The port is blocked by the firewall', correct: false, explanation: 'Blocked connections would not appear as ESTABLISHED.' },
        { text: 'The connection is waiting to start', correct: false, explanation: 'LISTENING means waiting. ESTABLISHED means active.' },
      ],
    },
    {
      type: 'learn',
      title: 'Saving a Connection Snapshot',
      body: 'Save the current state for later comparison — useful for detecting changes.',
      code: '@echo off\nnetstat -n > connections.txt\necho Snapshot saved.\npause',
      output: 'Snapshot saved.',
    },
    {
      type: 'fill',
      before: '@echo off\necho Capturing connections...\n',
      blank: 'netstat -n > snapshot.txt',
      after: '\necho Done.\npause',
      answer: 'netstat -n > snapshot.txt',
      hint: 'Run netstat with -n flag and redirect to snapshot.txt',
    },
    {
      type: 'fix',
      prompt: 'This script wants to take a fast numerical-address snapshot of connections, but it uses the wrong flag and netstat reports an error. Fix the flag.',
      code: '@echo off\necho Capturing connections...\nnetstat /n > connections.txt\necho Snapshot saved.\npause',
      answer: '@echo off\necho Capturing connections...\nnetstat -n > connections.txt\necho Snapshot saved.\npause',
      hint: 'netstat options use a dash, not a forward slash.',
      hint2: 'Change /n to -n so it reads "netstat -n > connections.txt".',
    },
    {
      type: 'build',
      prompt: 'Build a Connection Monitor:\n1. Take a netstat snapshot, save to connections.txt\n2. Display the connections with a formatted header\n3. Ask if they want to save the report\n4. If yes: append a timestamp entry to monitoring.log\n5. Print total: "Monitor complete. %DATE%"',
      minLines: 12,
      starterCode: '@echo off\ntitle CONNECTION MONITOR\ncls\necho Scanning active connections...\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Connection monitoring active. All network traffic is being observed.',
    },
  ],
};
