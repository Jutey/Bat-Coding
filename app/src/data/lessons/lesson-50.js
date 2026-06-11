// Lesson 50 — BOSS BATTLE: The Chaos Engine
export default {
  id: 'world-05/lesson-50-boss-battle-chaos-engine',
  title: 'BOSS BATTLE — The Chaos Engine',
  world: 'SECTOR 5 — THE RANDOM SERVER',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'SECTOR 5 BOSS: THE CHAOS ENGINE',
      body: 'Alarms scream through Sector 5. The Random Server\'s core AI has shattered every safety lock and gone fully rogue.\n\nIt is the Chaos Engine — a storm of random attacks, random buffs, random debuffs, lashing out in every direction with no pattern an enemy can predict.\n\nYour mission: build a program that can stand in that storm, absorb the chaos, and still fight its way to a stable end state. One miscounted variable and your tracking will desync from reality — and you will not see the killing blow coming.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Boss Requirements',
      body: 'Your program must:\n1. Ask for player name\n2. Set player HP and enemy HP\n3. Create a battle loop\n4. Random player damage (1-15)\n5. Random enemy damage (1-10)\n6. 15% crit chance for player (double damage)\n7. Show HP each turn\n8. Declare winner\n9. Use `cls` for clean display\n10. At least 6 labels',
      code: null,
    },
    {
      type: 'predict',
      question: 'For a 15% crit chance using %random% %% 20, which roll values should trigger it?',
      options: [
        { text: 'Rolls 0, 1, and 2 (3 out of 20 = 15%)', correct: true, explanation: '3 values out of 20 is exactly 15%.' },
        { text: 'Rolls 0 and 1 only', correct: false, explanation: 'That would be 10%.' },
        { text: 'Roll 0 only', correct: false, explanation: 'That would be 5%.' },
        { text: 'Rolls 0 through 14', correct: false, explanation: 'That would be 75%.' },
      ],
    },
    {
      type: 'fix',
      prompt: 'The Chaos Engine is taking damage but its HP display never drops — your tracker is desynced! The script sets enemyHP at the start but the damage line updates a differently-named variable, so %enemyHP% never changes. Fix the typo so damage actually applies.',
      code: '@echo off\nset playerHP=60\nset enemyHP=45\nset /a dmg=7\nset /a enemyHp=enemyHP-dmg\necho Enemy HP: %enemyHP%\npause',
      answer: '@echo off\nset playerHP=60\nset enemyHP=45\nset /a dmg=7\nset /a enemyHP=enemyHP-dmg\necho Enemy HP: %enemyHP%\npause',
      hint: 'Batch variable names must match exactly, including capitalization, everywhere they are set and read in this script.',
      hint2: 'The line "set /a enemyHp=enemyHP-dmg" writes to enemyHp (lowercase p) instead of enemyHP — fix it to "set /a enemyHP=enemyHP-dmg".',
    },
    {
      type: 'build',
      prompt: 'BUILD THE CHAOS ENGINE BOSS FIGHT.\n\nRequirements:\n- Ask player name, greet them\n- Player HP: 60, Enemy (Chaos Engine) HP: 45\n- Each turn: random player damage 1-15, enemy damage 1-10\n- 15% crit chance (roll 0-2 on %random% %% 20 = double damage)\n- Show battle header with both HPs each turn\n- Win: "CHAOS ENGINE DEFEATED! Sector 5 Restored."\n- Lose: "SYSTEM OVERLOAD. Rebooting..."\n- At least 6 labels\n- Use cls each turn',
      minLines: 25,
      starterCode: '@echo off\nset /p name=Operator name: \nset playerHP=60\nset enemyHP=45\necho Welcome to battle, %name%!\npause\n',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'world5_boss',
      storyUpdate: 'SECTOR 5 RESTORED. The Random Server is under control. Chaos has been tamed by logic.',
    },
  ],
};
