# Lesson 4 — Changing The Title
## World 1: Meet The Computer

**Grand Quest:** Every terminal in the network needs an ID. You're assigning callsigns to restored nodes.

---

## LEARN

Look at the top of your terminal window. It says something like:  
`C:\Users\You\Desktop\starter.bat`

That's the default title — just the file path. Boring.

You can change it to anything:

```batch
@echo off
title SECTOR 1 COMMAND TERMINAL
echo Terminal online.
pause
```

Now the title bar shows: `SECTOR 1 COMMAND TERMINAL`

This is cosmetic — it doesn't change how the program works. But it makes everything feel more real. Professional. Like actual software.

`title` takes everything after it as the new window name. No quotes needed.

---

## PREDICT

```batch
@echo off
title MY AWESOME COMPUTER
echo This terminal has a new name.
echo Look at the title bar.
pause
title CHANGED IT AGAIN
echo Did you see that?
pause
```

**Question 1:** What will the title bar say when the program starts?  
`__________________________________________`

**Question 2:** Can you change the title more than once in a program?  
`__________________________________________`

**Question 3:** What will the title say at the end?  
`__________________________________________`

---

## RUN

Run it. Watch the title bar the whole time. Notice it changes mid-program.

---

## BREAK

Two bugs this time. Find both:

```batch
@echo off
titl REPAIR STATION ALPHA
echo Repair station online.
echo Callsign assigned.
pase
```

**Bug 1:** `__________________________________________`  
**Bug 2:** `__________________________________________`  
**Hint:** One command is missing a letter. Another has a letter swapped.

---

## FIX

Open `challenge.bat`. Fix both bugs. Run it.

---

## CHALLENGE

The Lab is open:

- Give your terminal a name that sounds like a real military base or space station
- Try changing the title 3 or 4 times throughout a program — make it tell a story through the title bar alone
- Build: terminal starts as `LOADING...`, changes to `READY`, then changes to `SHUTTING DOWN`

---

## REWARD

**Achievement Unlocked: CALLSIGN ASSIGNED**  
*"Node identified. The network recognizes your terminal."*

**Grand Quest Progress:**  
Three more nodes come online with proper IDs.  
Text: `NODE CALLSIGNS CONFIRMED — NETWORK RECOGNIZES 4 STATIONS`
