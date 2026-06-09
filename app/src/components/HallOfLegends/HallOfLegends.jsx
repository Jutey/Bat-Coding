import { useGame } from '../../contexts/GameContext';
import './HallOfLegends.css';

const PLAQUES = [
  { id: 'first-script',   label: 'FIRST SCRIPT',     icon: '📜', desc: 'Where the journey began' },
  { id: 'first-bug',      label: 'FIRST BUG FIXED',  icon: '🐛', desc: 'Debugger awakened' },
  { id: 'first-boss',     label: 'FIRST BOSS SLAIN', icon: '⚔️', desc: 'Power proven' },
  { id: 'first-game',     label: 'FIRST GAME BUILT', icon: '🎮', desc: 'Creator unlocked' },
  { id: 'first-secret',   label: 'FIRST SECRET',     icon: '🔮', desc: 'The grid reveals itself' },
  { id: 'speed-run',      label: 'SPEED RUN',        icon: '⚡', desc: '3 lessons in one session' },
  { id: 'no-hints',       label: 'NO HINTS',         icon: '🧠', desc: 'Pure intellect' },
  { id: 'all-world-1',    label: 'WORLD 1 MASTERED', icon: '🌍', desc: 'Power Grid: ONLINE' },
];

function HallOfLegendsInner() {
  const game = useGame();

  // Safely resolve arrays regardless of what context returns
  const hallOfLegends = Array.isArray(game?.hallOfLegends) ? game.hallOfLegends : [];
  const achievements  = Array.isArray(game?.achievements)  ? game.achievements  : [];

  const unlockedIds = new Set([
    ...hallOfLegends.map(h => h?.id).filter(Boolean),
    ...achievements,
  ]);

  const allLocked = unlockedIds.size === 0;

  return (
    <div className="hall">
      <div className="hall-header">
        <div className="hall-title">HALL OF LEGENDS</div>
        <div className="hall-subtitle">Monuments to your greatest achievements</div>
      </div>

      {allLocked && (
        <div className="hall-empty">
          <div className="hall-empty-icon">🏆</div>
          <div className="hall-empty-text">
            You haven't earned any achievements yet.<br />
            Complete lessons to unlock them!
          </div>
        </div>
      )}

      <div className={`plaques-grid${allLocked ? ' all-locked' : ''}`}>
        {PLAQUES.map(p => {
          const unlocked = unlockedIds.has(p.id);
          return (
            <div key={p.id} className={`plaque ${unlocked ? 'unlocked' : ''}`}>
              <div className="plaque-icon">{unlocked ? p.icon : '❓'}</div>
              <div className="plaque-name">{unlocked ? p.label : '???'}</div>
              <div className="plaque-desc">
                {unlocked ? p.desc : (allLocked ? 'Complete lessons to unlock' : 'Not yet achieved')}
              </div>
            </div>
          );
        })}
      </div>

      {hallOfLegends.length > 0 && (
        <div className="hall-log">
          <div className="hall-log-label">LEGEND LOG</div>
          {hallOfLegends.map((entry, i) => (
            <div key={i} className="log-entry">
              <span className="log-icon">{PLAQUES.find(p => p.id === entry?.id)?.icon || '⭐'}</span>
              <span className="log-text">{entry?.desc || entry?.id}</span>
              <span className="log-date">{entry?.date || ''}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HallOfLegends() {
  try {
    return <HallOfLegendsInner />;
  } catch (err) {
    return (
      <div style={{
        padding: 32,
        color: '#ff4141',
        fontFamily: 'Courier New, monospace',
        background: 'var(--bg, #0d0d0d)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        <div style={{ fontSize: 16, fontWeight: 800 }}>⚠ Hall of Legends failed to load</div>
        <div style={{ fontSize: 12, color: 'var(--text-dim, #5a7a5a)' }}>{err?.message}</div>
      </div>
    );
  }
}
