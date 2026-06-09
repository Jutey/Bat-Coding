# Reverse Engineering Missions
## Read → Predict → Modify

---

## Why This Matters

Writing code is one skill. Reading code is a different skill — and arguably more important.

In real programming:
- You inherit codebases written by other people
- You debug programs you didn't write
- You use libraries and frameworks where reading the code is the documentation
- You learn new techniques by reading other people's solutions

Most coding courses never teach reading. They only teach writing.  
This system fixes that.

---

## The Mission Format

Each mission gives the student existing code and asks three questions:

**1. PREDICT**  
What will this program do when you run it? Describe the output before running.

**2. RUN**  
Run it. Was your prediction right? What surprised you?

**3. MODIFY**  
Change the program so it does [new thing]. Don't rewrite it — modify what's already there.

---

## Mission Index

### RE-01 — The Variable Vault
```batch
@echo off
set treasure=100
set name=Explorer
echo Hello, %name%.
echo Your treasure: %treasure% gold.
pause
```

**Predict:** What does this print?  
**Modify 1:** Change it so the name is your own name  
**Modify 2:** Change it so treasure starts at 500  
**Modify 3:** Add a third variable: `location=Dark Cave` and display it

---

### RE-02 — The Counter
```batch
@echo off
set count=1
echo Count: %count%
set count=2
echo Count: %count%
set count=3
echo Count: %count%
pause
```

**Predict:** What does this print?  
**Modify 1:** Make it count to 5  
**Modify 2:** Make it count down from 5 to 1  
**Modify 3:** What's a better way to write a counter? (Hint: World 4)

---

### RE-03 — The Gate
```batch
@echo off
set password=dragon
set /p input=Enter password: 
if "%input%"=="%password%" echo ACCESS GRANTED
if not "%input%"=="%password%" echo ACCESS DENIED
pause
```

**Predict:** What happens if someone types "dragon"? What if they type "123"?  
**Modify 1:** Change the password to something else  
**Modify 2:** Add a second correct password (hint: you'll need two `if` lines)  
**Modify 3:** Make it say who is granted access: `echo ACCESS GRANTED — Welcome, Agent.`

---

### RE-04 — The Loop Mystery
```batch
@echo off
:top
cls
echo Loading...
timeout /t 1 /nobreak >nul
goto top
```

**Predict:** What does this do? Does it ever stop?  
**Predict first:** Before running — is this safe to run?  
**Run it** (close the window with X to stop it)  
**Modify:** Add a counter so it stops after 5 loops

---

### RE-05 — The Battle Log
```batch
@echo off
set hero_hp=100
set enemy_hp=80
echo BATTLE START
echo.
echo Hero HP:  %hero_hp%
echo Enemy HP: %enemy_hp%
echo.
set hero_hp=85
set enemy_hp=65
echo ROUND 1 COMPLETE
echo Hero HP:  %hero_hp%
echo Enemy HP: %enemy_hp%
pause
```

**Predict:** What does this show?  
**Modify 1:** Add Round 2 where hero takes 20 damage and enemy takes 30  
**Modify 2:** Add a check: if enemy HP reaches 0 or below, print "ENEMY DEFEATED"  
**Modify 3:** What would happen if hero HP went to 0?

---

### RE-06 — The Unknown Function
```batch
@echo off
call :greet
call :greet
call :greet
pause
goto :eof

:greet
echo Hello from the function!
goto :eof
```

**Predict:** How many times does "Hello from the function!" print?  
**Predict:** What does `goto :eof` do?  
**Modify 1:** Make the function print something different  
**Modify 2:** Add a second function called `:farewell` that prints "Goodbye!" — call it after the three greets

---

### RE-07 — The Broken Pattern
A slightly broken program is given. Read it. Find what's wrong. Then answer:

```batch
@echo off
set score=0
echo Your score: %scor%
echo.
echo Calculating bonus...
set bonus=50
set score=150
echo Final score: %score%
pause
```

**Question 1:** Something is wrong on line 3. What is it?  
**Question 2:** What will actually print on line 3?  
**Question 3:** Fix it without running it first. Then run to confirm.

---

## Using RE Missions In The Curriculum

Reverse Engineering Missions appear:
- As optional extras inside lessons (marked with the 🔬 icon)
- As required sections in World 11 (the transition world)
- As bonus material inside some boss battle prep sections

The missions get harder across worlds:
- **Worlds 1-3:** Read and predict simple programs
- **Worlds 4-6:** Modify programs to add features
- **Worlds 7-9:** Identify bugs by reading alone (before running)
- **World 10-11:** Full reverse engineering — understand unfamiliar code and extend it

By World 11, a student should be able to look at a Python program they've never seen and describe roughly what it does — because they've been reading and predicting code for 10 worlds.
