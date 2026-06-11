// Lesson 81 — Ping Command
export default {
  id: 'world-09/lesson-81-ping-command',
  title: 'Ping Command',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'The Network Nexus',
      body: 'Sector 9 is the heart of the network. Every node, every connection runs through here.\n\nReal network engineers use Batch daily to test connections, scan networks, and diagnose problems. You are learning their actual tools.',
      code: null,
    },
    {
      type: 'learn',
      title: 'ping — Test Network Connection',
      body: '`ping` sends a test signal to an address and measures if it responds. If it replies: connected. If not: offline or blocked.',
      code: '@echo off\necho Testing connection to local machine...\nping 127.0.0.1 -n 2\npause',
      output: 'Pinging 127.0.0.1 with 32 bytes of data:\nReply from 127.0.0.1: bytes=32 time<1ms TTL=128\nReply from 127.0.0.1: bytes=32 time<1ms TTL=128',
    },
    {
      type: 'predict',
      question: 'What does 127.0.0.1 refer to?',
      options: [
        { text: 'The local machine (localhost) — your own computer', correct: true, explanation: '127.0.0.1 always means "this computer" in networking.' },
        { text: 'Google\'s servers', correct: false, explanation: 'Google uses 8.8.8.8.' },
        { text: 'The router', correct: false, explanation: 'Routers typically use 192.168.x.x addresses.' },
        { text: 'A random IP address', correct: false, explanation: '127.0.0.1 is a reserved loopback address.' },
      ],
    },
    {
      type: 'learn',
      title: 'The -n Flag — Control Ping Count',
      body: '`-n 4` sends exactly 4 pings. Without it, ping runs 4 times by default on Windows.',
      code: '@echo off\necho Checking localhost...\nping 127.0.0.1 -n 1\necho Done.\npause',
      output: 'Checking localhost...\n[ping result]\nDone.',
    },
    {
      type: 'fill',
      before: '@echo off\necho Network test starting...\nping 127.0.0.1 ',
      blank: '-n 3',
      after: '\necho Test complete.\npause',
      answer: '-n 3',
      hint: 'Specify 3 pings using the -n flag',
    },
    {
      type: 'fix',
      prompt: 'This script is supposed to send exactly 2 pings, but the flag is wrong and ping runs its default 4 times. Fix the ping flag.',
      code: '@echo off\necho Testing connection...\nping 127.0.0.1 /n 2\necho Test complete.\npause',
      answer: '@echo off\necho Testing connection...\nping 127.0.0.1 -n 2\necho Test complete.\npause',
      hint: 'Windows ping uses a dash for its options, not a forward slash.',
      hint2: 'Change /n 2 to -n 2.',
    },
    {
      type: 'build',
      prompt: 'Build a network tester:\n1. Print "NETWORK DIAGNOSTICS"\n2. Ping localhost (127.0.0.1) with -n 2\n3. Print a separator\n4. Ask operator: "Enter an IP to test:"\n5. Ping that IP with -n 2\n6. Save output header + timestamp to net_test.log',
      minLines: 12,
      starterCode: '@echo off\ntitle NETWORK DIAGNOSTICS\ncls\necho ========================\necho NETWORK NEXUS SCANNER\necho ========================\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Ping protocols online. Network nodes are responding.',
    },
  ],
};
