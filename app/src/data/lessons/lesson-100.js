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
      body: 'You have reached Lesson 100.\n\nTerminal Prime has been corrupted by the same darkness that took down all 9 sectors.\n\nIts core operating script is still running — barely. Labels jump to nowhere. Functions never return. A single broken comparison is looping the whole system.\n\nTo restore it, you must do what real engineers do: read broken code, find what is actually wrong, and fix it without breaking anything else.',
      code: null,
    },
    {
      type: 'learn',
      title: 'What Makes Code "Real"',
      body: 'Toy code runs once and stops. Real code has to survive contact with the real world.\n\nReal code:\n- Returns control properly from every function (exit /b, not just falling off the end)\n- Uses the right exit code so other programs know if it succeeded or failed\n- Checks its comparisons carefully — one wrong operator can loop forever or never run at all\n\n`exit` shuts down the ENTIRE terminal session — even if you are inside a function.\n`exit /b` returns from the current function/script only, optionally with an exit code: `exit /b 0` (success) or `exit /b 1` (failure).\n\nThis is the difference between a script that politely returns control, and one that slams the whole terminal shut.',
      code: null,
    },
    {
      type: 'predict',
      question: 'A batch script has a function called with `call :check_status`. Inside that function, the last line is `exit`. What happens when `:check_status` finishes?',
      options: [
        { text: 'The entire terminal/script closes immediately, even though main may not be done', correct: true, explanation: 'exit (without /b) terminates the whole cmd.exe session — it does not "return" to the caller like exit /b does.' },
        { text: 'Control returns to the line after `call :check_status`', correct: false, explanation: 'That is what `exit /b` does. Plain `exit` ends everything.' },
        { text: 'Nothing — exit is ignored inside functions', correct: false, explanation: 'exit is never ignored. It always terminates the session unless /b is used.' },
        { text: 'It restarts the script from the top', correct: false, explanation: 'exit never restarts anything — it terminates.' },
      ],
    },
    {
      type: 'fix',
      title: 'REPAIR TERMINAL PRIME\'S CORE SCRIPT',
      prompt: 'Terminal Prime\'s core boot script has THREE bugs that are crashing the system. Find and fix all three:\n\n1. `:check_power` never returns to the caller — it falls straight into `:load_modules` instead of using `exit /b`.\n2. The status comparison uses a single `=` instead of `==`, so the `if` never matches and the wrong branch always runs.\n3. The final `exit` shuts down the whole terminal instead of returning a success code with `exit /b 0` — so Terminal Prime "dies" the moment it finishes booting.\n\nFix all three bugs without changing anything else.',
      code: '@echo off\nset STATUS=ONLINE\ncall :check_power\ncall :load_modules\necho Terminal Prime boot sequence complete.\nexit\n\n:check_power\necho Checking power core...\n\n:load_modules\necho Loading modules...\nif %STATUS% = ONLINE (\n  echo Power core stable.\n) else (\n  echo WARNING: Power core unstable!\n)\ngoto :eof',
      answer: '@echo off\nset STATUS=ONLINE\ncall :check_power\ncall :load_modules\necho Terminal Prime boot sequence complete.\nexit /b 0\n\n:check_power\necho Checking power core...\nexit /b 0\n\n:load_modules\necho Loading modules...\nif %STATUS% == ONLINE (\n  echo Power core stable.\n) else (\n  echo WARNING: Power core unstable!\n)\ngoto :eof',
      hint: 'Three things to look for: a function that never returns, a comparison with the wrong operator, and an exit that kills more than it should.',
      hint2: 'Add "exit /b 0" at the end of :check_power so it returns to the caller. Change "if %STATUS% = ONLINE" to "if %STATUS% == ONLINE". Change the final "exit" to "exit /b 0".',
      explanation: 'A missing exit /b causes a function to "fall through" into the next label — code that was never meant to run together gets glued together. A single `=` instead of `==` in an if-comparison is one of the most common real bugs in batch scripting. And a bare `exit` inside the main script body shuts down the whole terminal, not just the script.',
    },
    {
      type: 'build',
      prompt: 'THE FINAL BOSS BUILD: TERMINAL PRIME OPERATIONAL SYSTEM\n\nBuild a complete, polished Batch application. Your choice of theme.\n\nJudged on:\n★ Does it work correctly?\n★ Is it well-structured (functions, labels, no spaghetti)?\n★ Does every function return properly with exit /b?\n★ Does it handle edge cases (missing files, wrong input)?\n★ Is the output clean and readable?\n★ Does it demonstrate multiple concepts?\n★ Does it do something genuinely useful or cool?\n\nRequirements:\n- Minimum 80 lines\n- At least 8 functions, each ending with exit /b\n- File I/O (save + load)\n- User input\n- Random element\n- Loop with proper exit\n- Error checking\n- A final `exit /b 0` at the end of the main script\n- Professional formatting\n\nThis is your magnum opus. Make it count.',
      minLines: 80,
      starterCode: '@echo off\nset DEBUG=0\nset APP_VERSION=1.0\n',
    },
    {
      type: 'reward',
      xp: 500,
      achievement: 'terminal_prime_restored',
      storyUpdate: 'TERMINAL PRIME: FULLY OPERATIONAL.\n\nAll 10 sectors restored.\nAll systems online.\nThe Digital Repair Corps mission: COMPLETE.\n\nYou did not just learn Batch.\n\nYou learned to read broken code, find the real bug, and fix it without breaking everything else.\n\nThat skill transfers to EVERY language.\n\nA new signal is being detected — a portal is opening.\n\nNEXT TRANSMISSION: SECTOR 11 — THE PYTHON PORTAL.\n\nGraduate, Engineer. Your next mission awaits.',
    },
  ],
};
