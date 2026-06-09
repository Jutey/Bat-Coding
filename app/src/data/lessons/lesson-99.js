// Lesson 99 — Grand Quest Finale
export default {
  id: 'world-10/lesson-99-grand-quest-finale',
  title: 'Grand Quest Finale',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'TERMINAL PRIME IS ALMOST RESTORED',
      body: 'You have restored all 9 sectors.\n\nPower. Memory. Logic. Loops. Randomness. Files. Functions. Automation. Network.\n\nOne challenge remains: build the Grand Quest Finale — a complete system that combines everything you have learned.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The Final Mission Brief',
      body: 'Build the TERMINAL PRIME RESTORATION CONSOLE.\n\nThis is not a drill. This is your capstone project.',
      code: null,
    },
    {
      type: 'predict',
      question: 'Which of these represents the most complex program architecture?',
      options: [
        { text: 'A menu-driven app with modular functions, file persistence, error handling, and a loop', correct: true, explanation: 'Real software combines all these patterns.' },
        { text: 'A single long script with no functions', correct: false, explanation: 'That is the spaghetti code pattern you have moved beyond.' },
        { text: 'A script that just uses echo 20 times', correct: false, explanation: 'That is the starting point, not the destination.' },
        { text: 'A script with many gotos but no calls', correct: false, explanation: 'goto-heavy code without structure is harder to maintain.' },
      ],
    },
    {
      type: 'build',
      prompt: 'BUILD THE TERMINAL PRIME RESTORATION CONSOLE.\n\nThis is your final Batch project. Combine at minimum:\n✓ Startup sequence (boot animation)\n✓ Load a save file if it exists\n✓ Main menu loop with 5+ options\n✓ At least one feature using random\n✓ At least one feature using file I/O\n✓ At least one battle/game feature\n✓ A save function\n✓ A system report function\n✓ Debug mode toggle (set DEBUG=0)\n✓ Professional formatting with headers and separators\n✓ Minimum 8 call-based functions\n✓ Minimum 80 lines\n\nMake it yours. Make it impressive.',
      minLines: 80,
      starterCode: '@echo off\nset DEBUG=0\ncall :boot\ncall :load\n:main\ncls\ncall :header\ncall :show_menu\n',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'grand_quest_complete',
      storyUpdate: 'TERMINAL PRIME: RESTORATION IN PROGRESS. 99% COMPLETE. One final challenge remains.',
    },
  ],
};
