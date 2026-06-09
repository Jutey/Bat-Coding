# Lesson 2 — Making The Computer Wait
## World 1: Meet The Computer

**Grand Quest:** The signal went out — but it vanished before anyone could read it. You need to hold the transmission open.

---

## LEARN

Run your program from Lesson 1 right now. What happens?

It flashes and disappears.

That's because the program runs, finishes, and closes the window. If you're running it by double-clicking, you don't have time to read it.

The fix is `pause`.

```batch
@echo off
echo Hello
pause
```

`pause` stops the program and shows:  
`Press any key to continue . . .`

The program waits right there until you press a key. Then it closes.

This is the first example of **controlling time** in a program. Every game, every app, every animation needs to control when things happen. `pause` is your first timing tool.

---

## PREDICT

```batch
@echo off
echo Transmission incoming...
pause
echo Signal received.
pause
echo All systems nominal.
pause
```

**Question 1:** How many times will the program pause?  
`__________`

**Question 2:** What will you see on screen the very first time it pauses?  
`__________________________________________`

**Question 3:** What happens after you press a key the third time?  
`__________________________________________`

---

## RUN

Type the code above. Save as `wait.bat`. Run it.  
Step through it slowly. Notice how the program is under your control — it moves when YOU decide.

---

## BREAK

Find the bug:

```batch
@echo off
echo Grid node detected
pase
echo Connecting to power grid...
pause
echo Connection established.
pause
```

**What's wrong?** `__________________________________________`  
**Hint:** Read every word carefully. One of them has a letter missing.

---

## FIX

Open `challenge.bat`. Fix it. Run it all the way through.

---

## CHALLENGE

The Lab is open:

- Add `pause` between every line of a story you tell
- Try writing a "dramatic reveal" — build up with pauses, then the final line
- Example:
  ```batch
  echo The enemy is near...
  pause
  echo Very near...
  pause
  echo IT'S RIGHT BEHIND YOU
  pause
  ```

---

## REWARD

**Achievement Unlocked: TIME KEEPER**  
*"You learned to hold time still. The transmission stayed open long enough to be read."*

**Grand Quest Progress:**  
The first Power Grid node stays stable.  
Text: `NODE 1 LOCKED — SIGNAL HOLDING — AWAITING NEXT COMMAND`
