// Lesson 109 — Final Project
export default {
  id: 'world-11/lesson-109-final-project',
  title: 'Final Project',
  world: 'SECTOR 11 — PYTHON PORTAL',
  xp: 300,
  steps: [
    {
      type: 'learn',
      title: 'The Capstone Project',
      body: 'You have one lesson left after this.\n\nBefore the graduation ceremony, prove everything you have learned.\n\nBuild something real. Something you could show someone and say: "I made this."',
      code: null,
    },
    {
      type: 'learn',
      title: 'Project Options',
      body: 'Choose one (or build your own):\n\n**Option A**: Personal Productivity Tool\n— Tasks, notes, reminders stored in files\n— Menu-driven, search feature, export to report\n\n**Option B**: Text Adventure Game\n— 3+ locations, inventory, puzzle, win condition\n— Save/load system, random encounters\n\n**Option C**: System Monitor Tool\n— Collects system info, generates daily reports\n— Compares to previous report, highlights changes\n\n**Option D**: Your Own Idea\n— Must be approved by... yourself. Make it something you actually want.',
      code: null,
    },
    {
      type: 'predict',
      question: 'What makes a project "real" vs. just completing a tutorial exercise?',
      options: [
        { text: 'It solves a problem you actually have, or creates something you actually enjoy', correct: true, explanation: 'Purpose gives projects meaning. The best code is code that matters.' },
        { text: 'It is longer than 100 lines', correct: false, explanation: 'Length alone is not quality.' },
        { text: 'It uses every command you learned', correct: false, explanation: 'Using a command just to use it makes bad software.' },
        { text: 'A teacher approves it', correct: false, explanation: 'Real projects serve users, not teachers.' },
      ],
    },
    {
      type: 'build',
      prompt: 'BUILD YOUR FINAL PROJECT.\n\nRequirements:\n- Choose a purpose that means something to you\n- At least 60 lines\n- Uses: variables, input, loops, functions (call), files (save/load), formatted output\n- Has a main menu loop\n- Handles missing files gracefully\n- Has a debug mode\n- Professional header/footer formatting\n\nDocument your project at the top with comments (REM lines) explaining what it does.\n\nThis is your portfolio piece.',
      minLines: 60,
      starterCode: '@echo off\nREM ================================\nREM PROJECT: [Your Project Name]\nREM DESCRIPTION: [What it does]\nREM AUTHOR: [Your callsign]\nREM ================================\nset DEBUG=0\n',
    },
    {
      type: 'reward',
      xp: 300,
      achievement: 'final_project_complete',
      storyUpdate: 'Final project submitted. The Digital Repair Corps archives your work for history.',
    },
  ],
};
