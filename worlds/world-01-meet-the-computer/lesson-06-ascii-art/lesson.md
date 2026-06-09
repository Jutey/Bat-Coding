# Lesson 6 — ASCII Art
## World 1: Meet The Computer

**Grand Quest:** The visual display system is online — but it's blank. You need to rebuild the interface graphics from scratch, using only characters.

---

## LEARN

Before computers had pictures, programmers made art out of text characters.  
Letters, symbols, spaces — arranged carefully to look like images.

This is called **ASCII art**.

Here's a simple rocket ship:

```batch
@echo off
color 0A
echo.
echo        /\
echo       /  \
echo      / ** \
echo     /______\
echo        ||
echo        ||
echo      ~~~~~~
echo.
echo  ROCKET READY FOR LAUNCH
pause
```

`echo.` (echo with a dot, no space) prints a blank line. Use it for spacing.

Every character counts. Spaces are part of the art. If you shift something left or right by one space, the whole picture breaks.

This is your first lesson in **precision** — a skill every programmer needs.

---

## PREDICT

```batch
@echo off
color 0B
echo  _____
echo /     \
echo | O O |
echo |  ^  |
echo | \_/ |
echo \_____/
pause
```

**Question:** What will this look like?  
(Draw it in the space below or describe it)

`__________________________________________`  
`__________________________________________`

---

## RUN

Run it. Does it match your prediction?

Now try changing a single space in the face. What breaks?

---

## BREAK

This robot logo has a bug — one line is wrong and the picture looks broken. Find which line:

```batch
@echo off
color 0A
echo  ___________
echo |           |
echo |  [o] [o]  |
echo |     >     |
echo  \  -----  /
echo   \______/
echo  ___________
pause
```

**What's wrong?** `__________________________________________`  
**Hint:** The robot should have a head shape that closes at the top and bottom. Look at the first and last lines carefully.

---

## FIX

Open `challenge.bat`. The ASCII art is almost right — but one line is broken. Fix it.

---

## CHALLENGE

The Lab is open. Build at least one of these with ASCII art:

- A sword: `---===>`
- A shield: `( O )`
- A house
- A skull
- Your name in big block letters
- A spaceship

No objectives. No grading. Just make something cool.

---

## REVERSE ENGINEERING MISSION

You're given this code. Without running it, figure out what the picture is:

```batch
@echo off
echo    *
echo   ***
echo  *****
echo *******
echo    |
echo    |
pause
```

**Your answer:** `__________________________________________`

Then run it and check.

---

## REWARD

**Achievement Unlocked: PIXEL ARTIST**  
*"You rebuilt the visual interface from raw characters. The display board is alive."*

**Grand Quest Progress:**  
The main display panel shows the Digital Repair Corps logo for the first time.  
Text: `VISUAL INTERFACE RESTORED — IDENTITY CONFIRMED`
