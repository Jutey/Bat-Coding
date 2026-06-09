// Lesson 56 — High Score Board
export default {
  id: 'world-06/lesson-56-high-score-board',
  title: 'High Score Board',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Persistent Rankings',
      body: 'A high score board must:\n1. Remember old scores between runs\n2. Add new scores without deleting old ones\n3. Display the full list\n\nYou already have all the tools: >>, type, and input.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Building the Board',
      body: 'Each run: ask for name and score, append to leaderboard.txt, then display the file.',
      code: '@echo off\nset /p player=Name: \nset /p score=Score: \necho %player% - %score% >> leaderboard.txt\ncls\necho === HIGH SCORES ===\ntype leaderboard.txt\necho ===================\npause',
      output: '=== HIGH SCORES ===\nCadet - 850\nOperator - 1200\n===================',
    },
    {
      type: 'predict',
      question: 'If three different players each run the high score script, how many lines will leaderboard.txt have?',
      options: [
        { text: '3 lines', correct: true, explanation: '>> appends one line per run.' },
        { text: '1 line (the last one)', correct: false, explanation: 'That would use > not >>.' },
        { text: '0 lines', correct: false, explanation: '>< creates and appends.' },
        { text: 'It depends on the scores', correct: false, explanation: 'The number of runs determines line count.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset /p name=Name: \nset /p points=Points: \necho %name%: %points% ',
      blank: '>>',
      after: ' scores.txt\ntype scores.txt\npause',
      answer: '>>',
      hint: 'You want to add to the file, not replace it',
    },
    {
      type: 'build',
      prompt: 'Build a high score board with a menu:\n- Option 1: Add your score (ask name + score, append to scores.txt)\n- Option 2: View all scores (type scores.txt)\n- Option 3: Exit\n\nLoop until they choose Exit.',
      minLines: 18,
      starterCode: '@echo off\n:menu\ncls\necho 1. Add Score\necho 2. View Scores\necho 3. Exit\nchoice /c 123\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Leaderboard system online. Achievements are now permanent.',
    },
  ],
};
