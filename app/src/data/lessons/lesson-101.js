// Lesson 101 — Batch vs Python
export default {
  id: 'world-11/lesson-101-batch-vs-python',
  title: 'Batch vs Python',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'You Have Outgrown Batch',
      body: 'Congratulations. You have reached Sector 11.\n\nBatch scripting taught you real skills: variables, logic, loops, functions, files, debugging.\n\nNow it is time to see where those same concepts live in a more powerful language: Python.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Side by Side: The Same Idea',
      body: 'Python and Batch both solve the same problems. The concepts are identical — the syntax just looks different.',
      code: 'REM Batch:\necho Hello, World!\n\n# Python:\nprint("Hello, World!")',
      output: 'Hello, World!\nHello, World!',
    },
    {
      type: 'predict',
      question: 'In Python, what replaces the Batch `echo` command?',
      options: [
        { text: 'print()', correct: true, explanation: 'print() is Python\'s way to output text to the terminal.' },
        { text: 'output()', correct: false, explanation: 'Python uses print, not output.' },
        { text: 'display()', correct: false, explanation: 'display is not a built-in Python command.' },
        { text: 'console.log()', correct: false, explanation: 'That is JavaScript syntax.' },
      ],
    },
    {
      type: 'learn',
      title: 'Why Python After Batch?',
      body: 'Batch:\n✓ Built into Windows — runs anywhere\n✗ Limited to Windows\n✗ No math libraries, no web access, no graphics\n\nPython:\n✓ Runs on Windows, Mac, Linux\n✓ Has libraries for everything: web, games, AI, data\n✓ Same concepts you already know\n✗ Must be installed',
      code: null,
    },
    {
      type: 'predict',
      question: 'If you already understand variables, loops, and functions in Batch — how hard is Python?',
      options: [
        { text: 'Much easier — you are learning new syntax for concepts you already understand', correct: true, explanation: 'The hardest part of programming is thinking, not syntax. You already think like a programmer.' },
        { text: 'Just as hard as starting from zero', correct: false, explanation: 'Your Batch knowledge directly transfers.' },
        { text: 'Python is completely different', correct: false, explanation: 'The concepts are nearly identical.' },
        { text: 'Python is easier than Batch was', correct: false, explanation: 'Python syntax is simpler in many ways, but both have learning curves.' },
      ],
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Python Portal initializing. Your Batch skills are the key to unlock it.',
    },
  ],
};
