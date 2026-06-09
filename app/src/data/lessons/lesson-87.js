// Lesson 87 — Network Map
export default {
  id: 'world-09/lesson-87-network-map',
  title: 'Network Map',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Visualizing the Network',
      body: 'Network maps show which nodes exist and how they connect.\n\nYou can create a visual ASCII map in your terminal — a real tool, not just decoration.',
      code: null,
    },
    {
      type: 'learn',
      title: 'ASCII Network Diagram',
      body: 'Use echo to draw a network layout. Show which nodes are online/offline based on ping checks.',
      code: '@echo off\necho.\necho NETWORK MAP\necho.\necho  [GATEWAY] ---- [ROUTER]\necho       |               |\necho  [SERVER1]      [SERVER2]\necho       |               |\necho  [WORKSTATION]  [TERMINAL]\necho.\npause',
      output: 'NETWORK MAP\n\n [GATEWAY] ---- [ROUTER]\n      |               |\n [SERVER1]      [SERVER2]',
    },
    {
      type: 'predict',
      question: 'How would you make the network map dynamic — showing real online/offline status?',
      options: [
        { text: 'Ping each node first, use if/else to label it [ONLINE] or [OFFLINE] in the echo', correct: true, explanation: 'Ping returns errorlevel which you can use to set a status variable, then display it.' },
        { text: 'Use color commands to change colors', correct: false, explanation: 'Color changes the whole terminal, not individual labels.' },
        { text: 'Use type to read from a file', correct: false, explanation: 'type displays files, not live ping data.' },
        { text: 'It is impossible to make it dynamic', correct: false, explanation: 'Variables and ping errorlevel make it very possible.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nping 127.0.0.1 -n 1 >nul\nif %errorlevel%==0 set status1=ONLINE\nif %errorlevel%==1 set status1=OFFLINE\necho [NODE-1: ',
      blank: '%status1%',
      after: ']\npause',
      answer: '%status1%',
      hint: 'Display the status variable inside the node label',
    },
    {
      type: 'build',
      prompt: 'Build a Dynamic Network Map:\n1. Ping 3 "nodes" (all 127.0.0.1, labeled differently)\n2. Set status variables: node1_status, node2_status, node3_status\n3. Draw an ASCII network diagram using echo that includes the live status of each node\n4. Save the map to network_map.txt\n5. Print "Map generated: %DATE%"',
      minLines: 20,
      starterCode: '@echo off\necho Scanning network...\npause\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Network topology mapped. The full grid is now visible.',
    },
  ],
};
