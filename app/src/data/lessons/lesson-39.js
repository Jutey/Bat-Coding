// Lesson 39 — Loop Boss Minion
export default {
  id: 'world-04/lesson-39-loop-boss-minion',
  title: 'Loop Boss: Minion Wave',
  world: 'SECTOR 4 — THE LOOP ENGINE',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'The Minion Wave Challenge',
      body: 'The Loop Engine has sent a wave of minion programs against you!\n\nEach minion is identical — they all work the same way. Loops let you fight them one at a time, in sequence.\n\nThis lesson builds a multi-enemy encounter using loops and counters.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Looping Through Enemies',
      body: 'Use a counter to track which enemy you\'re fighting. Loop until all enemies are defeated.',
      code: '@echo off\nset totalEnemies=3\nset current=1\n:wave\ncls\necho === MINION WAVE ===\necho Minion %current% of %totalEnemies% attacks!\nset /p action=Attack (A) or Dodge (D)? \nif /i "%action%" == "A" echo You defeated Minion %current%!\nset /a current=current+1\nif %current% GTR %totalEnemies% goto cleared\ngoto wave\n:cleared\necho ALL MINIONS DEFEATED!',
      output: '(fights each minion in turn)',
    },
    {
      type: 'predict',
      question: 'If totalEnemies=4 and you defeat them all, how many times does the :wave label get reached?',
      code: 'set totalEnemies=4\nset current=1\n:wave\n:: fight enemy\nset /a current=current+1\nif %current% GTR %totalEnemies% goto cleared\ngoto wave',
      options: ['3 times', '4 times', '5 times', '1 time'],
      correct: 1,
      explanation: ':wave runs for current=1,2,3,4. When current becomes 5, 5 GTR 4 is true, so we jump to :cleared. That\'s 4 visits to :wave.',
    },
    {
      type: 'fill',
      prompt: 'Complete the wave counter — move to the next enemy:',
      template: '@echo off\nset current=1\n:wave\necho Fighting Minion %current%\nset /a current=___+1\nif %current% GTR 5 goto done\ngoto wave\n:done\necho Clear!',
      blank: '___',
      answer: 'current',
      hint: 'set /a current=current+1 — the variable name goes on both sides.',
    },
    {
      type: 'fix',
      prompt: 'The wave never ends — all enemies show up on the same turn. Fix it.',
      code: '@echo off\nset current=1\nset total=3\n:wave\necho Minion %current%\nif %current% GTR %total% goto done\ngoto wave\n:done\necho Done!',
      answer: '@echo off\nset current=1\nset total=3\n:wave\necho Minion %current%\nset /a current=current+1\nif %current% GTR %total% goto done\ngoto wave\n:done\necho Done!',
      bugHint: 'The current counter never increases! Add `set /a current=current+1` after displaying the minion.',
      bugType: 'missing_increment',
    },
    {
      type: 'build',
      prompt: 'Build a 5-minion wave battle.\n\nEach minion has 20 HP. Player attacks do 10 damage. After each attack check if the minion is defeated. Count defeated minions. When all 5 are gone, print "WAVE CLEARED — SECTOR SAFE!"',
      starterCode: '@echo off\ncolor 0C\ntitle MINION WAVE\nset minionCount=5\nset current=1\n:wave\nset minionHP=20\n:fight\ncls',
      minLines: 25,
      achievement: 'wave_fighter',
    },
    {
      type: 'reward',
      xp: 100,
      achievement: 'wave_fighter',
      storyUpdate: 'MINION WAVE REPELLED — LOOP ENGINE SECTOR AT 90%',
    },
  ],
};
