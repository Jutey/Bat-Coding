// Lesson 106 — Files in Python
export default {
  id: 'world-11/lesson-106-files-in-python',
  title: 'Files in Python',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'File I/O: Same Concept, Better Tools',
      body: 'Batch: `echo data > file.txt` and `type file.txt`\nPython: `open("file.txt", "w")` to write, `open("file.txt", "r")` to read\n\nPython gives you far more control over file handling.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Writing a File',
      body: 'Open with mode "w" (write) to create/overwrite, "a" (append) to add.',
      code: 'with open("save.txt", "w") as f:\n    f.write("PLAYER=Cadet\\n")\n    f.write("LEVEL=5\\n")\nprint("Saved!")',
      output: 'Saved!\n(save.txt now contains 2 lines)',
    },
    {
      type: 'predict',
      question: 'In Python, what does the "w" in `open("file.txt", "w")` mean?',
      options: [
        { text: 'Write mode — creates the file if it does not exist, overwrites if it does', correct: true, explanation: 'Same as > in Batch. "a" is append, like >>.' },
        { text: 'Watch mode — reads the file continuously', correct: false, explanation: 'Watch mode does not exist in basic file I/O.' },
        { text: 'Windows mode — required on Windows', correct: false, explanation: 'Not platform-specific.' },
        { text: 'Wide mode — allows longer lines', correct: false, explanation: 'Line length is not a file mode.' },
      ],
    },
    {
      type: 'learn',
      title: 'Reading a File',
      body: 'Open with mode "r" (read) and use read() or readlines().',
      code: 'with open("save.txt", "r") as f:\n    content = f.read()\nprint(content)',
      output: 'PLAYER=Cadet\nLEVEL=5',
    },
    {
      type: 'predict',
      question: 'What Python mode is equivalent to Batch\'s `>>`?',
      options: [
        { text: '"a" (append)', correct: true, explanation: 'Append mode adds to the file without deleting existing content.' },
        { text: '"w" (write)', correct: false, explanation: '"w" overwrites, like > in Batch.' },
        { text: '"r" (read)', correct: false, explanation: '"r" reads, not writes.' },
        { text: '"x" (create)', correct: false, explanation: '"x" creates a new file and fails if it exists.' },
      ],
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Python file I/O bridged from Batch knowledge. Data persistence unlocked in both languages.',
    },
  ],
};
