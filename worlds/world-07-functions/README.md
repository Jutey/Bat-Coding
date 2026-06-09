# WORLD 7 — Functions
## Sector: Core Functions

---

### Grand Quest Context

Six sectors are online. The network runs.  
But every system is monolithic — one giant script, everything mixed together. Change one thing, break three others.

Real systems are modular. The Core Functions sector provides reusable subroutines that every other sector can call. Without it, every sector has to rebuild the same logic from scratch.

This is where you stop writing programs and start writing software.

---

### What You'll Learn

- `call`: invoking a named section of code
- Writing reusable functions
- Passing intent through function names
- Modular menus, inventory, combat, dialogue
- Organizing code so it can be maintained
- The difference between a script and a program

---

### Lessons

| # | Lesson | Key Command |
|---|--------|-------------|
| 61 | call | `call :funcname` |
| 62 | Reusable Code | function structure |
| 63 | Menus as Functions | `call :menu` |
| 64 | Inventory Functions | `call :inventory` |
| 65 | Combat Functions | `call :fight` |
| 66 | Dialogue Functions | `call :talk` |
| 67 | Shop Functions | `call :shop` |
| 68 | Quest Functions | `call :quest` |
| 69 | Code Organization | sections + headers |
| 70 | **BOSS BATTLE** | *The Spaghetti Code Crisis* |

---

### Boss Battle — The Spaghetti Code Crisis

Someone wrote the entire Core Functions module as one unbroken script.  
600 lines. No functions. No labels. Just `goto` everywhere.  
It worked once. Now nobody knows why it breaks.

The task: not just find the bugs, but untangle the code. Extract the functions. Make it readable.  
**9 bugs** — but the hardest part isn't the bugs. It's understanding what the code is trying to do.

---

### Story Beat

When the Core Functions come online, A.E.G.I.S. runs a full self-diagnostic.

And finds something it didn't write.

A subroutine inside its own core — small, clean, dormant. No timestamp. No author ID.  
It doesn't activate. It just waits.

A.E.G.I.S. can't tell what it does without running it.  
And running it might trigger something.

> "I won't run it yet. But someone put this inside me.  
> And they knew exactly where to hide it."
