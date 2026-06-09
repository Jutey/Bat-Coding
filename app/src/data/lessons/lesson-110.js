// Lesson 110 — Graduation Ceremony
export default {
  id: 'world-11/lesson-110-graduation-ceremony',
  title: 'Graduation Ceremony',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 500,
  steps: [
    {
      type: 'learn',
      title: 'TERMINAL PRIME: FULLY RESTORED',
      body: 'All 11 sectors. All 110 lessons.\n\nYou started with a blank terminal and the word `echo`.\n\nYou finished knowing how to think.',
      code: null,
    },
    {
      type: 'learn',
      title: 'What You Actually Learned',
      body: 'The Batch commands were never the point.\n\nYou learned:\n- **Output**: How programs communicate\n- **Memory**: How computers store state\n- **Logic**: How decisions are made\n- **Loops**: How repetition works\n- **Randomness**: How probability creates dynamics\n- **Files**: How data persists\n- **Functions**: How code stays organized\n- **Automation**: How repetition gets eliminated\n- **Networks**: How computers communicate\n- **Debugging**: How problems get solved\n- **Languages**: How skills transfer\n\nThat is computational thinking. And you have it.',
      code: null,
    },
    {
      type: 'predict',
      question: 'What is the most important skill you developed in this course?',
      options: [
        { text: 'Breaking complex problems into smaller, manageable steps', correct: true, explanation: 'Decomposition is the core of all engineering. Every sector proved it.' },
        { text: 'Memorizing Batch syntax', correct: false, explanation: 'Syntax is looked up. Thinking is remembered.' },
        { text: 'Typing faster', correct: false, explanation: 'Typing is not the bottleneck in programming.' },
        { text: 'Making programs look nice', correct: false, explanation: 'Formatting matters, but thinking is the foundation.' },
      ],
    },
    {
      type: 'learn',
      title: 'Where You Go From Here',
      body: 'You can now go anywhere:\n\n**Python** → You already understand 90% of the concepts\n**JavaScript** → Web applications, games, interactive pages\n**Game Development** → Unity (C#), Godot (GDScript), Pygame\n**Cybersecurity** → You already think like a network analyst\n**Data Science** → Python pandas, numpy, machine learning\n**Systems Programming** → C, C++, Rust\n\nThe terminal is not the end. It is the beginning.',
      code: null,
    },
    {
      type: 'build',
      prompt: 'FINAL GRADUATION BUILD: Write the program that started it all — but now make it everything it can be.\n\nBuild a terminal program that:\n1. Displays your name, level (110), and title (TERMINAL PRIME)\n2. Lists all the skills you mastered (10 sectors)\n3. Displays your greatest achievement in the course\n4. Shows a farewell message from A.E.G.I.S.\n5. Saves your graduation record to graduation.txt\n\nMake it beautiful. Make it yours. Make it worthy of lesson 110.',
      minLines: 25,
      starterCode: '@echo off\ntitle GRADUATION CEREMONY\ncls\ncolor 0E\n',
    },
    {
      type: 'reward',
      xp: 500,
      achievement: 'graduation',
      storyUpdate: 'GRADUATION COMPLETE.\n\nOperator status: TERMINAL PRIME\nSectors restored: 11 / 11\nLessons completed: 110 / 110\n\nA.E.G.I.S.: "Signal confirmed. You have gone from silence to symphony. The network is yours. The future is yours. Well done, Operator."\n\nGrand Quest: COMPLETE.',
    },
  ],
};
