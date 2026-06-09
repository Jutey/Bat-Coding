import { useGame, BASE_STAGES, PETS, PET_EVOLUTIONS } from '../../contexts/GameContext';
import './HomeBase.css';

const SECTOR_ICONS = ['⚡','💾','🧠','⏱️','🎲','🗄️','⚙️','🤖','📡','🏆'];

export default function HomeBase() {
  const { levelInfo, baseStage, completedLessons, totalXP, stats, activePet } = useGame();
  const { current, next, pct } = levelInfo;

  const pet = PETS.find(p => p.id === activePet) || PETS[0];
  const evolutions = PET_EVOLUTIONS[activePet] || PET_EVOLUTIONS.glitch;
  const petStage = evolutions.filter(e => current.level >= e.minLevel).pop() || evolutions[0];

  const sectorsOnline = Math.min(10, Math.floor(completedLessons.length / 10));

  return (
    <div className="home-base">
      {/* Terminal Prime Header */}
      <div className="base-header">
        <div className="base-title">TERMINAL PRIME</div>
        <div className="base-stage-desc">{baseStage.emoji} {baseStage.desc}</div>
      </div>

      {/* Level + XP bar */}
      <div className="level-panel">
        <div className="level-badge" style={{ borderColor: current.color, color: current.color }}>
          LVL {current.level}
        </div>
        <div className="level-info">
          <div className="title-display" style={{ color: current.color }}>{current.title}</div>
          <div className="xp-bar-wrap">
            <div className="xp-bar-fill" style={{ width: `${pct}%`, background: current.color }} />
          </div>
          <div className="xp-numbers">
            {next ? `${totalXP} / ${next.xp} XP` : 'MAX LEVEL'} {next && `→ ${next.title}`}
          </div>
        </div>
      </div>

      {/* Sector grid */}
      <div className="sector-grid">
        {SECTOR_ICONS.map((icon, i) => {
          const online = i < sectorsOnline;
          return (
            <div key={i} className={`sector-node ${online ? 'online' : 'offline'}`}>
              <span className="sector-icon">{icon}</span>
              <span className="sector-num">S{String(i + 1).padStart(2,'0')}</span>
              <span className={`sector-status ${online ? 'on' : 'off'}`}>{online ? 'ONLINE' : 'OFFLINE'}</span>
            </div>
          );
        })}
      </div>

      {/* Stats row */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-value">{stats.linesWritten || 0}</span>
          <span className="stat-label">LINES WRITTEN</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.scriptsRun || 0}</span>
          <span className="stat-label">SCRIPTS RUN</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.bugsFixed || 0}</span>
          <span className="stat-label">BUGS FIXED</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{completedLessons.length}</span>
          <span className="stat-label">LESSONS DONE</span>
        </div>
      </div>

      {/* Pet */}
      <div className="pet-panel">
        <div className="pet-display">
          <span className="pet-emoji">{petStage.form}</span>
          <div className="pet-info">
            <div className="pet-name">{pet.name}</div>
            <div className="pet-stage">{petStage.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
