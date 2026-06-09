// Lesson 105 — Functions in Python
export default {
  id: 'world-11/lesson-105-functions-in-python',
  title: 'Functions in Python',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Functions: Much Cleaner in Python',
      body: 'Batch: `:label` + `call :label` + `exit /b`\nPython: `def function_name():` + `function_name()`\n\nNo labels, no exit /b. Python functions are much more natural.',
      code: null,
    },
    {
      type: 'learn',
      title: 'def — Define a Function',
      body: '`def` defines a function. Call it by name with parentheses.',
      code: 'def greet():\n    print("Signal received.")\n    print("Systems operational.")\n\ngreet()\ngreet()',
      output: 'Signal received.\nSystems operational.\nSignal received.\nSystems operational.',
    },
    {
      type: 'predict',
      question: 'In Python, what replaces Batch\'s `exit /b` at the end of a function?',
      options: [
        { text: 'Nothing — Python functions return automatically when they end', correct: true, explanation: 'Python handles returns implicitly. No exit command needed.' },
        { text: 'return', correct: false, explanation: 'return is used to return values, not required just to end a function.' },
        { text: 'end def', correct: false, explanation: 'Not valid Python syntax.' },
        { text: 'exit()', correct: false, explanation: 'exit() quits the whole program, not just the function.' },
      ],
    },
    {
      type: 'learn',
      title: 'Functions with Parameters',
      body: 'Python functions can accept input values directly — no global variables needed.',
      code: 'def greet(name):\n    print(f"Welcome, {name}!")\n\ngreet("Nova")\ngreet("Cadet")',
      output: 'Welcome, Nova!\nWelcome, Cadet!',
    },
    {
      type: 'predict',
      question: 'What advantage do function parameters give over global variables?',
      options: [
        { text: 'Each call can work with different data without changing a global variable', correct: true, explanation: 'Parameters make functions truly reusable with any input.' },
        { text: 'Parameters make functions faster', correct: false, explanation: 'Speed is not the benefit.' },
        { text: 'Parameters are required in Python', correct: false, explanation: 'Functions can have no parameters.' },
        { text: 'Global variables do not work in Python', correct: false, explanation: 'Python has global variables but parameters are usually better.' },
      ],
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Python function modules installed. Code is becoming truly modular.',
    },
  ],
};
