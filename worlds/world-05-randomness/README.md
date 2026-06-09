# WORLD 5 — Randomness
## Sector: Chaos Engine

---

### Grand Quest Context

The network can loop and decide — but every run is predictable.  
Same inputs, same outputs, forever. The Chaos Engine is what introduced unpredictability into the system: weather variation, random events, the element of surprise.

Without it, the simulated world the network supports is static. Boring. Dead.

Restore the Chaos Engine and the world becomes alive again.

---

### What You'll Learn

- `%random%`: the built-in random number generator
- Modulo (`%%`) to constrain ranges
- Coin flips, dice rolls, and probability
- Loot tables and drop systems
- Random encounter generation
- Procedural content (maps, enemies, events)
- A complete battle system

---

### Lessons

| # | Lesson | Key Command |
|---|--------|-------------|
| 41 | Random Numbers | `%random%` |
| 42 | Coin Flip | `%random% %% 2` |
| 43 | Dice Roller | `%random% %% 6` |
| 44 | Loot Drops | random + conditions |
| 45 | Random Encounters | random + story |
| 46 | Treasure Chests | random + inventory |
| 47 | Enemy Generator | random stats |
| 48 | Procedural Maps | random + output |
| 49 | Battle System | hp + random + loop |
| 50 | **BOSS BATTLE** | *The Corrupted Server* |

---

### Boss Battle — The Corrupted Server

The Chaos Engine is producing impossible values — loot tables that always drop nothing, enemies that deal 0 damage, chests that subtract items.

**7 bugs.** All math/range errors: modulo off-by-one, range too large, condition that never matches.  
The code runs. The game seems to work. But the numbers are wrong.

This teaches a new debugging skill: checking outputs against expectations, not just checking if the code runs.

---

### Story Beat

When the Chaos Engine comes online, the random seed initializes.  
A.E.G.I.S. runs a test sequence — and something comes back in the output that shouldn't be possible.

A message. Encoded in the entropy. Fragmented across thousands of "random" values.  
Someone put it there intentionally — knowing that only someone who understood randomness would ever see it.

The message contains a name.
