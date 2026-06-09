// Lesson 40 — Boss Battle: Infinite Chaos
export default {
  id: 'world-04/lesson-40-boss-battle-infinite-chaos',
  title: 'Boss Battle: Infinite Chaos',
  world: 'SECTOR 4 — THE LOOP ENGINE',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'BOSS: THE INFINITE CHAOS ENGINE',
      body: 'You\'ve reached the end of Sector 4 — The Loop Engine.\n\nThe boss is the **Infinite Chaos Engine** — a program that loops forever, spawning errors and freezing systems.\n\nTo defeat it, you must write a loop that:\n- Tracks multiple counters\n- Responds to random conditions\n- Has a proper exit condition',
      code: null,
    },
    {
      type: 'learn',
      title: 'Boss Mechanic: Phase Changes',
      body: 'The Chaos Engine has 3 phases. It gets stronger each phase. You need to track which phase it\'s in and change strategy.',
      code: '@echo off\nset bossHP=90\nset phase=1\n:boss\ncls\necho === CHAOS ENGINE ===\necho HP: %bossHP%  Phase: %phase%\nif %bossHP% LEQ 60 set phase=2\nif %bossHP% LEQ 30 set phase=3\necho.\necho Phase %phase% attacks!\nset /p a=Strike (S)? \nset /a bossHP=bossHP-30\nif %bossHP% LEQ 0 goto win\ngoto boss\n:win\necho CHAOS ENGINE DEFEATED!',
      output: '(multi-phase boss battle)',
    },
    {
      type: 'predict',
      question: 'When does the boss enter Phase 2?',
      code: 'set bossHP=90\nif %bossHP% LEQ 60 set phase=2\nif %bossHP% LEQ 30 set phase=3',
      options: [
        'When bossHP is exactly 60',
        'When bossHP is 60 or less',
        'When bossHP is 30 or less',
        'Never — phases don\'t change',
      ],
      correct: 1,
      explanation: 'LEQ means "less than or equal to". Phase 2 triggers when bossHP is 60 or lower.',
    },
    {
      type: 'fill',
      prompt: 'Complete the phase 3 trigger — phase 3 starts when bossHP drops below 30:',
      template: 'if %bossHP% ___ 30 set phase=3',
      blank: '___',
      answer: 'LEQ',
      hint: 'LEQ = less than or equal to. Phase 3 triggers at 30 or less.',
    },
    {
      type: 'fix',
      prompt: 'The boss never dies — the win condition is wrong. Fix it.',
      code: '@echo off\nset bossHP=60\n:boss\nset /a bossHP=bossHP-25\necho HP: %bossHP%\nif %bossHP% EQU 0 goto win\ngoto boss\n:win\necho Victory!',
      answer: '@echo off\nset bossHP=60\n:boss\nset /a bossHP=bossHP-25\necho HP: %bossHP%\nif %bossHP% LEQ 0 goto win\ngoto boss\n:win\necho Victory!',
      bugHint: 'EQU 0 only triggers at exactly 0. If damage overshoots (60-25=35, 35-25=10, 10-25=-15), it skips 0 entirely. Use LEQ 0.',
      bugType: 'wrong_comparison',
    },
    {
      type: 'build',
      prompt: 'FINAL BOSS BATTLE!\n\nBuild the complete Chaos Engine fight:\n- Boss has 120 HP and 3 phases (HP 120-80, 79-40, 39-0)\n- Player has 100 HP\n- Player can attack (30 dmg), defend (block next hit), or use a special move (50 dmg, once only)\n- Boss deals 20 dmg/turn in phase 1, 30 in phase 2, 40 in phase 3\n- Show HP bars every turn\n- Proper win AND lose conditions\n- Print a victory message if you win!',
      starterCode: '@echo off\ncolor 0C\ntitle CHAOS ENGINE — FINAL BATTLE\nset playerHP=100\nset bossHP=120\nset phase=1\nset specialUsed=0\n:boss\ncls',
      minLines: 40,
      achievement: 'loop_champion',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'loop_champion',
      storyUpdate: 'CHAOS ENGINE DESTROYED — SECTOR 4 FULLY RESTORED — LOOP ENGINE ONLINE',
    },
  ],
};
