# WORLD 6 — Files
## Sector: Storage Vaults

---

### Grand Quest Context

Everything built so far disappears when the program closes.  
Variables reset. Health goes back to 100. The player's name is forgotten.

The Storage Vaults make memory permanent.  
Files survive restarts. Data persists. Progress is saved.

This is the lesson kids call mind-blowing. Because suddenly:  
The computer remembers you.

---

### What You'll Learn

- Creating files from a Batch script
- Reading files back
- Saving game state to a file
- High score systems
- Player profiles with multiple stats
- Multiple save slots
- A notes app and a journal app
- The basics of structured data

---

### Lessons

| # | Lesson | Key Command |
|---|--------|-------------|
| 51 | Creating Files | `echo > file.txt` |
| 52 | Reading Files | `type file.txt` |
| 53 | Saving Progress | write vars to file |
| 54 | High Scores | append + display |
| 55 | Player Profiles | multi-var file write |
| 56 | Save Slots | numbered saves |
| 57 | Notes App | input + write |
| 58 | Journal App | date + append |
| 59 | Database Basics | structured file format |
| 60 | **BOSS BATTLE** | *The Corrupted Archive* |

---

### Boss Battle — The Corrupted Archive

The archive is writing to wrong files, reading from wrong places, and appending when it should overwrite.  
A high-score board is broken. A save file shows the wrong player. A journal entry is being written to someone else's file.

**8 bugs.** File operation errors: wrong filename, append vs overwrite, reading before writing.

New challenge: bugs that affect data integrity — the code runs fine, but the data is wrong.

---

### Story Beat

When the Storage Vaults open, 40 years of archived data floods back online.  
A.E.G.I.S. begins indexing.

In an archive from 8 years ago: a system log showing a test run of something called "CASCADE PROTOCOL."  
Listed as a security drill. Authorized by someone at the highest level.  
The drill was supposed to last 48 hours.

The current outage: 72 hours and counting.
