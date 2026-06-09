# WORLD 4 — Loops
## Sector: Timing Systems

---

### Grand Quest Context

Logic is restored. The network can make decisions.  
But every decision is one-shot. There's no repetition. No persistence. No rhythm.

The Timing Systems control everything that repeats: scheduled tasks, animation, game ticks, countdowns, menus that refresh. Without them, the network can think but it can't sustain anything over time.

---

### What You'll Learn

- Labels: anchor points in your code
- `goto`: jumping to any point in the program
- Infinite loops and why they're useful (and dangerous)
- Game loops: the foundation of every game ever made
- Animation using `cls` and loops
- Countdown timers and loading screens

---

### Lessons

| # | Lesson | Key Command |
|---|--------|-------------|
| 31 | Labels | `:start` |
| 32 | goto | `goto start` |
| 33 | Infinite Loops | `goto` without exit |
| 34 | Game Loops | loop + input |
| 35 | Countdown Timers | `timeout` + loop |
| 36 | Animation | loop + `cls` |
| 37 | Moving Objects | text position + loop |
| 38 | Fake Loading Screens | dots + delay |
| 39 | Real-Time Menus | loop + choice |
| 40 | **BOSS BATTLE** | *The Infinite Loop Crash* |

---

### Boss Battle — The Infinite Loop Crash

A runaway process is consuming the Timing System.  
It's a loop with no exit — running forever, blocking everything else.

**8 bugs.** Mix of: `goto` pointing to wrong label, label name mismatch, loop counter not incrementing, missing exit condition.

The new challenge: runtime errors. The code compiles. It runs. It never stops.  
Understanding why requires actually reading the loop logic.

---

### Story Beat

When the Timing Systems come online, the scheduled process logs resume.  
A.E.G.I.S. finds something in the log: a process that has been running continuously for 11 days.  
It started 5 days before The Cascade.  
It's running right now.  
And it's been hiding behind an authorized process name the whole time.
