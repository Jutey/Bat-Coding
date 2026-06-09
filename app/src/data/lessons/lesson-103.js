// Lesson 103 — Input in Python
export default {
  id: 'world-11/lesson-103-input-in-python',
  title: 'Input in Python',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Getting User Input',
      body: 'Batch: `set /p name=Enter name: `\nPython: `name = input("Enter name: ")`\n\nSame concept: prompt the user, store what they type. Python is just one clean function.',
      code: null,
    },
    {
      type: 'learn',
      title: 'input() — Ask for Input',
      body: 'input() displays a prompt and returns what the user typed.',
      code: 'name = input("Enter your name: ")\nprint(f"Hello, {name}!")',
      output: 'Enter your name: Nova\nHello, Nova!',
    },
    {
      type: 'predict',
      question: 'What is the Python equivalent of `set /p score=Your score: `?',
      options: [
        { text: 'score = input("Your score: ")', correct: true, explanation: 'input() stores user input exactly like set /p.' },
        { text: 'get score from "Your score: "', correct: false, explanation: 'Not valid Python.' },
        { text: 'read("Your score: ", score)', correct: false, explanation: 'Not a Python built-in.' },
        { text: 'score = prompt("Your score: ")', correct: false, explanation: 'Python uses input(), not prompt().' },
      ],
    },
    {
      type: 'learn',
      title: 'Numbers from Input',
      body: 'input() always returns text (a string). To use it as a number, wrap in int().',
      code: 'level = int(input("Your level: "))\nhp = level * 10\nprint(f"HP: {hp}")',
      output: 'Your level: 5\nHP: 50',
    },
    {
      type: 'predict',
      question: 'Why does Python need `int()` but Batch does not for math?',
      options: [
        { text: 'Python distinguishes between text "5" and number 5; Batch converts automatically in set /a', correct: true, explanation: 'Python is strongly typed. Batch is loosely typed.' },
        { text: 'Python is stricter about formatting', correct: false, explanation: 'It is about types, not formatting.' },
        { text: 'int() is optional in Python', correct: false, explanation: 'Without int(), adding numbers would concatenate strings instead.' },
        { text: 'Batch is more advanced than Python', correct: false, explanation: 'They handle types differently, not better/worse.' },
      ],
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Python input module synchronized. Interactive programs are possible in both languages.',
    },
  ],
};
