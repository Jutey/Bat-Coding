# Lesson 3 — Clearing The Screen
## World 1: Meet The Computer

**Grand Quest:** The display nodes are filling with corrupted data. You need to wipe them clean before the next transmission.

---

## LEARN

Right now your programs show everything stacked on top of each other.  
Every `echo` adds another line. After a while, it gets messy.

Real terminals — and real programs — clear the screen when they need a clean slate.

The command is `cls` (short for **cl**ear **s**creen):

```batch
@echo off
echo This text appears first
pause
cls
echo Now the screen is clean
pause
```

Run this. Watch what happens when you press a key after the first pause.  
The screen wipes completely. The old text is gone. Fresh start.

`cls` is more powerful than it looks. Games use it to create animation. Menus use it to refresh. Loading screens use it to fake progress. It's one of those tiny commands that unlocks a lot of tricks.

---

## PREDICT

```batch
@echo off
echo CORRUPTED DATA: #####@@@!!!!
echo CORRUPTED DATA: %%%$$$^^^&&&
echo CORRUPTED DATA: ~~~!!!???///
pause
cls
echo Display nodes cleared.
echo System ready.
pause
```

**Question 1:** Before you press any key, what do you see?  
`__________________________________________`

**Question 2:** After you press a key, what happens to the corrupted data?  
`__________________________________________`

**Question 3:** Why do we put `pause` before `cls`?  
`__________________________________________`

---

## RUN

Type it. Run it. Did it match your prediction?

Now try removing the first `pause`. What happens?

---

## BREAK

Find the bug:

```batch
@echo off
echo Loading sector data...
pause
csl
echo Sector loaded.
pause
```

**What's wrong?** `__________________________________________`  
**Hint:** The clear screen command has its letters in the wrong order.

---

## FIX

Open `challenge.bat`. Fix it. Run it.

---

## CHALLENGE

The Lab is open. Try these:

- Build a "two-screen story" — first screen has one scene, press a key, clear, second scene
- Try: what if you put `cls` at the very top before any `echo`? What does that do?
- Build a fake "system scan":
  ```
  Screen 1: "Scanning sector..."
  Press key →
  Screen 2 (cleared): "Scan complete. 0 threats found."
  ```

---

## REVERSE ENGINEERING MISSION

You're given this code. Answer the questions **before** running it:

```batch
@echo off
echo LINE A
echo LINE B
cls
echo LINE C
pause
```

1. How many lines will you see when the program finishes?
2. Will you ever see LINE A and LINE B?
3. Is this code broken, or does it work fine?

Run it and check your answers.

---

## REWARD

**Achievement Unlocked: CLEAN SLATE**  
*"You wiped the corrupted display data from three nodes. The screens are clear."*

**Grand Quest Progress:**  
The display system flickers back to life across Sector 1.  
Text: `DISPLAY NODES CLEARED — 7 NODES REMAINING`
