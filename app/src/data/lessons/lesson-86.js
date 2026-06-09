// Lesson 86 — Network Connectivity Checker
export default {
  id: 'world-09/lesson-86-connectivity-checker',
  title: 'Network Connectivity Checker',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Testing Multiple Nodes',
      body: 'A real network checker does not just ping once — it tests multiple endpoints, reports which are up, and which are down.\n\nThis is exactly what NOC (Network Operations Center) engineers do every morning.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Ping with Error Checking',
      body: 'After ping, `%errorlevel%` is 0 if the ping succeeded, 1 if it failed. Use this to detect down nodes.',
      code: '@echo off\nping 127.0.0.1 -n 1 >nul\nif %errorlevel%==0 echo Node 1: ONLINE\nif %errorlevel%==1 echo Node 1: OFFLINE\npause',
      output: 'Node 1: ONLINE',
    },
    {
      type: 'predict',
      question: 'What does `>nul` do after the ping command?',
      options: [
        { text: 'Hides the ping output — only our echo messages are shown', correct: true, explanation: 'Redirecting to nul discards output. The script stays clean.' },
        { text: 'Saves ping output to a null file', correct: false, explanation: 'nul is a special Windows device, not a real file.' },
        { text: 'Cancels the ping', correct: false, explanation: 'The ping still runs — output is just hidden.' },
        { text: 'Makes ping faster', correct: false, explanation: 'Speed is unchanged.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nping 127.0.0.1 -n 1 >nul\nif %errorlevel%==0 echo ONLINE\nif %errorlevel%==',
      blank: '1',
      after: ' echo OFFLINE\npause',
      answer: '1',
      hint: 'What errorlevel does a failed ping return?',
    },
    {
      type: 'build',
      prompt: 'Build a Multi-Node Checker:\n1. Test 3 IPs (use 127.0.0.1 for all, labeled Node 1/2/3 — just testing the pattern)\n2. For each: if online print "[ OK ] Node X: ONLINE", if offline print "[FAIL] Node X: OFFLINE"\n3. Save results to connectivity_report.txt\n4. Count and print how many nodes are online',
      minLines: 18,
      starterCode: '@echo off\nset online=0\necho CONNECTIVITY CHECK > connectivity_report.txt\necho.\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Multi-node monitoring active. Network health dashboard operational.',
    },
  ],
};
