// Lesson 46 — Battle System
export default {
  id: 'world-05/lesson-46-battle-system',
  title: 'Battle System',
  world: 'SECTOR 5 — THE RANDOM SERVER',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Putting It All Together',
      body: 'You now know:\n- Variables (store HP)\n- Loops (keep fighting)\n- Random (damage varies)\n- Conditions (check if dead)\n\nCombine them and you have a battle system.',
      code: null,
    },
    {
      type: 'learn',
      title: 'A Full Battle Loop',
      body: 'Each turn: deal random damage, check if enemy is dead, repeat if not.',
      code: '@echo off\nset enemy=30\n:battle\nset /a dmg=%random% %% 10 + 1\nset /a enemy=%enemy%-%dmg%\necho You deal %dmg% damage. Enemy HP: %enemy%\nif %enemy% GTR 0 goto battle\necho ENEMY DEFEATED!\npause',
      output: 'You deal 7 damage. Enemy HP: 23\nYou deal 4 damage. Enemy HP: 19\n...\nENEMY DEFEATED!',
    },
    {
      type: 'predict',
      question: 'What does `if %enemy% GTR 0 goto battle` do?',
      options: [
        { text: 'Keeps looping as long as the enemy has HP above 0', correct: true, explanation: 'GTR means greater than. The loop continues while enemy lives.' },
        { text: 'Goes to battle when enemy is dead', correct: false, explanation: 'It only loops while enemy HP is positive.' },
        { text: 'Resets the enemy HP', correct: false, explanation: 'GTR only checks, it does not change values.' },
        { text: 'Always loops forever', correct: false, explanation: 'The condition stops the loop when enemy HP hits 0 or below.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset enemy=20\n:battle\nset /a dmg=%random% %% 8 + 1\nset /a enemy=%enemy%-%dmg%\necho Damage: %dmg% | HP left: %enemy%\nif %enemy% GTR 0 goto ',
      blank: 'battle',
      after: '\necho VICTORY!\npause',
      answer: 'battle',
      hint: 'Where should the loop jump back to?',
    },
    {
      type: 'fix',
      code: '@echo off\nset enemy=25\n:battle\nset /a dmg=%random% %% 6 + 1\nset /a enemy=enemy-dmg\necho HP: %enemy%\nif %enemy% GTR 0 goto battle\necho WIN\npause',
      answer: '@echo off\nset enemy=25\n:battle\nset /a dmg=%random% %% 6 + 1\nset /a enemy=%enemy%-%dmg%\necho HP: %enemy%\nif %enemy% GTR 0 goto battle\necho WIN\npause',
      hint: 'In set /a, you do not use % signs around variable names',
      hint2: 'Change `enemy-dmg` to `%enemy%-%dmg%` — actually with set /a you can use either, but check the syntax carefully',
    },
    {
      type: 'build',
      prompt: 'Build a two-sided battle. Player has 50 HP, enemy has 30 HP. Each turn: player attacks for 1-10 damage, enemy attacks back for 1-6 damage. Loop until someone dies. Declare the winner.',
      minLines: 14,
      starterCode: '@echo off\nset playerHP=50\nset enemyHP=30\n:battle\n',
    },
    {
      type: 'reward',
      xp: 110,
      achievement: 'battle_built',
      storyUpdate: 'Combat protocols restored. The network can now defend itself.',
    },
  ],
};
