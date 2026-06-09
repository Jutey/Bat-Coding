// Lesson 67 — Quest System
export default {
  id: 'world-07/lesson-67-quest-system',
  title: 'Quest System',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Quests Are State + Functions',
      body: 'A quest is just a variable that tracks progress.\n\n`quest_active=0` → not started\n`quest_active=1` → in progress\n`quest_active=2` → complete\n\nFunctions check and update this state.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Quest Check Function',
      body: 'A quest function checks if conditions are met, updates the state, and prints results.',
      code: '@echo off\nset quest_retrieve=0\nset item_found=0\ncall :check_quest\npause\nset item_found=1\ncall :check_quest\npause\nexit /b\n\n:check_quest\nif %item_found%==1 if %quest_retrieve%==0 (\n  set quest_retrieve=1\n  echo QUEST COMPLETE: Item Retrieved!\n  exit /b\n)\nif %quest_retrieve%==0 echo Quest: Find the lost module.\nif %quest_retrieve%==1 echo Quest: Complete.\nexit /b',
      output: 'Quest: Find the lost module.\nQUEST COMPLETE: Item Retrieved!\nQuest: Complete.',
    },
    {
      type: 'predict',
      question: 'Why is quest_retrieve a separate variable from item_found?',
      options: [
        { text: 'item_found tracks if you have the item; quest_retrieve tracks if you completed the quest', correct: true, explanation: 'They represent different things — having the item and turning in the quest.' },
        { text: 'They are the same', correct: false, explanation: 'You could have the item without completing the quest yet.' },
        { text: 'One is for numbers, one for text', correct: false, explanation: 'Both are numeric flags here.' },
        { text: 'You only need one variable', correct: false, explanation: 'Quests often have multiple stages.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset mission=0\nset signal_found=1\ncall :mission_check\npause\nexit /b\n\n:mission_check\nif %signal_found%==1 if %mission%==0 (\n  set mission=1\n  echo MISSION COMPLETE!\n  ',
      blank: 'exit /b',
      after: '\n)\necho Mission status: %mission%\nexit /b',
      answer: 'exit /b',
      hint: 'Return after completing the mission',
    },
    {
      type: 'build',
      prompt: 'Build a 3-quest chain system:\n- Quest 1: Find the power cell (set power_cell=1)\n- Quest 2 (unlocks when Q1 done): Restore power (set power_restored=1)\n- Quest 3 (unlocks when Q2 done): Report to Command (set mission_done=1)\n\nMenu shows current quest status. Player can "complete" each quest in order.',
      minLines: 30,
      starterCode: '@echo off\nset q1=0\nset q2=0\nset q3=0\n:menu\ncls\ncall :show_quests\necho 1. Complete Current Quest\necho 2. Exit\nchoice /c 12\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Quest system initialized. Objectives are now trackable and chainable.',
    },
  ],
};
