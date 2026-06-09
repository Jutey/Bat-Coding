# Lesson 1 — Hello World
## World 1: Meet The Computer

**Grand Quest:** You're transmitting your first signal into the dead network. Somewhere out there, a receiver is waiting.

---

## LEARN

The command prompt is a text window where you type instructions and the computer obeys.

The first instruction every programmer ever learns is how to make the computer say something.

The command is `echo`. It tells the computer: *repeat this back to me.*

```batch
echo Hello
```

That's it. One word. The computer prints `Hello` and nothing else.

Now try:
```batch
echo Hello, my name is Alex
```

The computer prints exactly what you type after `echo`.

One important thing: at the top of every Batch program, we write:
```batch
@echo off
```

This hides the commands themselves so you only see the output — like a clean screen instead of messy instructions everywhere. You'll always start your programs with this line.

---

## PREDICT

Before you run anything, read this code and write down what you think will happen:

```batch
@echo off
echo Hello
echo My computer is working
echo Transmission complete
```

Write your prediction:  
`__________________________________________`  
`__________________________________________`

---

## RUN

Open Notepad. Type the code above exactly. Save it as `hello.bat`.  
Double-click it. Watch what happens.

Were you right?

---

## BREAK

This code has a bug. Find it:

```batch
@echo off
ech Hello
echo My computer is working
echo Transmission complete
```

**What's wrong?** `__________________________________________`

**Type:** Typo in command name  
**Hint:** Look at the very first real command. Compare it to the working version.

---

## FIX

Open `challenge.bat` in this folder. Fix the bug. Run it. Make it work.

---

## CHALLENGE

The Lab is open. No rules. Try these if you want:

- Make the computer say your name
- Make it say 5 things in a row
- Make it tell a short joke (setup on one line, punchline on the next)
- Can you make it output a blank line? Try: `echo.`

---

## REWARD

**Achievement Unlocked: FIRST SIGNAL**  
*"You sent your first transmission into the dead network. Something out there heard it."*

**Grand Quest Progress:**  
The Power Grid flickers. A single node comes online.  
Text: `SIGNAL DETECTED — SOURCE: CADET TERMINAL — STATUS: ACTIVE`

---

## What's Next

Lesson 2: Making the computer wait — because sometimes you need the screen to stay open long enough to read it.
