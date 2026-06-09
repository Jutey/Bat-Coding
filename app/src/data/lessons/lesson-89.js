// Lesson 89 — Network Scanner Simulation
export default {
  id: 'world-09/lesson-89-network-scanner-sim',
  title: 'Network Scanner Simulation',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Simulating a Port Scanner',
      body: 'Real port scanners test many IPs rapidly. In this lesson you will build a simulation — a tool that pretends to scan a range of addresses and generates realistic-looking output.\n\nThis teaches the logic without needing actual network access.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Loop-Based Scanner',
      body: 'Use a counter loop to simulate scanning a range of IP addresses.',
      code: '@echo off\nset count=1\n:scan_loop\necho Scanning 192.168.1.%count%...\ntimeout /t 1 /nobreak >nul\nset /a count=%count%+1\nif %count% LEQ 5 goto scan_loop\necho Scan complete. 5 nodes checked.\npause',
      output: 'Scanning 192.168.1.1...\nScanning 192.168.1.2...\n[etc]\nScan complete. 5 nodes checked.',
    },
    {
      type: 'predict',
      question: 'Why use `timeout /t 1 /nobreak >nul` inside the scan loop?',
      options: [
        { text: 'Creates realistic scan timing and makes the simulation feel authentic', correct: true, explanation: 'A real scanner takes time. The delay makes your simulation convincing.' },
        { text: 'Required for the loop to work', correct: false, explanation: 'The loop works without it.' },
        { text: 'Makes the scan more accurate', correct: false, explanation: 'This is a simulation — accuracy is artificial.' },
        { text: 'Prevents the computer from overheating', correct: false, explanation: 'This script is far too simple to cause heat issues.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset i=1\n:loop\necho Probing node %i%...\nset /a i=%i%+1\nif %i% LEQ 10 goto ',
      blank: 'loop',
      after: '\necho Probe complete.\npause',
      answer: 'loop',
      hint: 'The loop should jump back to :loop each iteration',
    },
    {
      type: 'build',
      prompt: 'Build a Network Scanner Simulator:\n1. Ask operator for a base IP prefix (e.g. "192.168.1")\n2. Scan addresses .1 through .10 (loop with counter)\n3. Randomly decide if each node is "ONLINE" or "OFFLINE" (%random% %% 2)\n4. Print each result in format: "[SCAN] 192.168.1.X - STATUS"\n5. Count total online/offline\n6. Save results to scan_results.txt',
      minLines: 20,
      starterCode: '@echo off\nset /p prefix=IP prefix (e.g. 192.168.1): \nset online=0\nset offline=0\nset i=1\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Scanner simulation operational. Network sweep complete.',
    },
  ],
};
