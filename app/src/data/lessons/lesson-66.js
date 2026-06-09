// Lesson 66 — NPC Dialogue
export default {
  id: 'world-07/lesson-66-npc-dialogue',
  title: 'NPC Dialogue',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 100,
  steps: [
    {
      type: 'learn',
      title: 'Characters That Talk',
      body: 'NPCs (non-player characters) make worlds feel alive.\n\nAn NPC dialogue system is just a function that prints lines of text — but done right, it makes your program feel like a real game.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Dialogue Function',
      body: 'Each NPC is a label. Call it to trigger their dialogue.',
      code: '@echo off\ncall :aegis\npause\nexit /b\n\n:aegis\necho [AEGIS]: Signal received.\necho [AEGIS]: Your presence in this sector is noted.\necho [AEGIS]: Proceed with caution.\nexit /b',
      output: '[AEGIS]: Signal received.\n[AEGIS]: Your presence in this sector is noted.\n[AEGIS]: Proceed with caution.',
    },
    {
      type: 'predict',
      question: 'If you have five NPCs each as their own function, and you want NPC3 to also trigger NPC1\'s greeting first, what do you do?',
      options: [
        { text: 'Add `call :npc1` at the start of the :npc3 function', correct: true, explanation: 'Functions can call other functions.' },
        { text: 'Copy NPC1\'s lines into NPC3', correct: false, explanation: 'Never copy code — call the function.' },
        { text: 'Use goto :npc1 from npc3', correct: false, explanation: 'goto would not return to npc3 after npc1 finishes.' },
        { text: 'You cannot nest function calls', correct: false, explanation: 'call nesting works fine in Batch.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\ncall :guard\npause\nexit /b\n\n:guard\necho [GUARD]: Halt! State your business.\nset /p answer=Your answer: \nif "%answer%"=="repair" echo [GUARD]: Pass.\n',
      blank: 'exit /b',
      after: '',
      answer: 'exit /b',
      hint: 'The guard function needs to return',
    },
    {
      type: 'build',
      prompt: 'Create a town with 3 NPCs:\n- :merchant (selling something, uses choice to buy/leave)\n- :guide (gives hints about the next sector)\n- :sentry (asks for a password, denies/allows entry)\n\nMain menu lets you choose which NPC to talk to.',
      minLines: 35,
      starterCode: '@echo off\n:town\ncls\necho === SECTOR OUTPOST ===\necho 1. Talk to Merchant\necho 2. Talk to Guide\necho 3. Talk to Sentry\necho 4. Leave\nchoice /c 1234\n',
    },
    {
      type: 'reward',
      xp: 100,
      storyUpdate: 'NPC interaction protocols installed. The network has inhabitants now.',
    },
  ],
};
