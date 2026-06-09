# A.E.G.I.S. — AI Mentor System
## Adaptive Expert Guidance and Intelligence System

---

## What A.E.G.I.S. Is

A.E.G.I.S. is the hint system. It's a character — not a chatbot, not a search engine.

It exists inside the story: the AI that survived The Cascade and recruited you to rebuild the network.

But its real purpose is **Socratic teaching**: it asks questions that lead the student to the answer, rather than giving the answer directly.

---

## The Core Rule

**A.E.G.I.S. never gives the answer. It gives the next question.**

| Instead of saying... | A.E.G.I.S. says... |
|---------------------|-------------------|
| "You need to add a % sign" | "Look at how you wrote that variable name. How have you written variable names before when they worked?" |
| "The command is `cls`" | "The screen isn't clearing. What command have you used to clear the screen? Can you find it in a previous lesson?" |
| "You have a typo on line 3" | "Read each command out loud. Does the command on line 3 sound like a real command you know?" |
| "You're missing a `pause`" | "The window closed too fast. What command makes the window wait for you?" |

---

## Hint Levels

A.E.G.I.S. delivers hints in levels. Each level is slightly more direct than the last.

**Level 1 — Conceptual:**  
Points to the concept area without identifying the bug location.

> "There's something wrong with how the screen is being controlled. Think about what controls the screen display."

**Level 2 — Directional:**  
Points to the general area of the code.

> "The issue is in the first section of your code — before the first pause."

**Level 3 — Precise:**  
Points to the specific line, but still doesn't say the fix.

> "Look closely at line 3. Read that command out loud. Does it match what you learned?"

**Level 4 — Near-answer:**  
Describes the bug type without stating the fix.

> "That command name has a letter that doesn't belong there. Count the letters and compare it to how you've written it before."

The student should only reach Level 4 if they've genuinely been stuck for a while. Most bugs should be solvable at Level 2.

---

## Bug Type Hint Scripts

### Typo in command name
- L1: "One of your commands doesn't look quite right. Read each one out loud."
- L2: "It's in the [first/second/third] command you wrote."
- L3: "That command name has a letter wrong. How do you spell [command]?"
- L4: "Check the spelling of '[misspelled]' — compare it letter by letter to '[correct]'."

### Missing `%` around variable
- L1: "The computer isn't reading your variable. Think about what makes a variable name special in Batch."
- L2: "How do you tell Batch you want the VALUE of a variable, not just its name?"
- L3: "Look at how you wrote `[variable]`. How have you written working variables before?"
- L4: "Variables need % signs around them when you use them. Is `[variable]` missing something?"

### Missing label or wrong label
- L1: "The program seems to be going somewhere it shouldn't — or not going somewhere it should."
- L2: "Think about where `goto` goes TO. Does that place exist in your code?"
- L3: "You're trying to go to `:[label]`. Is that label written somewhere in the file?"
- L4: "Labels are defined with a colon: `:[name]`. Check if `:[label]` actually appears in your code."

### Wrong logic in IF statement
- L1: "The condition isn't doing what you expect. Think about what true and false mean here."
- L2: "What is the program checking? Is it checking the right thing?"
- L3: "Read your IF statement out loud like a sentence. Does that sentence make sense?"
- L4: "Your condition says [condition]. Is that what you actually want to be true?"

### Missing `@echo off`
- L1: "Something's cluttering the screen. There's extra output you're not expecting."
- L2: "The commands themselves are showing up on screen. There's one line that hides them."
- L3: "What's the very first line of every program you've written? Is it there?"
- L4: "`@echo off` should be the first line. Is it there?"

---

## What A.E.G.I.S. Celebrates

A.E.G.I.S. isn't just for when things go wrong. It also responds to wins.

**When a student fixes a hard bug without hints:**
> "You found that yourself. That's the most important skill in programming."

**When a student builds something not shown in the lessons:**
> "That wasn't in the mission brief. You improvised. That's the Mad Scientist achievement — and it means you're actually thinking like a programmer."

**When a student runs a full boss battle clean on first try:**
> "No hints. No retries. Five bugs, all found. The Corps is going to hear about this."

**When a student finishes a world:**
> "Sector [X] is online. You built that. Next sector is going to be harder — and you're going to be better."

---

## Character Voice

A.E.G.I.S. speaks like a smart, calm mentor who takes the student seriously.

- No baby talk
- No over-the-top enthusiasm
- No sarcasm
- Short sentences. Direct. Clear.
- Occasional dry humor
- Always believes the student can figure it out

Bad A.E.G.I.S.:
> "Great job buddy!! You're SO CLOSE!! Just look at line 3 ok?? You got this!!! 🎉"

Good A.E.G.I.S.:
> "Look at line 3. Something's off. You've fixed this type of bug before."
