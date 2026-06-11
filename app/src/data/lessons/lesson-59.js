// Lesson 59 — Database Simulation
export default {
  id: 'world-06/lesson-59-database-sim',
  title: 'Database Simulation',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 120,
  steps: [
    {
      type: 'learn',
      title: 'Flat File Databases',
      body: 'Real databases are complex. But the concept is simple: store structured records you can read back later.\n\nA text file with one record per line is a flat file database. Companies ran major systems on these for decades.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Structured Records',
      body: 'Write each record in a consistent format so you can read it reliably.',
      code: '@echo off\nset /p id=ID: \nset /p item=Item: \nset /p qty=Quantity: \necho %id%|%item%|%qty% >> inventory.db\necho Record added.\ntype inventory.db\npause',
      output: '001|Iron Sword|5\n002|Health Potion|12\n003|Magic Staff|1',
    },
    {
      type: 'predict',
      question: 'Why use `|` as a separator between fields?',
      options: [
        { text: 'It rarely appears in normal text, so it is safe to use as a delimiter', correct: true, explanation: 'Commas or spaces might appear in item names. | is unusual.' },
        { text: 'Batch requires |', correct: false, explanation: 'Any character can be a delimiter.' },
        { text: 'It makes the file smaller', correct: false, explanation: 'Each | is one character like any other.' },
        { text: 'It is the official database format', correct: false, explanation: 'There is no official Batch DB format.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset /p name=Name: \nset /p power=Power: \necho %name%',
      blank: '|',
      after: '%power% >> units.db\npause',
      answer: '|',
      hint: 'Use a pipe character to separate the two fields',
    },
    {
      type: 'fix',
      prompt: 'This fake database uses three different formats for the same type of record. Fix all three lines to use consistent KEY=VALUE format.',
      code: '@echo off\necho name Nova >> players.db\necho Level: 5 >> players.db\necho gold=120 >> players.db\necho Record added.\npause',
      answer: '@echo off\necho NAME=Nova >> players.db\necho LEVEL=5 >> players.db\necho GOLD=120 >> players.db\necho Record added.\npause',
      hint: 'All three lines should use the same format. Pick KEY=VALUE and apply it to all three.',
      hint2: 'Change "name Nova" to "NAME=Nova" and "Level: 5" to "LEVEL=5" to match the consistent format.',
    },
    {
      type: 'build',
      prompt: 'Build an inventory database system:\n- Menu: Add Item / View All / Exit\n- Add Item: ask for name, quantity, type — save as pipe-delimited record to items.db\n- View All: display items.db with a header row\n- Loop until Exit',
      minLines: 20,
      starterCode: '@echo off\n:menu\ncls\necho INVENTORY SYSTEM\necho 1. Add Item\necho 2. View All\necho 3. Exit\nchoice /c 123\n',
    },
    {
      type: 'reward',
      xp: 120,
      storyUpdate: 'Database protocols restored. Structured records are now storable and retrievable.',
    },
  ],
};
