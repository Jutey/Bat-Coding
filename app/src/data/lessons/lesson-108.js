// Lesson 108 — Combining Languages
export default {
  id: 'world-11/lesson-108-combining-languages',
  title: 'Combining Languages',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Using Both Tools Together',
      body: 'Professional systems often use multiple languages. A server might use Bash to start, Python to process data, and JavaScript for the web interface.\n\nKnowing when to use each language is a skill in itself.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Passing Data Between Batch and Python',
      body: 'Batch can pass arguments to Python. Python can write results to files that Batch reads back.',
      code: '@echo off\nset /p name=Enter name: \npython greet.py %name%\necho Greeting complete.\npause',
      output: 'Enter name: Nova\nGreeting complete.',
    },
    {
      type: 'predict',
      question: 'What is the best use case for running Python FROM Batch instead of doing everything in one language?',
      options: [
        { text: 'When the task needs Python\'s libraries (math, web, data) but the workflow control is simpler in Batch', correct: true, explanation: 'Use each language where it excels.' },
        { text: 'When Batch cannot do math', correct: false, explanation: 'Batch can do basic math with set /a.' },
        { text: 'When Python is required by Windows', correct: false, explanation: 'Python is optional on Windows.' },
        { text: 'When you want slower execution', correct: false, explanation: 'Performance is not the reason to mix languages.' },
      ],
    },
    {
      type: 'learn',
      title: 'Side-by-Side Comparison',
      body: 'Same program in both languages:',
      code: 'REM BATCH VERSION:\n@echo off\nset /p name=Name: \necho Welcome, %name%!\npause\n\n# PYTHON VERSION:\nname = input("Name: ")\nprint(f"Welcome, {name}!")',
      output: 'Name: Cadet\nWelcome, Cadet!',
    },
    {
      type: 'build',
      prompt: 'Create a two-file system:\n1. launcher.bat — Batch script that collects user name and level, then calls python processor.py\n2. Mentally write out what processor.py would do (you can echo it as a comment)\n\nIn launcher.bat:\n- Ask for name\n- Ask for level\n- Run python processor.py (simulated)\n- Echo "Processing complete"\n- Save the inputs to input_data.txt for Python to read',
      minLines: 12,
      starterCode: '@echo off\nset /p name=Name: \nset /p level=Level: \necho %name%|%level% > input_data.txt\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Multi-language architecture deployed. The system speaks Batch and Python fluently.',
    },
  ],
};
