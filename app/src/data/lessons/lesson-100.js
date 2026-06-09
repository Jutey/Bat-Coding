// Lesson 100 — BOSS BATTLE: Terminal Prime
export default {
  id: 'world-10/lesson-100-boss-battle-terminal-prime',
  title: 'BOSS BATTLE — Terminal Prime',
  world: 'SECTOR 10 — DEBUG DUNGEON',
  xp: 500,
  steps: [
    {
      type: 'learn',
      title: 'THE FINAL BOSS: TERMINAL PRIME ITSELF',
      body: 'You have reached Lesson 100.\n\nTerminal Prime has been corrupted by the same darkness that took down all 9 sectors.\n\nTo truly restore it, you must write the best code you have ever written.',
      code: null,
    },
    {
      type: 'learn',
      title: 'The Ultimate Challenge',
      body: 'This is not just a program. This is proof that you can create.\n\nYou started with `echo Hello`.\n\nNow build something that would impress an engineer.',
      code: null,
    },
    {
      type: 'predict',
      question: 'What made the biggest difference in how you write code now vs. lesson 1?',
      options: [
        { text: 'Breaking problems into functions and thinking before typing', correct: true, explanation: 'That is computational thinking — the real skill behind all coding.' },
        { text: 'Memorizing all the commands', correct: false, explanation: 'Commands are just vocabulary. Thinking is the skill.' },
        { text: 'Typing faster', correct: false, explanation: 'Speed matters much less than clarity.' },
        { text: 'Getting lucky with fewer bugs', correct: false, explanation: 'You debug now — luck has nothing to do with it.' },
      ],
    },
    {
      type: 'build',
      prompt: 'THE FINAL BOSS BUILD: TERMINAL PRIME OPERATIONAL SYSTEM\n\nBuild a complete, polished Batch application. Your choice of theme.\n\nJudged on:\n★ Does it work correctly?\n★ Is it well-structured (functions, labels, no spaghetti)?\n★ Does it handle edge cases (missing files, wrong input)?\n★ Is the output clean and readable?\n★ Does it demonstrate multiple concepts?\n★ Does it do something genuinely useful or cool?\n\nRequirements:\n- Minimum 100 lines\n- At least 10 functions\n- File I/O (save + load)\n- User input\n- Random element\n- Loop with proper exit\n- Error checking\n- Debug mode\n- Professional formatting\n\nThis is your magnum opus. Make it count.',
      minLines: 100,
      starterCode: '@echo off\nset DEBUG=0\nset APP_VERSION=1.0\n',
    },
    {
      type: 'reward',
      xp: 500,
      achievement: 'terminal_prime_restored',
      storyUpdate: 'TERMINAL PRIME: FULLY OPERATIONAL.\n\nAll 10 sectors restored.\nAll systems online.\nThe Digital Repair Corps mission: COMPLETE.\n\nYou did not just learn Batch.\n\nYou learned to think like an engineer.\n\nWelcome, TERMINAL PRIME.',
    },
  ],
};
