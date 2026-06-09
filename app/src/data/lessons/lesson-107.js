// Lesson 107 — Running Python from Batch
export default {
  id: 'world-11/lesson-107-running-python-from-batch',
  title: 'Running Python from Batch',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Two Languages, One System',
      body: 'You do not have to choose between Batch and Python.\n\nBatch is great at: file management, launching programs, system administration.\nPython is great at: data processing, web requests, complex logic.\n\nYou can run Python scripts FROM Batch — using the best tool for each job.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Calling Python from Batch',
      body: 'If Python is installed, you can run any .py file with `python filename.py`.',
      code: '@echo off\necho Running Python script...\npython hello.py\necho Back in Batch.\npause',
      output: 'Running Python script...\n[output from hello.py]\nBack in Batch.',
    },
    {
      type: 'predict',
      question: 'Why would you use Batch to launch a Python script instead of just running Python directly?',
      options: [
        { text: 'You can use Batch to set up the environment, run multiple scripts in sequence, or wrap Python in a menu', correct: true, explanation: 'Batch orchestrates. Python processes. They complement each other.' },
        { text: 'Batch makes Python run faster', correct: false, explanation: 'Launching from Batch has no speed benefit.' },
        { text: 'Python cannot run without Batch', correct: false, explanation: 'Python runs independently.' },
        { text: 'It is the only way to use Python on Windows', correct: false, explanation: 'Python runs directly on Windows.' },
      ],
    },
    {
      type: 'learn',
      title: 'Checking if Python is Installed',
      body: 'Before running Python, check it is available.',
      code: '@echo off\npython --version >nul 2>&1\nif %errorlevel%==0 (\n  echo Python available.\n  python my_script.py\n) else (\n  echo Python not installed. Get it at python.org\n)\npause',
      output: 'Python available.\n[script runs]',
    },
    {
      type: 'fill',
      before: '@echo off\necho Launching data processor...\n',
      blank: 'python analyze.py',
      after: '\necho Processing complete.\npause',
      answer: 'python analyze.py',
      hint: 'Use python to run the .py file',
    },
    {
      type: 'build',
      prompt: 'Build a Batch launcher that:\n1. Checks if Python is installed (python --version)\n2. If yes: launches a Python script of your choice (create a simple hello.py first with print("Python Online!"))\n3. If no: prints instructions to install Python\n4. Log the launch attempt to launcher.log',
      minLines: 14,
      starterCode: '@echo off\necho === PYTHON LAUNCHER ===\npython --version >nul 2>&1\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Cross-language bridge established. Batch and Python now operate as one system.',
    },
  ],
};
