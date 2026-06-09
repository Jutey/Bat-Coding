// Secret commands typed anywhere in the app unlock hidden content
export const SECRET_COMMANDS = [
  {
    id: 'hacker_mode',
    trigger: 'hacktheplanet',
    title: 'HACKER MODE UNLOCKED',
    desc: 'The terminal has gone full black hat. Theme switched.',
    effect: 'theme:hacker',
    rarity: 'rare',
  },
  {
    id: 'retro_mode',
    trigger: 'dosismyboss',
    title: 'RETRO DOS MODE',
    desc: 'You found the time machine.',
    effect: 'theme:retro',
    rarity: 'uncommon',
  },
  {
    id: 'the_grid',
    trigger: 'thegridrememberse',
    title: 'THE GRID REMEMBERS',
    desc: 'You found the message from Sector 9.',
    effect: 'lore:sector9',
    rarity: 'legendary',
  },
  {
    id: 'aegis_true',
    trigger: 'whoareaegis',
    title: 'A.E.G.I.S. SPEAKS',
    desc: 'The AI dropped its mission briefing voice for a moment.',
    effect: 'dialogue:aegis_real',
    rarity: 'epic',
  },
  {
    id: 'pet_evolution',
    trigger: 'evolvepet',
    title: 'PET EVOLVED',
    desc: 'Your companion reached its next stage early.',
    effect: 'pet:evolve',
    rarity: 'rare',
  },
  {
    id: 'xp_surge',
    trigger: 'powersurge',
    title: 'XP SURGE',
    desc: 'Bonus XP injected into the system.',
    effect: 'xp:100',
    rarity: 'uncommon',
  },
  {
    id: 'cyberpunk',
    trigger: 'neonnight',
    title: 'CYBERPUNK THEME',
    desc: 'The city never sleeps.',
    effect: 'theme:cyberpunk',
    rarity: 'rare',
  },
];

export const EASTER_EGGS = [
  { trigger: 'konami', sequence: ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'], reward: 'xp:500', title: 'KONAMI CODE' },
];

export function findSecret(typed) {
  const lower = typed.toLowerCase().replace(/\s/g, '');
  return SECRET_COMMANDS.find(s => lower.includes(s.trigger));
}
