// Lesson 68 — Multi-Function RPG
export default {
  id: 'world-07/lesson-68-multi-function-rpg',
  title: 'Multi-Function RPG',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 120,
  steps: [
    {
      type: 'learn',
      title: 'All Systems Together',
      body: 'You now have all the building blocks of a real RPG:\n- :main_menu (navigation)\n- :combat (battle logic)\n- :shop (purchases)\n- :status (show player state)\n- :save / :load (file persistence)\n\nCombine them and you have a complete game architecture.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The Hub Architecture',
      body: 'The main loop is simple: show menu, call the right function, repeat. Each function is self-contained.',
      code: '@echo off\nset gold=50\nset hp=100\n:main\ncls\ncall :status\ncall :main_menu\nchoice /c 123\nif errorlevel 3 goto end\nif errorlevel 2 call :shop\nif errorlevel 1 call :explore\ngoto main\n:end\necho Thanks for playing.\npause\nexit /b\n\n:status\necho HP: %hp% | Gold: %gold%\necho ----------\nexit /b\n\n:main_menu\necho 1. Explore  2. Shop  3. Quit\nexit /b\n\n:explore\necho You venture into the ruins...\npause\nexit /b\n\n:shop\necho Shop is open. (no items yet)\npause\nexit /b',
      output: 'HP: 100 | Gold: 50\n----------\n1. Explore  2. Shop  3. Quit',
    },
    {
      type: 'predict',
      question: 'Why does the main loop use `call :shop` instead of `goto :shop`?',
      options: [
        { text: 'call returns to the main loop; goto would not', correct: true, explanation: 'After the shop, you want to loop back to the menu — call makes that happen automatically.' },
        { text: 'goto does not work with functions', correct: false, explanation: 'goto works but it does not return.' },
        { text: 'call is required for menus', correct: false, explanation: 'There is no such rule.' },
        { text: 'They work the same here', correct: false, explanation: 'goto would leave the main loop permanently.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset hp=100\n:main\ncls\necho HP: %hp%\necho 1. Rest  2. Quit\nchoice /c 12\nif errorlevel 2 goto end\nif errorlevel 1 ',
      blank: 'call :rest',
      after: '\ngoto main\n:end\npause\nexit /b\n\n:rest\nset /a hp=%hp%+10\necho Rested. HP: %hp%\npause\nexit /b',
      answer: 'call :rest',
      hint: 'Use call so you return to the main loop after resting',
    },
    {
      type: 'build',
      prompt: 'Build a 4-function mini RPG:\n- :hud — shows HP, gold, level\n- :explore — random encounter (50% monster, 50% treasure)\n- :rest — spend 10 gold to restore 20 HP\n- :status_report — shows all variables formatted\n\nMain menu loops until player quits.',
      minLines: 40,
      starterCode: '@echo off\nset hp=80\nset gold=50\nset level=1\n:main\ncls\ncall :hud\necho 1. Explore  2. Rest  3. Status  4. Quit\nchoice /c 1234\n',
    },
    {
      type: 'reward',
      xp: 120,
      storyUpdate: 'Multi-function architecture established. Programs can now be large and maintainable.',
    },
  ],
};
