# Boss Battles
## Debugging Challenges Disguised As Story Events

---

## What Boss Battles Are

Boss Battles are not quizzes. There are no multiple choice questions. No fill-in-the-blank.

A Boss Battle is a **broken program** with a story explanation for why it's broken.  
The student's job is to find the bugs, fix them, and run the program clean.

Every boss is themed around the world it ends. Every boss introduces at least one new bug type the student hasn't seen before.

---

## Boss Battle Structure

Each boss battle has:
1. **Mission Brief** — story context explaining what's broken and why it matters
2. **The Broken File** — a `.bat` file with N bugs (N = world number, roughly)
3. **Bug Log Sheet** — blank table for the student to document what they find
4. **Success Screen** — what the program should display when running correctly
5. **Scoring** — partial credit for finding most bugs, full achievement for finding all

---

## Boss Battle Index

### BOSS 1 — The Dead Terminal (World 1)
**Theme:** The master terminal for Sector 1 is broken  
**Bug Count:** 5  
**Bug Types:** typo in command, transposed letters, missing letter, wrong spelling, missing final letter  
**New Type Introduced:** multiple bugs in one file  
**File:** `worlds/world-01-meet-the-computer/lesson-10-boss-battle/dead_terminal.bat`

---

### BOSS 2 — The Amnesia Virus (World 2)
**Theme:** A virus corrupted the memory system — variables aren't storing or displaying correctly  
**Bug Count:** 6  
**Bug Types:** missing `%` on variable use, wrong variable name, `set` without equals sign, `echo` printing variable name instead of value, missing `set /p` format  
**New Type Introduced:** variable reference bugs (`%name` vs `%name%`)

---

### BOSS 3 — The Logic Bomb (World 3)
**Theme:** A bomb is hidden in the decision engine — wrong logic lets unauthorized access through  
**Bug Count:** 7  
**Bug Types:** `if` condition backwards, wrong comparison operator, missing quotes around string, wrong variable in condition, `else` without matching `if`  
**New Type Introduced:** logic errors (code runs but does the wrong thing)

---

### BOSS 4 — The Infinite Loop Crash (World 4)
**Theme:** A loop with no exit condition is consuming all resources  
**Bug Count:** 8  
**Bug Types:** `goto` pointing to wrong label, missing label, label name mismatch, loop counter not incrementing, no exit condition  
**New Type Introduced:** runtime bugs (code runs, loops forever, crashes)

---

### BOSS 5 — The Corrupted Server (World 5)
**Theme:** The randomness engine is producing impossible values — loot drops are broken  
**Bug Count:** 7  
**Bug Types:** modulo off-by-one, random range too large, condition never matches, variable set inside loop but used outside  
**New Type Introduced:** math/range errors in random calculations

---

### BOSS 6 — The Corrupted Archive (World 6)
**Theme:** The archive system is writing to wrong files and reading from the wrong places  
**Bug Count:** 8  
**Bug Types:** wrong filename, append vs overwrite mix-up, reading before writing, file path with spaces not quoted, variable not saved to file  
**New Type Introduced:** file operation sequence errors

---

### BOSS 7 — The Spaghetti Code Crisis (World 7)
**Theme:** Someone wrote the entire system as one giant script — no functions, everything tangled  
**Bug Count:** 9  
**Bug Types:** `call` pointing to non-existent label, function that never returns, missing `goto :eof`, variable scope collision between functions  
**New Type Introduced:** structural/architectural bugs

---

### BOSS 8 — The Data Storm (World 8)
**Theme:** An automation script is moving the wrong files to the wrong places  
**Bug Count:** 8  
**Bug Types:** source and destination swapped, `xcopy` flags wrong, `mkdir` before existence check, file extension wrong in `move` command  
**New Type Introduced:** real-world consequence bugs (these would actually move your files wrong)

---

### BOSS 9 — The Infiltrator (World 9)
**Theme:** An unauthorized process is running on the network — find it, identify it, kill it  
**Bug Count:** 9  
**Bug Types:** wrong process name in `taskkill`, ping target wrong, netstat output misread, missing `/f` force flag  
**New Type Introduced:** system command flag errors

---

### BOSS 10 — The Final Cascade (World 10)
**Theme:** The Master Control system has a chain reaction of bugs across all systems  
**Bug Count:** 10  
**Bug Types:** one from each previous world — the full review  
**New Type Introduced:** multi-system debugging (tracking bugs across subsystems)  
**Special Rule:** No hints available. No A.E.G.I.S. This one is solo.

---

## Bug Type Reference

| Bug Type | Description | First Appears |
|----------|-------------|---------------|
| Typo | Letter wrong/missing in command | Boss 1 |
| Variable reference | Missing `%` around variable | Boss 2 |
| Logic error | Code runs but does wrong thing | Boss 3 |
| Runtime error | Code runs, loops forever | Boss 4 |
| Math error | Range/modulo calculation wrong | Boss 5 |
| Sequence error | Operations in wrong order | Boss 6 |
| Structural error | Architecture fundamentally broken | Boss 7 |
| Flag error | Right command, wrong flags | Boss 9 |
| Multi-system | Bug in one place breaks another | Boss 10 |

---

## Scoring Philosophy

Partial completion is valid and should be acknowledged.

Finding 4/5 bugs means:
- You're a good debugger who didn't quite finish
- The sector comes online but one node is still dark (story)
- You can retry the boss with no penalty

Full completion means:
- Sector fully restored (story)
- Full achievement unlocked
- A.E.G.I.S. acknowledgment

Zero means:
- Try again — the bugs aren't going anywhere

No time limit. No penalty for retrying. Debugging takes as long as it takes.
