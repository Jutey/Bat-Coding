// Lesson 70 — BOSS BATTLE: The Recursion Trap
export default {
  id: 'world-07/lesson-70-boss-battle-recursion-trap',
  title: 'BOSS BATTLE — The Recursion Trap',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'SECTOR 7 BOSS: THE RECURSION TRAP',
      body: 'The Function Factory has been hit by a Recursion Trap — functions calling themselves in infinite loops, consuming all processing power.\n\nTo defeat it, you must build the most complete, well-structured Batch program you have written yet.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Boss Requirements',
      body: 'Build a COMPLETE TERMINAL APPLICATION with:\n1. Startup function (title, color, welcome message)\n2. Main menu loop (using :show_menu function)\n3. At least 4 fully working features, each as its own function\n4. A :save function that writes state to a file\n5. A :load function that checks if save exists\n6. A :help function explaining the app\n7. Minimum 8 distinct labels\n8. Every function ends with exit /b\n9. No spaghetti code — main loop stays clean',
      code: null,
    },
    {
      type: 'predict',
      question: 'What is "spaghetti code"?',
      options: [
        { text: 'Code with too many gotos jumping all over the place, making it hard to follow', correct: true, explanation: 'goto-heavy code without structure looks like tangled spaghetti.' },
        { text: 'Code with too many variables', correct: false, explanation: 'Variables are not the issue.' },
        { text: 'Code that prints food', correct: false, explanation: 'A fun guess but not what it means.' },
        { text: 'Code longer than 100 lines', correct: false, explanation: 'Length alone is not the problem.' },
      ],
    },
    {
      type: 'build',
      prompt: 'BUILD THE FINAL FUNCTION FACTORY APP.\n\nYour choice of theme. Ideas: system monitor, adventure game, quiz app, inventory tracker, personal assistant.\n\nHard requirements:\n- :startup function (runs once at launch)\n- :main_menu function (called each loop)\n- At least 4 feature functions, each doing something useful\n- :save writes at least 2 variables to a file\n- :load checks if save exists, loads if so\n- :help explains the app\n- 8+ labels total\n- All functions end with exit /b\n- Main loop is less than 15 lines\n- Minimum 50 lines total',
      minLines: 50,
      starterCode: '@echo off\ncall :startup\ncall :load\n:main\ncls\ncall :main_menu\nchoice /c 12345\n',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'world7_boss',
      storyUpdate: 'SECTOR 7 RESTORED. The Recursion Trap has been neutralized. Your code is clean, modular, and powerful.',
    },
  ],
};
