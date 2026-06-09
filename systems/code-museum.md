# Code Museum
## Timeline of Everything You've Ever Built

---

## What It Is

The Code Museum is a folder that preserves every project a student completes — in order, untouched.

It's not a backup. It's a **growth record.**

When a student is six worlds in and frustrated, they open the museum, scroll back to Lesson 1, and see `echo Hello`. Then they look at what they just built — a save-slot RPG with randomized enemies — and understand how far they've actually come.

That's more motivating than any achievement badge.

---

## Structure

```
/museum/
  README.md              ← timeline overview
  lesson-01/
    hello.bat            ← their actual first program
    date_completed.txt   ← when they finished it
    notes.txt            ← optional: what they thought
  lesson-02/
  ...
  boss-01/
    dead_terminal_fixed.bat
    bug_log.txt          ← what bugs they found
  lesson-11/
  ...
  boss-02/
  ...
  (continues through all 110 lessons)
```

---

## The Timeline View

When a student runs `museum.bat`, they see:

```
========================================
  YOUR CODE MUSEUM
  Total programs built: 47
  Total lines written: ~1,240
  Time in the Corps: 6 weeks
========================================

  WORLD 1 — Power Grid            COMPLETE
    Lesson 01: Hello World
    Lesson 02: Making Computer Wait
    ...
    Boss 01:   The Dead Terminal   FIXED (5/5 bugs)

  WORLD 2 — Memory Banks          COMPLETE
    Lesson 11: What Is Memory
    ...

  WORLD 3 — Decision Engine       IN PROGRESS
    Lesson 21: True vs False       COMPLETE
    Lesson 22: IF Statements       COMPLETE
    Lesson 23: Password Checker    IN PROGRESS

========================================
  Press any key to view a project...
========================================
```

---

## Why It Works

### The Progress Illusion Problem

Most kids don't feel like they're making progress because they're always at the start of the next thing — never looking back at how far they've come.

The Museum fixes this by making the past visible.

A student who is struggling with functions in World 7 can open the museum and see:

> "I wrote this on day 1. Now look at what I'm building."

That contrast is the most powerful motivator in the course.

### The Ownership Effect

The Museum makes the code feel **owned**. It's yours. You made all of this. Nobody else has the same museum because nobody else built the exact same things in the exact same way.

Every variable name the student chose. Every story they wrote. Every ASCII art face they drew.  
It's all there.

### The "I Could Build That" Moment

In World 9, a student will be able to scroll back to World 1's Hello World and think:

> "I could build something so much better than that now."

Then they do. And that goes in the museum too.

---

## Museum Entries

Each museum entry should include (optional, student fills in):

**What I built:**  
One sentence. What does this program do?

**What was hard:**  
What part of this lesson or project was difficult?

**What I figured out:**  
How did I solve it?

**What I'd do differently:**  
If I rebuilt this today, what would I change?

This isn't graded. It's a journal. But the students who fill it in have the best debugging skills — because they're practicing reflecting on their own code.

---

## museum.bat

The museum runner is itself a project in World 8 (Automation).  
Students build the museum viewer as part of the automation lessons — their first experience with a program that manages other files.

The museum is not just a record of their work.  
It's a project they build to view their own work.  
That's the kind of meta-recursion that makes a programmer.
