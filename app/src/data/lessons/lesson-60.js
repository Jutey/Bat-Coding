// Lesson 60 — BOSS BATTLE: The Corrupted Archive
export default {
  id: 'world-06/lesson-60-boss-battle-corrupted-archive',
  title: 'BOSS BATTLE — The Corrupted Archive',
  world: 'SECTOR 6 — FILE FORTRESS',
  xp: 200,
  steps: [
    {
      type: 'learn',
      title: 'SECTOR 6 BOSS: THE CORRUPTED ARCHIVE',
      body: 'ALERT: The File Fortress central archive is corrupted.\n\nSomeone ran a broken script that keeps overwriting its own data. The header gets written with >>, entries get written with >, the wrong filename is being read, and the export runs before the archive even exists.\n\nPhase 1: Repair the broken archive script.\nPhase 2: Build a clean version from scratch.',
      code: null,
    },
    {
      type: 'learn',
      title: 'Boss Requirements',
      body: 'Build a full ARCHIVE SYSTEM with:\n1. Main menu (loop)\n2. Create new archive (ask title, description, save to archive.dat)\n3. Add entry (ask content, append to archive.dat)\n4. View archive (type archive.dat)\n5. Clear archive (overwrite with header only)\n6. Export report (copy archive content + summary to report.txt)\n7. Exit\n\nUse cls, formatted headers, choice menu.',
      code: null,
    },
    {
      type: 'predict',
      question: 'To "clear" an archive (reset to header only) without deleting the file, what should you use?',
      options: [
        { text: '> to overwrite with just the header line', correct: true, explanation: '> replaces all content with whatever you echo into it.' },
        { text: '>> to add an empty line', correct: false, explanation: '>> would not remove existing content.' },
        { text: 'del to delete the file', correct: false, explanation: 'del removes the file entirely.' },
        { text: 'type to display it', correct: false, explanation: 'type only reads, it does not write.' },
      ],
    },
    {
      type: 'fix',
      prompt: 'This archive script has four bugs. Find and fix them all: wrong operator on line 2, wrong operator on line 3, typo in filename, and export before archive is ready.',
      code: '@echo off\necho ARCHIVE START >> archive.dat\necho Entry one > archive.dat\ntype archives.dat\necho Exporting...\ncopy archive.dat report.txt\npause',
      answer: '@echo off\necho ARCHIVE START > archive.dat\necho Entry one >> archive.dat\ntype archive.dat\necho Exporting...\ncopy archive.dat report.txt\npause',
      hint: 'Check the operators on lines 2 and 3. One should start fresh, the other should append. Also check the filename on line 4.',
      hint2: 'Line 2: use > (fresh start). Line 3: use >> (append). Line 4: archives.dat has a typo — it should be archive.dat.',
    },
    {
      type: 'build',
      prompt: 'BUILD THE CORRUPTED ARCHIVE RECOVERY SYSTEM.\n\nMust include:\n- Menu loop with 6 options + exit\n- Create: saves title and description to archive.dat using >\n- Add Entry: appends content to archive.dat using >>\n- View: displays archive.dat with header\n- Clear: resets archive.dat to just a header line using >\n- Export: writes all content + "EXPORT COMPLETE" to report.txt\n- All menus use choice, all screens use cls\n- Minimum 35 lines',
      minLines: 35,
      starterCode: '@echo off\n:menu\ncls\necho ============================\necho   ARCHIVE CONTROL SYSTEM\necho ============================\necho 1. Create Archive\necho 2. Add Entry\necho 3. View Archive\necho 4. Clear Archive\necho 5. Export Report\necho 6. Exit\nchoice /c 123456\n',
    },
    {
      type: 'reward',
      xp: 200,
      achievement: 'world6_boss',
      storyUpdate: 'SECTOR 6 RESTORED. The File Fortress stands. Data integrity: 100%. Archive corruption eliminated.',
    },
  ],
};
