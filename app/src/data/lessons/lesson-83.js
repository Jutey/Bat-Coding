// Lesson 83 — tracert
export default {
  id: 'world-09/lesson-83-tracert',
  title: 'tracert',
  world: 'SECTOR 9 — NETWORK NEXUS',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Following the Path',
      body: 'When you connect to a server, your data does not travel directly there — it hops through many routers along the way.\n\n`tracert` (trace route) shows every hop, like tracking a package through multiple delivery centers.',
      code: null,
    },
    {
      type: 'learn',
      title: 'tracert — Trace the Route',
      body: '`tracert 127.0.0.1` shows the path to localhost (just one hop — yourself).',
      code: '@echo off\necho Tracing route to localhost...\ntracert 127.0.0.1\npause',
      output: 'Tracing route to localhost [127.0.0.1]\nover a maximum of 30 hops:\n  1  <1ms  <1ms  <1ms  127.0.0.1\nTrace complete.',
    },
    {
      type: 'predict',
      question: 'If you trace route to a website and see 10 hops, what does each hop represent?',
      options: [
        { text: 'A router or gateway your data passes through on the way', correct: true, explanation: 'Each hop is a network device relaying your packet forward.' },
        { text: 'A copy of your data', correct: false, explanation: 'Hops are routers, not data copies.' },
        { text: 'The number of seconds elapsed', correct: false, explanation: 'The ms values show time, not hops.' },
        { text: 'Errors in the network', correct: false, explanation: 'Hops are normal routing steps.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\necho Route trace starting...\n',
      blank: 'tracert 127.0.0.1',
      after: '\necho Trace complete.\npause',
      answer: 'tracert 127.0.0.1',
      hint: 'Use tracert followed by the IP address',
    },
    {
      type: 'fix',
      prompt: 'This script is supposed to trace the route to localhost, but the command name is misspelled and Windows does not recognize it. Fix the typo.',
      code: '@echo off\necho Route trace starting...\ntracrt 127.0.0.1\necho Trace complete.\npause',
      answer: '@echo off\necho Route trace starting...\ntracert 127.0.0.1\necho Trace complete.\npause',
      hint: 'Check the spelling of the route-tracing command carefully.',
      hint2: 'It is "tracert", not "tracrt" — there is an "e" before the "rt".',
    },
    {
      type: 'build',
      prompt: 'Build a Route Analyzer:\n1. Ask operator: "Target IP or hostname:"\n2. Run tracert on that target, save to route_trace.txt\n3. Show "Trace complete. Results in route_trace.txt"\n4. Display the file\n5. Append "Traced: [target] on [DATE]" to trace_history.log',
      minLines: 10,
      starterCode: '@echo off\nset /p target=Target IP or hostname: \necho Tracing route to %target%...\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Route mapping activated. Network topology is becoming visible.',
    },
  ],
};
