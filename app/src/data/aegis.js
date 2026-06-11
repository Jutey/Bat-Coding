// A.E.G.I.S. hint lines — never give the answer, only the next question

export const AEGIS_GREETINGS = [
  "Cadet. What do you need?",
  "I'm here. What's the problem?",
  "Systems nominal. How can I assist?",
  "Talk to me. What's not working?",
];

export const AEGIS_HINTS = {
  typo: [
    "One of your commands doesn't look right. Read each word out loud.",
    "It's a spelling issue. Compare each command to ones that worked before.",
    "Find the command that looks slightly different from how you've written it before.",
    "Check the spelling letter by letter. One character is wrong or missing.",
  ],
  missing_percent: [
    "The computer isn't reading your variable. Think about what makes a variable special in Batch.",
    "You're printing the variable name instead of its value. How do you tell Batch you want the VALUE?",
    "Look at how you wrote that variable name. How have working variables looked before?",
    "Variables need % signs around them when you use them. Is something missing around that name?",
  ],
  wrong_label: [
    "The program is going somewhere unexpected. Think about where goto leads.",
    "You're jumping to a label. Does that label actually exist in your code?",
    "Labels are defined with a colon — :name. Is the label you're jumping to written somewhere?",
    "Check: does the name after goto exactly match a :label somewhere in the file?",
  ],
  logic_error: [
    "The code runs — but does something wrong. That's a logic error. Read the IF statement out loud.",
    "What is the program checking? Is it checking the right thing?",
    "Read your condition as a sentence. 'If X equals Y...' — is that what you actually want?",
    "Logic errors are the hardest bugs. The code isn't broken — your assumption is. What should be true?",
  ],
  general: [
    "Something's off. Read through the code top to bottom. What stands out?",
    "Run it. Watch exactly where it fails. That tells you which line to look at.",
    "Compare this to a version that worked. What's different?",
    "You've seen this type of bug before. Think back to when something similar happened.",
  ],
};

export const AEGIS_CELEBRATIONS = [
  "You found that yourself. That's the most important skill in programming.",
  "Sector restored. Good work, Cadet.",
  "The network noticed that. Keep going.",
  "Zero hints. That's what I like to see.",
  "That wasn't in the mission brief — you improvised. That's the Mad Scientist mindset.",
];

export const AEGIS_WORLD_INTROS = {
  'world-01': "The Power Grid is dark. Every terminal, every screen — offline. Your mission starts here. Make the computer talk.",
  'world-02': "Power's back. But the network remembers nothing. Every session starts from zero. We need to fix that. Teach the computer to remember.",
  'world-03': "Memory is online. But the network can't make decisions. It follows one path no matter what. Time to install judgment.",
  'world-04': "The network can decide — but it's still one-shot. No loops. No persistence. The Timing Systems need to come back online.",
  'world-05': "Everything's predictable. Same inputs, same outputs, forever. The Chaos Engine adds the unexpected. Random events. Loot. Encounters. Install it.",
  'world-06': "Everything we've built disappears when the program closes. The Storage Vaults make memory permanent. This is where the network starts to feel real.",
  'world-07': "Six sectors online. But every system is one giant script. Tangled. Fragile. Time to build the Core Functions — modular, reusable, maintainable.",
  'world-08': "The network processes run — but everything needs a human to start it. The Automation Grid makes it self-managing.",
  'world-09': "Eight sectors online. But who's watching? The Recon Network gives us eyes. And Cadet — what we're about to see will answer a lot of questions.",
  'world-10': "All sectors online. All tools available. Master Control is corrupted — and only you can fix it. Welcome to the Debug Dungeon.",
  'world-11': "The network is restored. But this isn't the end. It's a bridge. Everything you built in Batch — it all exists in Python too.",
};

export function getRandomGreeting() {
  return AEGIS_GREETINGS[Math.floor(Math.random() * AEGIS_GREETINGS.length)];
}

export function getRandomCelebration() {
  return AEGIS_CELEBRATIONS[Math.floor(Math.random() * AEGIS_CELEBRATIONS.length)];
}

export function getHint(type = 'general', level = 0) {
  const hints = AEGIS_HINTS[type] || AEGIS_HINTS.general;
  return hints[Math.min(level, hints.length - 1)];
}
