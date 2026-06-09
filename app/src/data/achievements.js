export const ACHIEVEMENTS = [
  { id: 'first_signal',    title: 'FIRST SIGNAL',     desc: 'Ran your first program.',                    icon: '📡', world: 1 },
  { id: 'time_keeper',     title: 'TIME KEEPER',       desc: 'Used pause for the first time.',             icon: '⏸️', world: 1 },
  { id: 'clean_slate',     title: 'CLEAN SLATE',       desc: 'Used cls for the first time.',               icon: '🧹', world: 1 },
  { id: 'callsign',        title: 'CALLSIGN ASSIGNED', desc: 'Named your terminal.',                       icon: '🏷️', world: 1 },
  { id: 'color_matrix',    title: 'COLOR MATRIX',      desc: 'Changed the terminal color.',                icon: '🎨', world: 1 },
  { id: 'pixel_artist',    title: 'PIXEL ARTIST',      desc: 'Built ASCII art.',                           icon: '🖼️', world: 1 },
  { id: 'storyteller',     title: 'STORYTELLER',       desc: 'Made the computer tell a story.',            icon: '📖', world: 1 },
  { id: 'repairman',       title: 'REPAIRMAN',         desc: 'Fixed your first bug.',                      icon: '🔧', world: 1 },
  { id: 'power_restored',  title: 'POWER RESTORED',    desc: 'Completed the World 1 boss battle.',         icon: '⚡', world: 1 },
  { id: 'memory_init',     title: 'MEMORY INITIALIZED', desc: 'Used set for the first time.',             icon: '💾', world: 2 },
  { id: 'reader',          title: 'READER',            desc: 'Displayed a variable.',                      icon: '👁️', world: 2 },
  { id: 'character_born',  title: 'CHARACTER BORN',    desc: 'Completed the character creator.',           icon: '🧙', world: 2 },
  { id: 'binary_thinker',  title: 'BINARY THINKER',    desc: 'Wrote your first IF statement.',             icon: '🧠', world: 3 },
  { id: 'gatekeeper',      title: 'GATEKEEPER',        desc: 'Built a password checker.',                  icon: '🔐', world: 3 },
  { id: 'infinite_power',  title: 'INFINITE POWER',    desc: 'Created an infinite loop.',                  icon: '∞',  world: 4 },
  { id: 'animator',        title: 'ANIMATOR',          desc: 'Made something move with cls + loop.',       icon: '🎬', world: 4 },
  { id: 'chaos_agent',     title: 'CHAOS AGENT',       desc: 'Used %random% for the first time.',          icon: '🎲', world: 5 },
  { id: 'file_born',       title: 'FILE BORN',         desc: 'Created your first file.',                   icon: '📄', world: 6 },
  { id: 'first_call',      title: 'FIRST CALL',        desc: 'Used call for the first time.',              icon: '📞', world: 7 },
  { id: 'engineer',        title: 'ENGINEER',          desc: 'Wrote 3 reusable functions.',                icon: '⚙️', world: 7 },
  { id: 'launcher',        title: 'LAUNCHER',          desc: 'Opened a program with start.',               icon: '🚀', world: 8 },
  { id: 'first_ping',      title: 'FIRST PING',        desc: 'Ran ping.',                                  icon: '📶', world: 9 },
  { id: 'hacker',          title: 'HACKER',            desc: 'Built a hacking console interface.',         icon: '💻', world: 9 },
  { id: 'game_dev',        title: 'GAME DEVELOPER',    desc: 'Built a complete game.',                     icon: '🎮', world: 10 },
  { id: 'centurion',       title: 'CENTURION',         desc: 'Completed all 110 lessons.',                 icon: '🏆', world: 11 },
  // Secret achievements
  { id: 'detective',       title: 'DETECTIVE',         desc: 'Fixed a bug with zero hints.',               icon: '🔍', secret: true },
  { id: 'mad_scientist',   title: 'MAD SCIENTIST',     desc: 'Built something not in any lesson.',         icon: '🧪', secret: true },
  { id: 'explorer',        title: 'EXPLORER',          desc: 'Discovered a secret.',                       icon: '🗺️', secret: true },
  { id: '1000_lines',      title: 'ENGINEER (1000)',   desc: 'Wrote 1000 lines of Batch code.',            icon: '📏', secret: true },
];

export function getAchievement(id) {
  return ACHIEVEMENTS.find(a => a.id === id);
}
