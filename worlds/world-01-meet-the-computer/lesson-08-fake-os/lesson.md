# Lesson 8 — Fake Operating System
## World 1: Meet The Computer

**Grand Quest:** The Power Grid needs a control interface. You're building the first OS fragment — a menu system that lets operators choose what to run.

---

## LEARN

Every operating system has a menu. A way to pick what you want to do.

In Batch, a menu looks like this:

```batch
@echo off
color 0A
title SECTOR 1 CONTROL PANEL

cls
echo ================================
echo   SECTOR 1 CONTROL PANEL v1.0
echo ================================
echo.
echo   [1] View Status Report
echo   [2] Display Grid Map
echo   [3] Emergency Alert
echo   [4] Shutdown
echo.
echo ================================
echo   SELECT OPTION (type number):
echo ================================
echo.
echo   Coming in World 3 - Logic!
echo   (Right now, we just show the menu.)
pause
```

Right now we're just displaying the menu. The buttons don't work yet — that's World 3.

But here's the insight: **most of what makes a program feel professional is the display layer.** The menus, the borders, the spacing, the color scheme. That's all echo, color, cls, and title.

You can make something look like real software with just these 4 tools.

---

## PREDICT

What makes a menu look professional vs amateur?

Look at these two:

**Menu A:**
```
1 status
2 map
3 quit
```

**Menu B:**
```
================================
  CONTROL PANEL
================================

  [1]  View Status
  [2]  View Map
  [3]  Quit

================================
```

**Question:** What's different? List 3 things:  
1. `__________________________________________`  
2. `__________________________________________`  
3. `__________________________________________`

---

## RUN

Run the starter. Spend 5 minutes redesigning it — different colors, different options, different name.  
The goal: make it look like it could be a real program.

---

## BREAK

The menu is broken in a subtle way. Find the bug:

```batch
@echo off
color 0A
title POWER GRID CONTROL

cls
echo ==============================
echo   POWER GRID CONTROL v2.0
echo ==============================
echo.
echo   [1] Node Status
echo   [2] Restart Grid
echo   [3] Emergency Shutdown
echo   [4 Exit
echo.
echo ==============================
pause
```

**What's wrong?** `__________________________________________`  
**Hint:** Look at the option labels carefully. One of them is different from the others.

---

## FIX

Open `challenge.bat`. Fix it.

---

## CHALLENGE

Build a menu for one of these:
- A spaceship dashboard
- A game main menu (Play / Options / Quit)
- A secret agent toolkit
- A school computer lab kiosk

Make it look real. Use colors. Use a proper title. Use borders.

---

## REVERSE ENGINEERING MISSION

You get this code. Figure out what kind of menu it is **just from reading the output text**:

```batch
@echo off
color 4F
title CLASSIFIED
cls
echo =============================
echo   AUTHORIZATION REQUIRED
echo =============================
echo.
echo   [1]  Enter Passcode
echo   [2]  Guest Access
echo   [3]  Emergency Unlock
echo   [?]  ???
echo.
echo =============================
pause
```

**What kind of system is this pretending to be?**  
`__________________________________________`

**What do you think [?] does?**  
`__________________________________________`

---

## REWARD

**Achievement Unlocked: SYSTEM ARCHITECT**  
*"You built the first control interface. Operators can see the system now."*

**Grand Quest Progress:**  
The Sector 1 control panel boots for the first time.  
Text: `CONTROL INTERFACE ONLINE — AWAITING OPERATOR INPUT`
