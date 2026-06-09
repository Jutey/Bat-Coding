// Lesson 57 — Player Profiles
export default {
  id: 'world-06/lesson-57-player-profiles',
  title: 'Player Profiles',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Profiles: Named Save Files',
      body: 'What if multiple players want their own save? Give each profile its own file, named after the player.\n\nIn Batch: `echo data > %name%.txt` creates a file like `cadet.txt`.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Dynamic Filenames',
      body: 'Variables can be part of filenames — use them inside the redirect operator.',
      code: '@echo off\nset /p name=Your name: \necho PLAYER=%name% > %name%.txt\necho LEVEL=1 >> %name%.txt\necho Profile created: %name%.txt\npause',
      output: 'Your name: Nova\nProfile created: nova.txt',
    },
    {
      type: 'predict',
      question: 'If `name=nova`, what file does `echo data > %name%.txt` create?',
      options: [
        { text: 'nova.txt', correct: true, explanation: 'The variable expands inside the filename.' },
        { text: '%name%.txt', correct: false, explanation: 'The % signs expand the variable, not print it.' },
        { text: 'data.txt', correct: false, explanation: 'data is the content, not the filename.' },
        { text: 'name.txt', correct: false, explanation: 'Without % signs, name would be literal.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset /p callsign=Callsign: \necho HP=100 > ',
      blank: '%callsign%.sav',
      after: '\necho Profile saved!\npause',
      answer: '%callsign%.sav',
      hint: 'Use the variable inside the filename with % signs',
    },
    {
      type: 'build',
      prompt: 'Build a profile system:\n1. Ask for name\n2. Ask for class (warrior/mage/scout)\n3. Based on class, set different starting stats (HP, attack, speed)\n4. Save all to [name].profile\n5. Display the profile',
      minLines: 14,
      starterCode: '@echo off\nset /p name=Name: \nset /p class=Class (warrior/mage/scout): \n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Individual operator profiles registered. Identity verified.',
    },
  ],
};
