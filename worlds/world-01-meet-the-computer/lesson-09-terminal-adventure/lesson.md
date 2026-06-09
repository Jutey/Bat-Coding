# Lesson 9 — Terminal Adventure
## World 1: Meet The Computer

**Grand Quest:** The final Power Grid node needs a simulation test. You're going to run a sector scenario — a story that plays out across the terminal.

---

## LEARN

You now know everything you need to tell a story on a screen:
- `echo` — say things
- `echo.` — blank line
- `pause` — wait
- `cls` — new screen
- `color` — set the mood
- `title` — name the window

Combine them and you have a **text adventure** — the oldest form of video game.

The first video games were entirely text. No graphics. Just words describing a world, and you typing what to do. Games like Zork and Adventure launched millions of people into programming.

You're making one now.

```batch
@echo off
color 0A
title SECTOR 9 — DARK ZONE

cls
echo ============================================
echo   SECTOR 9 EXPLORATION LOG
echo   Day 1 — 0600 hours
echo ============================================
echo.
echo  You step out of the transport pod.
echo  Sector 9 is dark. The air smells like burnt wire.
echo.
echo  Your scanner shows three paths:
echo    NORTH: Collapsed tunnel
echo    EAST:  Faint power signal
echo    WEST:  Unknown
echo.
pause

cls
echo  You head EAST toward the power signal.
echo.
echo  The corridor is narrow.
echo  Pipes run along the walls, cold to the touch.
echo.
pause

cls
echo  You find it.
echo.
echo  A single node — blinking green.
echo  Someone has been here recently.
echo  But who?
echo.
echo  On the floor: a message scratched into the metal:
echo.
echo     "THE GRID REMEMBERS"
echo.
pause

cls
echo ============================================
echo   END OF LOG — DAY 1
echo   Node Status: ACTIVE
echo   Next step: Find the source of the signal
echo ============================================
pause
```

This is all the commands from this world, combined into something that feels like a real experience.

---

## PREDICT

Read through the starter code:

**Question 1:** How many separate "screens" are there?  
`__________`

**Question 2:** What color is the terminal?  
`__________________________________________`

**Question 3:** What mystery does the story introduce?  
`__________________________________________`

---

## RUN

Run it. Read it slowly. This is your first game.

---

## BREAK

The adventure crashes in a weird place. Find the bug:

```batch
@echo off
color 0A
title THE DARK ZONE

cls
echo You enter the abandoned server room.
echo Equipment everywhere. Dust. Silence.
echo.
pause

cls
echo You find a terminal in the corner.
echo The screen flickers on.
echo.
echo It shows one word:
echo.
echo    HELP
echo.
paus

cls
echo You spin around. Nobody there.
echo.
echo Just you. And the blinking word.
pause
```

**What's wrong?** `__________________________________________`

---

## FIX

Open `challenge.bat`. Fix it.

---

## CHALLENGE

Write your own terminal adventure. Requirements:
- At least 3 screens
- A mystery or problem introduced early
- At least one dramatic moment (use pause carefully before the reveal)
- An ending (resolved or cliffhanger — your choice)

No limits on what the story is about.

---

## REWARD

**Achievement Unlocked: STORYTELLER**  
*"You created a world inside a black window. That's what every programmer does."*

**Grand Quest Progress:**  
The final exploration log confirms Sector 1 is mapped.  
Text: `SECTOR 1 MAPPED — ALL NODES LOCATED — BOSS BATTLE UNLOCKED`

---

## What's Next

**LESSON 10 — BOSS BATTLE: THE DEAD TERMINAL**  
The Power Grid's master terminal is broken. Five bugs. Repair it to bring Sector 1 fully online.
