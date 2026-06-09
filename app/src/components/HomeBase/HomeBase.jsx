import { useGame, PETS, PET_EVOLUTIONS } from '../../contexts/GameContext';
import './HomeBase.css';

const WORLD_LABELS = [
  'Output','Memory','Logic','Loops','Random','Files','Functions','Automation','Networks','Debugging'
];

export default function HomeBase() {
  const { levelInfo, completedLessons, totalXP, stats, activePet } = useGame();
  const { current, next, pct } = levelInfo;

  const pet = PETS.find(p => p.id === activePet) || PETS[0];
  const evolutions = PET_EVOLUTIONS[activePet] || PET_EVOLUTIONS.glitch;
  const petStage = evolutions.filter(e => current.level >= e.minLevel).pop() || evolutions[0];

  const worldsComplete = WORLD_LABELS.map((label, i) => ({
    label,
    num: i + 1,
    done: completedLessons.filter(id => id.startsWith(`world-${String(i + 1).padStart(2, '0')}`)).length,
    total: 10,
  }));

  return (
    <div className="home-base">
      <div className="base-header">
        <div className="base-title">YOUR PROGRESS</div>
        <div className="base-sub">CommandQuest</div>
      </div>

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
            {next ? `${totalXP} / ${next.xp} XP` : 'MAX LEVEL'}
          </div>
        </div>
      </div>

      <div className="world-progress-grid">
        {worldsComplete.map(w => (
          <div key={w.num} className={`world-row ${w.done === w.total ? 'complete' : w.done > 0 ? 'partial' : ''}`}>
            <span className="world-row-label">W{String(w.num).padStart(2,'0')} {w.label}</span>
            <span className="world-row-count">{w.done}/{w.total}</span>
          </div>
        ))}
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-value">{completedLessons.length}</span>
          <span className="stat-label">LESSONS</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.linesWritten || 0}</span>
          <span className="stat-label">LINES</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.scriptsRun || 0}</span>
          <span className="stat-label">SCRIPTS</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.bugsFixed || 0}</span>
          <span className="stat-label">BUGS</span>
        </div>
      </div>

      <div className="pet-panel">
        <span className="pet-emoji">{petStage.form}</span>
        <div className="pet-info">
          <div className="pet-name">{pet.name}</div>
          <div className="pet-stage">{petStage.desc}</div>
        </div>
      </div>
    </div>
  );
}
