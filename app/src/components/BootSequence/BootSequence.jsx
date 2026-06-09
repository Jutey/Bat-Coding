import { useState, useEffect } from 'react';
import './BootSequence.css';

const BOOT_LINES = [
  { text: 'TERMINAL PRIME BIOS v3.7.0', delay: 0,    color: '#00ff41' },
  { text: 'Copyright (C) Digital Repair Corps', delay: 120, color: '#3a6a3a' },
  { text: '', delay: 200 },
  { text: 'Detecting hardware...', delay: 350, color: '#7a9a7a' },
  { text: '  CPU: REPAIR-CORE-X1 @ 3.7 GHz          [OK]', delay: 500, color: '#5a8a5a' },
  { text: '  RAM: 16384 MB DDR5                       [OK]', delay: 650, color: '#5a8a5a' },
  { text: '  STORAGE: 2TB VAULT-DRIVE                 [OK]', delay: 800, color: '#5a8a5a' },
  { text: '', delay: 900 },
  { text: 'Loading kernel...', delay: 1000, color: '#7a9a7a' },
  { text: '  [==========] 100%                        [OK]', delay: 1300, color: '#00ff41' },
  { text: '', delay: 1400 },
  { text: 'Initializing A.E.G.I.S. subsystems...', delay: 1500, color: '#7a9a7a' },
  { text: '  Memory Banks........                     [OK]', delay: 1700, color: '#5a8a5a' },
  { text: '  Decision Engine.....                     [OK]', delay: 1850, color: '#5a8a5a' },
  { text: '  Chaos Engine........                  [WARN]', delay: 2000, color: '#ff9900' },
  { text: '  Storage Vaults......                     [OK]', delay: 2150, color: '#5a8a5a' },
  { text: '', delay: 2300 },
  { text: 'WARNING: Network cascade detected.', delay: 2500, color: '#ff9900' },
  { text: 'WARNING: 9 of 10 sectors offline.', delay: 2700, color: '#ff4141' },
  { text: 'WARNING: Repair protocol initiated.', delay: 2900, color: '#ff4141' },
  { text: '', delay: 3100 },
  { text: 'A.E.G.I.S.: Cadet detected. Welcome to Terminal Prime.', delay: 3400, color: '#00ff41' },
  { text: 'A.E.G.I.S.: Your mission: restore the network.', delay: 3800, color: '#00ff41' },
  { text: 'A.E.G.I.S.: Everything depends on what you learn next.', delay: 4200, color: '#00ff41' },
  { text: '', delay: 4500 },
  { text: 'Launching Digital Repair Corps HQ...', delay: 4700, color: '#7a9a7a' },
];

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(prev => [...prev, { ...line, i }]), line.delay)
    );
    const doneTimer = setTimeout(() => setDone(true), 5200);
    return () => { timers.forEach(clearTimeout); clearTimeout(doneTimer); };
  }, []);

  function skip() {
    setFadeOut(true);
    setTimeout(onComplete, 400);
  }

  function handleDone() {
    setFadeOut(true);
    setTimeout(onComplete, 600);
  }

  useEffect(() => {
    if (done) {
      const t = setTimeout(handleDone, 800);
      return () => clearTimeout(t);
    }
  }, [done]);

  return (
    <div className={`boot-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="boot-terminal">
        <div className="boot-lines">
          {visibleLines.map((line, i) => (
            <div key={i} className="boot-line" style={{ color: line.color || '#5a8a5a', animationDelay: `${i * 0.02}s` }}>
              {line.text || <>&nbsp;</>}
            </div>
          ))}
          {!done && <span className="boot-cursor">█</span>}
        </div>
      </div>
      <button className="boot-skip" onClick={skip}>SKIP →</button>
    </div>
  );
}
