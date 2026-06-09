import { useGame } from '../../contexts/GameContext';
import { THEMES, PETS, AVATARS, LEVELS, getLevelInfo, PET_EVOLUTIONS } from '../../contexts/GameContext';
import './Profile.css';

export default function Profile() {
  const { totalXP, theme, avatar, activePet, achievements, secretCommandsFound = [], setTheme, setAvatar, setActivePet } = useGame();
  const { current, next, pct } = getLevelInfo(totalXP);
  const level = current.level;

  const availableThemes = Object.entries(THEMES).filter(([, t]) => level >= t.unlockLevel);
  const availablePets   = PETS.filter(p => level >= p.unlockLevel);
  const availableAvatars = AVATARS.filter(a => level >= a.unlockLevel);

  function getPetForm(petId) {
    const evos = PET_EVOLUTIONS[petId];
    if (!evos) return PETS.find(p => p.id === petId)?.emoji || '🤖';
    let form = evos[0].form;
    for (const e of evos) { if (level >= e.minLevel) form = e.form; }
    return form;
  }

  function handleSetAvatar(id) { setAvatar(id); }
  function handleSetPet(id) { setActivePet(id); }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar-big">{AVATARS.find(a => a.id === avatar)?.emoji || '👤'}</div>
        <div className="profile-info">
          <div className="profile-title" style={{ color: current.color }}>{current.title}</div>
          <div className="profile-level">LEVEL {level}</div>
          <div className="profile-xp">{totalXP.toLocaleString()} XP</div>
          <div className="profile-bar-wrap">
            <div className="profile-bar-fill" style={{ width: `${pct}%`, background: current.color }} />
          </div>
          {next && <div className="profile-next-level">{next.xp - totalXP} XP to {next.title}</div>}
        </div>
        <div className="profile-pet-big">{getPetForm(activePet)}</div>
      </div>

      <div className="profile-stats-row">
        <div className="pstat"><span>{achievements.length}</span><small>Achievements</small></div>
        <div className="pstat"><span>{secretCommandsFound.length}</span><small>Secrets Found</small></div>
        <div className="pstat"><span>{LEVELS.length}</span><small>Max Level</small></div>
        <div className="pstat"><span>{Object.keys(THEMES).length}</span><small>Themes</small></div>
      </div>

      <div className="profile-section">
        <div className="profile-section-label">AVATAR</div>
        <div className="avatar-grid">
          {availableAvatars.map(a => (
            <button key={a.id} className={`avatar-btn ${avatar === a.id ? 'active' : ''}`} onClick={() => handleSetAvatar(a.id)}>
              <span className="avatar-emoji">{a.emoji}</span>
              <span className="avatar-name">{a.name}</span>
            </button>
          ))}
          {AVATARS.filter(a => level < a.unlockLevel).map(a => (
            <div key={a.id} className="avatar-btn locked">
              <span className="avatar-emoji">🔒</span>
              <span className="avatar-name">LVL {a.unlockLevel}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-label">CODE PET</div>
        <div className="pets-grid">
          {availablePets.map(p => (
            <button key={p.id} className={`pet-btn ${activePet === p.id ? 'active' : ''}`} onClick={() => handleSetPet(p.id)}>
              <span className="pet-emoji">{getPetForm(p.id)}</span>
              <span className="pet-name">{p.name}</span>
              <span className="pet-desc">{p.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-label">THEME</div>
        <div className="themes-grid">
          {availableThemes.map(([id, t]) => (
            <button key={id} className={`theme-btn ${theme === id ? 'active' : ''}`}
              style={{ '--tc': t.primary, '--tbg': t.bg }}
              onClick={() => setTheme(id)}>
              <span className="theme-swatch" />
              <span className="theme-name">{t.name}</span>
            </button>
          ))}
          {Object.entries(THEMES).filter(([, t]) => level < t.unlockLevel).map(([id, t]) => (
            <div key={id} className="theme-btn locked" style={{ '--tc': '#333', '--tbg': '#111' }}>
              <span className="theme-swatch" />
              <span className="theme-name">LVL {t.unlockLevel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
