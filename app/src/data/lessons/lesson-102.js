// Lesson 102 — Variables in Python
export default {
  id: 'world-11/lesson-102-variables-in-python',
  title: 'Variables in Python',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Variables: Familiar Territory',
      body: 'You already know what variables are. Python just uses simpler syntax.\n\nBatch: `set name=Cadet` → read as `%name%`\nPython: `name = "Cadet"` → read as `name`\n\nNo equals-only, no percent signs. Just use the name directly.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Python Variable Syntax',
      body: 'In Python, strings (text) need quotes. Numbers do not.',
      code: 'name = "Cadet"\nlevel = 5\nhp = 100\nprint(name)\nprint(level)\nprint(hp)',
      output: 'Cadet\n5\n100',
    },
    {
      type: 'predict',
      question: 'How do you print a variable named `score` in Python?',
      options: [
        { text: 'print(score)', correct: true, explanation: 'In Python, you just use the variable name directly inside print().' },
        { text: 'echo %score%', correct: false, explanation: 'That is Batch syntax.' },
        { text: 'print("%score%")', correct: false, explanation: 'In Python, % signs are not variable markers.' },
        { text: 'output(score)', correct: false, explanation: 'Python uses print, not output.' },
      ],
    },
    {
      type: 'learn',
      title: 'String Formatting in Python',
      body: 'To combine text and variables: use f-strings.',
      code: 'name = "Nova"\nlevel = 7\nprint(f"Welcome, {name}! You are level {level}.")',
      output: 'Welcome, Nova! You are level 7.',
    },
    {
      type: 'predict',
      question: 'What is the Python equivalent of Batch\'s `echo Welcome, %name%`?',
      options: [
        { text: 'print(f"Welcome, {name}")', correct: true, explanation: 'f-strings insert variable values into text with curly braces.' },
        { text: 'print("Welcome, name")', correct: false, explanation: 'This prints the literal word "name".' },
        { text: 'echo(f"Welcome, {name}")', correct: false, explanation: 'Python uses print, not echo.' },
        { text: 'print("Welcome, " + name)', correct: false, explanation: 'This works too but f-strings are cleaner.' },
      ],
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Python variable module synced. Your knowledge is transferring perfectly.',
    },
  ],
};
