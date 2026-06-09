# Lesson 7 — The Computer Talks
## World 1: Meet The Computer

**Grand Quest:** The communication array is back online. Time to send the first real message — not just a signal, but actual words.

---

## LEARN

You know how to print a line. Now you're going to make the computer tell a full story.

The trick is using `echo` for every line, `echo.` for blank lines between paragraphs, and `cls` + `pause` to move between "screens" — like pages in a book.

```batch
@echo off
color 0B
title INCOMING TRANSMISSION

cls
echo ================================
echo   DIGITAL REPAIR CORPS
echo   TRANSMISSION #001
echo ================================
echo.
echo  Cadet.
echo.
echo  The network went dark 72 hours ago.
echo  We don't know why.
echo  We need someone on the inside.
echo.
echo  That someone is you.
pause

cls
echo ================================
echo   YOUR MISSION
echo ================================
echo.
echo  Restore the Power Grid.
echo  Sector by sector.
echo  Node by node.
echo.
echo  You have everything you need.
echo  Your keyboard. Your brain.
echo.
echo  Good luck, Cadet.
echo.
echo  -- COMMANDER A.E.G.I.S.
echo ================================
pause
```

This is real software structure: title bar, sections, spacing, multi-screen flow.  
Every menu, every game, every app you've ever used does something like this.

---

## PREDICT

Before running the starter code above:

**Question 1:** How many times will the screen clear?  
`__________`

**Question 2:** What's in the title bar the whole time?  
`__________________________________________`

**Question 3:** Is there a blank line between "The network went dark 72 hours ago." and "We don't know why."?  
`__________________________________________`

---

## RUN

Type it and run it. Take your time reading each screen.

---

## BREAK

Three bugs. All different types. Find them:

```batch
@echo off
colour 0B
title MESSAGE FROM HQ

cls
echo ==========================
echo   HEADQUARTERS MESSAGE
echo ==========================
echo.
echo  Sector 3 is under attack.
echo  Deploying backup systems.
echo  All cadets report to stations.
echo.
pase

cls
echo ==========================
echo  Mission briefing complete
echo ==========================
paus
```

**Bug 1:** `__________________________________________`  
**Bug 2:** `__________________________________________`  
**Bug 3:** `__________________________________________`

---

## FIX

Open `challenge.bat`. Three bugs. Fix all three. Run it clean.

---

## CHALLENGE

The Lab is open. Write a transmission that:
- Has at least 2 screens
- Uses a title bar with a real name
- Uses proper spacing (blank lines between paragraphs)
- Ends with a sign-off (like a letter)

Ideas:
- A message from the future
- A mission briefing for a space crew
- A warning from a scientist

---

## REWARD

**Achievement Unlocked: FIRST TRANSMISSION**  
*"The communication array broadcast its first coherent message. Somewhere across the network, it was received."*

**Grand Quest Progress:**  
Communication nodes across Sector 1 light up.  
Text: `COMM ARRAY ONLINE — TRANSMISSION SENT AND CONFIRMED`
