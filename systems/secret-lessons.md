# Secret Lessons
## Hidden Content Triggered By Exploration

---

## The Concept

Most of the course is structured: World → Lessons → Boss.

But hidden inside the course are **Secret Missions** — bonus lessons that only unlock when a student does something unexpected. They can't be found by following instructions. They require curiosity.

This teaches a critical programmer habit: **exploring the system beyond what you were told to do.**

---

## How Secrets Work

Each secret is triggered by a specific action — usually typing a command the student wasn't told to type, or building something that wasn't assigned.

When triggered, the student's terminal shows:

```
========================================
  *** SECRET MISSION DETECTED ***
========================================

  You found something the mission didn't 
  tell you about.

  That makes you an Explorer.

  MISSION UNLOCKED: [Mission Name]
  Opening in 3 seconds...
========================================
```

Then the secret lesson file opens (or instructions appear).

---

## Secret Lesson Index

### SECRET-01 — The Tree
**Trigger:** Type `tree` in the terminal at any point  
**Unlock message:** "You mapped the directory. The network sees a cartographer."  
**Achievement:** EXPLORER  
**Content:** A mini-lesson on the `tree` command — how to read directory structures, what paths mean, why file organization matters. Includes a challenge: map a folder and describe its structure in plain English.

---

### SECRET-02 — The Loop Hole
**Trigger:** Create a loop that runs more than 50 times without stopping  
**Unlock message:** "You found the edge of the Timing System. Most people never run that long."  
**Achievement:** LOOP BREAKER  
**Content:** A mini-lesson on how infinite loops crash systems, how real programs protect against them, and how to write a loop that has an intentional exit. Includes a `timeout` trick for fake progress bars.

---

### SECRET-03 — The Echo Chamber
**Trigger:** Use `echo` more than 20 times in a single program  
**Unlock message:** "You filled the output buffer. The Comm Array noticed."  
**Achievement:** LOUD  
**Content:** A challenge to build the most detailed ASCII art scene the student can — a full landscape, spaceship battle, city skyline, etc. No code concepts. Pure creative output.

---

### SECRET-04 — The Erased File
**Trigger:** Try to read a file that doesn't exist yet  
**Unlock message:** "File not found. But you knew to look. That matters."  
**Achievement:** ARCHIVIST ZERO  
**Content:** A mini-lesson on error handling — what happens when a file doesn't exist, how to check before reading, why defensive coding matters.

---

### SECRET-05 — The Color Vault
**Trigger:** Use all 16 color combinations in a single session  
**Unlock message:** "You tested every frequency in the spectrum. The Display Array is impressed."  
**Achievement:** FULL SPECTRUM  
**Content:** A challenge to build a "color demo" program that cycles through all 16 visible color combos with labels. Teaches how to turn exploration into documentation.

---

### SECRET-06 — The Oldest Game
**Trigger:** Build a game using only World 1 commands (before World 2 lessons)  
**Unlock message:** "You made something the lessons didn't tell you to. That's a different level."  
**Achievement:** MAD SCIENTIST I  
**Content:** A history note about the first computer games (pure text, no graphics, 1970s) and a challenge: build a "press any key to continue" adventure story that functions as a real game — with at least 4 screens and a sense of narrative.

---

### SECRET-07 — Commander's Log
**Trigger:** Complete every lesson in a world without using any hints  
**Unlock message:** "Zero assists. You did this alone. The Commander wants to talk to you."  
**Achievement:** SELF-SUFFICIENT  
**Content:** A special message from A.E.G.I.S. in full "Commander mode" — dropping the hint persona and speaking plainly about what real independent debugging looks like and what it means for the student's future.

---

### SECRET-08 — The Broken World
**Trigger:** Intentionally introduce a bug into a working program and run it  
**Unlock message:** "You broke something on purpose. You're thinking like a tester."  
**Achievement:** SABOTEUR  
**Content:** An introduction to **software testing** — the idea that breaking things intentionally is a professional skill. Includes a mini-challenge: write a program, then write a "broken version" with 3 deliberate bugs, then swap with a friend (or leave it for yourself) to find.

---

### SECRET-09 — The Network Ghost
**Trigger:** Type `netstat` before the Hacker Tools world (World 9)  
**Unlock message:** "You ran that before anyone showed you how. The Recon Network noticed."  
**Achievement:** EARLY RECON  
**Content:** An early sneak-peek at World 9 — what `netstat` output means, how to read it, and a preview of what the Recon Network sector looks like. Doesn't replace the full World 9 lessons; just gives a head start.

---

### SECRET-10 — The Python Ghost
**Trigger:** Write a line of Python syntax inside a .bat file  
**Unlock message:** "That's not Batch. But you already know what it is. The Bridge is visible."  
**Achievement:** BRIDGE WALKER (EARLY)  
**Content:** An early preview of World 11 — side-by-side comparison of the student's current Batch skills and their Python equivalents. A taste of what's coming.

---

## How To Implement

Each secret lesson lives in:
```
/worlds/secrets/secret-XX-name/
  trigger.md       ← what triggers this
  lesson.md        ← the content
  challenge.bat    ← optional code challenge
```

The trigger detection is a note for the platform layer — if this becomes an app, the trigger fires when the condition is met. In the current version (file-based), a student finds secrets by reading the `trigger.md` files in this folder.

Or: keep the trigger files hidden by not mentioning them anywhere in the main curriculum. Students who browse the repo find them. Students who don't, don't.

That's already the first secret.
