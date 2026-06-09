# BOSS BATTLE — The Dead Terminal
## World 1: Meet The Computer

**This is not a lesson. This is a repair job.**

---

## SITUATION REPORT

The Power Grid's master terminal has been found.  
It's the central node — if this one comes back online, the entire Sector 1 grid activates.

But it's broken.

The original programmer left in a hurry. The code has **5 bugs**.  
They're not all the same type. Some are typos. Some are wrong commands. Some are missing pieces.

Your job: find all 5. Fix all 5. Run the terminal clean.

**No hints this time. You know enough.**

---

## THE BROKEN TERMINAL

Open `dead_terminal.bat`.

This is what it's supposed to do when working correctly:
1. Set terminal color to green-on-black
2. Set the title to `POWER GRID — MASTER TERMINAL`
3. Clear the screen
4. Show a header with `MASTER TERMINAL` and the version number `v3.7`
5. Show a status line: `POWER GRID: OFFLINE`
6. Pause
7. Clear the screen
8. Show a "REBOOTING..." message with a sequence of dots
9. Pause
10. Clear the screen
11. Show a success screen with `POWER GRID: ONLINE` and a sector map
12. Final pause

**Find the 5 bugs. Fix them. Make it run clean start to finish.**

---

## SCORING

| Bugs Found | Result |
|-----------|--------|
| 5/5 | SECTOR 1 RESTORED — Full achievement |
| 4/5 | Grid partially online — one node still dark |
| 3/5 | Unstable — grid keeps failing |
| 1-2/5 | Terminal rejected — try again |

---

## BUG LOG

When you find a bug, write it here before you fix it:

| # | Line Number | What Was Wrong | What You Changed It To |
|---|------------|----------------|----------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

---

## AFTER YOU FIX IT

Run the fixed terminal.  
If it runs clean — no errors, no crashes, looks exactly right — you've done it.

---

## REWARD

**Achievement Unlocked: REPAIRMAN**  
*"You fixed what was broken. That's the most important skill in programming."*

**Achievement Unlocked: POWER RESTORED**  
*"Sector 1 is online. The grid is alive. The Digital Repair Corps has its first victory."*

---

## GRAND QUEST — SECTOR 1 COMPLETE

```
SECTOR 1 STATUS REPORT
========================
Power Grid:      ONLINE
Display Nodes:   ONLINE
Comm Array:      ONLINE
Control Panel:   ONLINE
Master Terminal: ONLINE

SECTOR 1 — FULLY OPERATIONAL

Next Objective: Memory Banks
Sector 2 detected at grid coordinates 7-7-7
```

---

## LOOKING AHEAD

You finished World 1 with:
- `echo` — make the computer say things
- `pause` — hold time
- `cls` — clean the screen
- `title` — name the window
- `color` — set the colors

**World 2 is where real programming begins.**  
You're about to give the computer memory.
