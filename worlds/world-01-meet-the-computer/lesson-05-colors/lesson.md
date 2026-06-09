# Lesson 5 — Colors
## World 1: Meet The Computer

**Grand Quest:** The display system is running — but everything is the same dull grey. The color matrix needs to be restored.

---

## LEARN

The terminal can display 16 colors. You pick the background color and the text color.

```batch
@echo off
color 0A
echo The matrix is alive.
pause
```

The `color` command takes two characters:
- First character = background color
- Second character = text color

```
0 = Black        8 = Dark Grey
1 = Dark Blue    9 = Blue
2 = Dark Green   A = Green
3 = Dark Cyan    B = Cyan
4 = Dark Red     C = Red
5 = Dark Purple  D = Purple
6 = Dark Yellow  E = Yellow
7 = Grey         F = White
```

So `color 0A` means: **black background, green text** — the classic hacker look.

`color 4F` means: **dark red background, white text** — emergency mode.

`color 1E` means: **dark blue background, yellow text** — sci-fi terminal.

Try them all.

---

## PREDICT

```batch
@echo off
color 0A
echo SECTOR 1 — GREEN ONLINE
pause
color 4F
echo SECTOR 1 — EMERGENCY MODE
pause
color 1F
echo SECTOR 1 — SECURE MODE
pause
```

**Question 1:** What color is the text at the start?  
`__________________________________________`

**Question 2:** What does `4F` look like?  
`__________________________________________`

**Question 3:** Does the color change stay, or reset between lines?  
`__________________________________________`

---

## RUN

Run it. Cycle through all three color modes.

Now experiment: type `color` with no arguments. What happens?

---

## BREAK

Find the bug:

```batch
@echo off
colour 0A
echo Color matrix restored.
echo All display nodes active.
pause
```

**What's wrong?** `__________________________________________`  
**Hint:** American spelling vs British spelling. The command uses one specific spelling.

---

## FIX

Open `challenge.bat`. Fix it. Run it.

---

## CHALLENGE

The Lab is open:

- Build a "mood terminal" that cycles through 4 different color schemes with a pause between each
- Design your own terminal "theme" — what colors would YOUR personal terminal use?
- Build an "alert system":
  - Normal mode: `color 0A` (green)
  - Warning: `color 0E` (yellow)
  - Emergency: `color 4F` (red on dark red)

---

## SECRET HINT

Type exactly this in the terminal window (not in a .bat file):

```
color
```

by itself with no arguments. Something interesting happens.

---

## REWARD

**Achievement Unlocked: COLOR MATRIX RESTORED**  
*"The display system is showing colors again. Sector 1 looks alive."*

**Grand Quest Progress:**  
The Power Grid's display array lights up in full color for the first time.  
Text: `COLOR MATRIX ONLINE — VISUAL SPECTRUM RESTORED`
