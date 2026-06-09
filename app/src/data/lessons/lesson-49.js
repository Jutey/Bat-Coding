// Lesson 49 — Full Battle System
export default {
  id: 'world-05/lesson-49-full-battle-system',
  title: 'Full Battle System',
  world: 'SECTOR 5 — THE RANDOM SERVER',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Your Most Complex Script Yet',
      body: 'This lesson combines every skill from World 5:\n- Random damage\n- Weighted crits\n- Looping combat\n- Win/lose conditions\n- Formatted output\n\nThis is a real mini-game.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Two Fighters, One Loop',
      body: 'Each turn both sides deal damage. Check after each side attacks whether the other has died.',
      code: '@echo off\nset playerHP=50\nset enemyHP=30\n:battle\ncls\necho [ BATTLE ]\necho Your HP:  %playerHP%\necho Enemy HP: %enemyHP%\necho.\nset /a pdmg=%random% %% 8 + 3\nset /a enmydmg=%random% %% 6 + 2\nset /a enemyHP=%enemyHP%-%pdmg%\nif %enemyHP% LEQ 0 goto win\nset /a playerHP=%playerHP%-%enmydmg%\nif %playerHP% LEQ 0 goto lose\necho You hit for %pdmg%   Enemy hits for %enmydmg%\npause\ngoto battle\n:win\necho YOU WIN!\ngoto end\n:lose\necho GAME OVER\n:end\npause',
      output: '[ BATTLE ]\nYour HP:  50\nEnemy HP: 30\n\nYou hit for 7   Enemy hits for 4',
    },
    {
      type: 'predict',
      question: 'Why is `goto win` placed BEFORE the enemy attacks?',
      options: [
        { text: 'If the enemy is already dead, it should not attack', correct: true, explanation: 'Check if battle is over after each attack — dead enemies do not fight back.' },
        { text: 'goto win always runs first', correct: false, explanation: 'It only runs when enemyHP hits 0.' },
        { text: 'The order does not matter', correct: false, explanation: 'Wrong order would let a dead enemy still deal damage.' },
        { text: 'goto win resets enemy HP', correct: false, explanation: 'goto just jumps to a label.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset playerHP=40\nset enemyHP=25\n:battle\nset /a dmg=%random% %% 10 + 1\nset /a enemyHP=%enemyHP%-%dmg%\nif %enemyHP% LEQ 0 goto ',
      blank: 'win',
      after: '\necho Enemy HP: %enemyHP%\ngoto battle\n:win\necho VICTORY!\npause',
      answer: 'win',
      hint: 'Where should the code jump when the enemy HP drops to 0?',
    },
    {
      type: 'build',
      prompt: 'Extend the battle system:\n- Add a 20% chance for CRITICAL hit (2x damage)\n- Show a different message on crit\n- Add player HP tracking\n- Declare winner properly',
      minLines: 18,
      starterCode: '@echo off\nset playerHP=50\nset enemyHP=30\n:battle\ncls\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Combat simulation modules restored. World 5 complete.',
    },
  ],
};
