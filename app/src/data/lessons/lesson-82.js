// Lesson 82 — ipconfig
export default {
  id: 'world-09/lesson-82-ipconfig',
  title: 'ipconfig',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Reading Network Interfaces',
      body: '`ipconfig` shows all network adapters on your machine — IP addresses, subnet masks, gateways.\n\nThis is the first tool every network engineer runs when diagnosing a connection problem.',
      code: null,
    },
    {
      type: 'learn',
      title: 'ipconfig — Network Configuration',
      body: 'Run ipconfig to see your machine\'s current network configuration.',
      code: '@echo off\necho NETWORK CONFIGURATION\necho.\nipconfig\npause',
      output: 'Ethernet adapter:\n  IPv4 Address: 192.168.1.5\n  Subnet Mask: 255.255.255.0\n  Default Gateway: 192.168.1.1',
    },
    {
      type: 'predict',
      question: 'What does "Default Gateway" mean in ipconfig output?',
      options: [
        { text: 'The router\'s IP address — the device that connects you to the internet', correct: true, explanation: 'All traffic leaving your local network goes through the gateway.' },
        { text: 'Your computer\'s IP address', correct: false, explanation: 'That is IPv4 Address.' },
        { text: 'The DNS server', correct: false, explanation: 'DNS is separate from the gateway.' },
        { text: 'The firewall address', correct: false, explanation: 'Firewalls have different addresses.' },
      ],
    },
    {
      type: 'learn',
      title: 'Saving ipconfig to File',
      body: 'Save the output to a file for a network report.',
      code: '@echo off\nipconfig > network_info.txt\necho Network info saved.\ntype network_info.txt\npause',
      output: 'Network info saved.\n[full ipconfig output]',
    },
    {
      type: 'fill',
      before: '@echo off\necho Capturing network state...\nipconfig ',
      blank: '> netstate.txt',
      after: '\necho Saved to netstate.txt\npause',
      answer: '> netstate.txt',
      hint: 'Redirect the ipconfig output to a file',
    },
    {
      type: 'build',
      prompt: 'Build a Network Info Collector:\n1. Run ipconfig and save to network_report.txt\n2. Echo the computer name and username below it\n3. Append a "Captured on: %DATE%" line\n4. Display the report with a formatted header',
      minLines: 10,
      starterCode: '@echo off\necho Collecting network info...\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Network interfaces mapped. All nodes visible.',
    },
  ],
};
