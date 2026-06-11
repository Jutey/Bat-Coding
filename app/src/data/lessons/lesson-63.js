// Lesson 63 — Menu Functions
export default {
  id: 'world-07/lesson-63-menu-functions',
  title: 'Menu Functions',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Menus as Functions',
      body: 'Menus are a perfect use case for functions.\n\nInstead of pasting the same 5 echo lines everywhere, wrap the menu in a function. Call it at the top of the loop. If you ever change the menu options, change them in one place.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Menu Function Pattern',
      body: 'Separate: the menu display (a function), and the logic (the main loop).',
      code: '@echo off\n:loop\ncls\ncall :show_menu\nchoice /c 123\nif errorlevel 3 goto end\nif errorlevel 2 goto option2\nif errorlevel 1 goto option1\ngoto loop\n\n:option1\necho You chose Scan.\npause\ngoto loop\n\n:option2\necho You chose Status.\npause\ngoto loop\n\n:end\necho Exiting.\npause\nexit /b\n\n:show_menu\necho 1. Scan\necho 2. Status\necho 3. Exit\nexit /b',
      output: '1. Scan\n2. Status\n3. Exit',
    },
    {
      type: 'predict',
      question: 'If you need to add a 4th menu option, what is the minimum change required?',
      options: [
        { text: 'Add the echo line to :show_menu and handle it in the main loop', correct: true, explanation: 'The menu display and logic are separate — clean separation.' },
        { text: 'Rewrite the entire program', correct: false, explanation: 'Functions make changes isolated.' },
        { text: 'Only change the choice /c line', correct: false, explanation: 'You also need to display the option and handle it.' },
        { text: 'Nothing, menus can only have 3 options', correct: false, explanation: 'choice /c supports up to the letters you list.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\n:loop\ncls\ncall :menu\nchoice /c 12\nif errorlevel 2 goto end\nif errorlevel 1 goto action\ngoto loop\n:action\necho Action done!\npause\ngoto loop\n:end\npause\nexit /b\n\n:menu\necho 1. Do Action\necho 2. Exit\n',
      blank: 'exit /b',
      after: '',
      answer: 'exit /b',
      hint: 'The function needs to return after drawing the menu',
    },
    {
      type: 'fix',
      prompt: 'This menu function never returns to the main loop, so it falls through into :option1 every time. Fix the :show_menu function so it returns properly.',
      code: '@echo off\n:loop\ncls\ncall :show_menu\nchoice /c 12\nif errorlevel 2 goto end\nif errorlevel 1 goto option1\ngoto loop\n\n:option1\necho You chose Scan.\npause\ngoto loop\n\n:end\necho Exiting.\npause\nexit /b\n\n:show_menu\necho 1. Scan\necho 2. Exit',
      answer: '@echo off\n:loop\ncls\ncall :show_menu\nchoice /c 12\nif errorlevel 2 goto end\nif errorlevel 1 goto option1\ngoto loop\n\n:option1\necho You chose Scan.\npause\ngoto loop\n\n:end\necho Exiting.\npause\nexit /b\n\n:show_menu\necho 1. Scan\necho 2. Exit\nexit /b',
      hint: 'A function called with `call` must return control to the line after the call.',
      hint2: 'Add `exit /b` as the last line of :show_menu so it returns instead of falling into :option1.',
    },
    {
      type: 'build',
      prompt: 'Build a 4-option app using functions:\n- :show_menu function draws the menu\n- Main loop calls show_menu, handles choice\n- Option 1: Show system status\n- Option 2: Run a scan\n- Option 3: View logs (just echo "No logs yet")\n- Option 4: Exit',
      minLines: 25,
      starterCode: '@echo off\n:loop\ncls\ncall :show_menu\nchoice /c 1234\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'Menu modules installed. Navigation is now cleanly separated from logic.',
    },
  ],
};
