# WORLD 9 — Hacker Tools
## Sector: Recon Network

---

### Grand Quest Context

Eight sectors online. The network runs. The automation runs. The data flows.  
But who's watching?

The Recon Network is the eyes of the system — network scanning, process monitoring, threat detection. Without it, things can be running on the network and nobody knows.

With it: you can see everything.

And what you're about to see will answer every question that's been building since World 2.

---

### What You'll Learn

- `ping`: test if a host is reachable
- `ipconfig`: read your own network configuration
- `tree`: visualize directory structures
- `netstat`: see active network connections
- `tasklist`: see every process running on the computer
- `taskkill`: terminate a process
- How to combine these into a system scanner
- How to build a "hacking console" interface

---

### Lessons

| # | Lesson | Key Command |
|---|--------|-------------|
| 81 | Ping | `ping 8.8.8.8` |
| 82 | IP Config | `ipconfig` |
| 83 | Tree | `tree` |
| 84 | Netstat | `netstat` |
| 85 | Tasklist | `tasklist` |
| 86 | Process Killer | `taskkill /f /im` |
| 87 | System Scanner | combined script |
| 88 | Fake Hacking Console | themed interface |
| 89 | Mission Terminal | story + real commands |
| 90 | **BOSS BATTLE** | *The Infiltrator* |

---

### Boss Battle — The Infiltrator

An unauthorized process is running on the Recon Network.  
It's masquerading as a system process.  
You need to find it, identify it, and terminate it.

**9 bugs.** Wrong process names, incorrect `taskkill` flags, ping targets wrong, netstat output misread.

The twist: some of the "bugs" are red herrings — the script does suspicious-looking things that are actually correct. You have to understand what correct looks like to find what's wrong.

---

### Story Beat

The Recon Network comes online.  
For the first time, you can see the entire system.

Every connection. Every process. Every data packet in transit.

And in the traffic: a pattern. The same external address that's been receiving the automation packets — it's not just receiving. It's sending back instructions.

The Cascade wasn't a failure.  
It was a controlled shutdown.  
And the system that triggered it is still watching, waiting for the moment everything comes back online.

A.E.G.I.S.:
> "We have a choice to make. Restore Master Control — and whatever was put there activates.  
> Or we find another way.  
> You've built everything we need. What do we do?"

---

### Secret Lesson Available

If you typed `netstat` before reaching World 9, you've already seen this.  
Secret Lesson: **THE NETWORK GHOST** unlocks here.
