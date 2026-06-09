// Lesson 97 — Debugging Toolkit
export default {
  id: 'world-10/lesson-97-debugging-toolkit',
  title: 'Debugging Toolkit',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'A Debugger\'s Toolkit',
      body: 'Professional developers have a debugging process. You should too.\n\n**Your toolkit:**\n1. Echo debug statements — print variables to see their values\n2. Isolate — comment out sections to find which one fails\n3. Test with known values — replace user input with fixed values temporarily\n4. Check errorlevel — check if a command succeeded\n5. Search for % signs — missing ones cause silent failures',
      code: null,
    },
    {
      type: 'learn',
      title: 'Debug Mode Toggle',
      body: 'Professional technique: add a debug mode variable. When debug=1, extra info prints.',
      code: '@echo off\nset debug=1\nset /a result=5*4\nif %debug%==1 echo DEBUG: result=%result%\necho Result: %result%\npause',
      output: 'DEBUG: result=20\nResult: 20',
    },
    {
      type: 'predict',
      question: 'Why is a debug mode variable better than just deleting debug echo lines?',
      options: [
        { text: 'You can switch debug off for the final version by changing one variable', correct: true, explanation: 'Set debug=0 and all debug output disappears without deleting any code.' },
        { text: 'It makes the code run faster', correct: false, explanation: 'Debug mode has no speed benefit.' },
        { text: 'Batch requires a debug variable', correct: false, explanation: 'It is a technique, not a requirement.' },
        { text: 'It automatically finds bugs', correct: false, explanation: 'It helps you see values — you still find the bug yourself.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset debug=1\nset name=Cadet\nset level=5\nif %debug%==1 echo DEBUG: name=%name% level=',
      blank: '%level%',
      after: '\necho Welcome %name%, level %level%\npause',
      answer: '%level%',
      hint: 'Access the level variable using % signs',
    },
    {
      type: 'build',
      prompt: 'Write a program with a built-in debug mode:\n1. At the top: set DEBUG=0 (can be changed to 1 to enable debug output)\n2. Create a calculation function (math with set /a)\n3. After each step in the function, if DEBUG==1, echo the variable values\n4. Create a save function that writes to a file\n5. After the save, if DEBUG==1, echo "File written: [filename]"\n\nThe final output should look clean when DEBUG=0.',
      minLines: 25,
      starterCode: '@echo off\nset DEBUG=0\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Debugging toolkit assembled. You are now a systematic problem-solver.',
    },
  ],
};
