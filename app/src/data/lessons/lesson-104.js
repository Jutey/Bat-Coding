// Lesson 104 — Loops in Python
export default {
  id: 'world-11/lesson-104-loops-in-python',
  title: 'Loops in Python',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Loops: The Concept You Already Know',
      body: 'Batch loops: `:loop → goto loop`\nPython loops: `while True:` and `for i in range(5):`\n\nSame idea — repeat code — but Python does not need labels or goto.',
      code: null,
    },
    {
      type: 'learn',
      title: 'while Loop',
      body: 'while runs as long as the condition is True.',
      code: 'count = 0\nwhile count < 5:\n    count = count + 1\n    print(count)',
      output: '1\n2\n3\n4\n5',
    },
    {
      type: 'predict',
      question: 'What is the Python equivalent of Batch\'s "count to 5" loop?',
      code: 'set count=0\n:loop\nset /a count=%count%+1\necho %count%\nif %count% LSS 5 goto loop',
      options: [
        { text: 'count = 0 / while count < 5: / count += 1 / print(count)', correct: true, explanation: 'while in Python replaces the goto-based loop in Batch.' },
        { text: 'loop(5)', correct: false, explanation: 'Not a Python built-in.' },
        { text: 'for count in 5:', correct: false, explanation: 'Python uses for count in range(5):' },
        { text: 'repeat 5 times:', correct: false, explanation: 'Not Python syntax.' },
      ],
    },
    {
      type: 'learn',
      title: 'for Loop — Cleaner Counting',
      body: 'for in range() is cleaner for counting loops.',
      code: 'for i in range(1, 6):\n    print(f"Round {i}")',
      output: 'Round 1\nRound 2\nRound 3\nRound 4\nRound 5',
    },
    {
      type: 'predict',
      question: 'What does `range(1, 6)` produce?',
      options: [
        { text: 'Numbers 1, 2, 3, 4, 5 (stops before 6)', correct: true, explanation: 'range(start, stop) goes from start up to but not including stop.' },
        { text: 'Numbers 1 through 6', correct: false, explanation: 'range(1, 6) does not include 6.' },
        { text: 'Numbers 0 through 6', correct: false, explanation: 'It starts at 1 here.' },
        { text: '6 repetitions starting at 0', correct: false, explanation: 'range(6) would start at 0. range(1,6) starts at 1.' },
      ],
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Loop protocols synchronized across languages. The pattern is universal.',
    },
  ],
};
