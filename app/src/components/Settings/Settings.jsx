import { useState } from 'react';
import { useVoice, VOICE_STYLES } from '../../hooks/useVoice';
import { useEditorTheme, EDITOR_THEMES } from '../../hooks/useEditorTheme';
import { useGame, THEMES } from '../../contexts/GameContext';
import { isAdminMode, clearAdminMode } from '../../utils/adminMode';
import './Settings.css';

export { isAdminMode, clearAdminMode };

const ADMIN_PASSWORD = '1234';

export default function Settings() {
  const {
    narrationEnabled, toggleNarration,
    voiceStyle, setVoiceStyle,
    selectedVoiceName, setSelectedVoiceName,
    speechRate, setSpeechRate,
    availableVoices,
    speak, isSupported,
  } = useVoice();

  const { theme: editorTheme, setTheme: setEditorTheme } = useEditorTheme();
  const { theme: appTheme, setTheme: setAppTheme, levelInfo, resetProgress } = useGame();
  const { current } = levelInfo;

  // Admin mode state — read from localStorage on mount
  const [adminActive, setAdminActive] = useState(() => isAdminMode());
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  function handleResetProgress() {
    if (!confirmReset) {
      setConfirmReset(true);
      setTimeout(() => setConfirmReset(false), 4000);
      return;
    }
    resetProgress();
    setConfirmReset(false);
  }

  function testVoice() {
    speak('Hello. This is how your current voice setting sounds. You can adjust the style and speed below.');
  }

  function handleEnableAdmin() {
    setShowPasswordInput(true);
    setPasswordValue('');
    setPasswordError('');
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    if (passwordValue === ADMIN_PASSWORD) {
      localStorage.setItem('admin_mode', 'true');
      setAdminActive(true);
      setShowPasswordInput(false);
      setPasswordValue('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password');
      setTimeout(() => setPasswordError(''), 2000);
    }
  }

  function handleDisableAdmin() {
    clearAdminMode();
    setAdminActive(false);
    setShowPasswordInput(false);
    setPasswordValue('');
    setPasswordError('');
  }

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div className="settings-title">SETTINGS</div>
        <div className="settings-sub">Customize your learning environment</div>
      </div>

      {adminActive && (
        <div style={{
          margin: '0 0 8px 0',
          padding: '10px 16px',
          background: 'rgba(255, 100, 0, 0.12)',
          border: '2px solid #ff6400',
          borderRadius: 6,
          color: '#ff6400',
          fontFamily: 'Courier New, monospace',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.1em',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          ⚠ ADMIN MODE ACTIVE — lessons unlocked for viewing only. XP will NOT be awarded.
        </div>
      )}

      <div className="settings-sections">

        {/* ── Voice & Narration ── */}
        <section className="settings-section">
          <div className="section-title">🔊 VOICE & NARRATION</div>

          <div className="setting-row">
            <div className="setting-label">
              <span>Narration</span>
              <span className="setting-desc">Auto-read lesson text aloud</span>
            </div>
            <button
              className={`toggle-btn ${narrationEnabled ? 'on' : 'off'}`}
              onClick={toggleNarration}
              disabled={!isSupported}
            >
              {narrationEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          {isSupported && (
            <>
              <div className="setting-row stacked">
                <div className="setting-label">
                  <span>Voice Style</span>
                </div>
                <div className="option-chips">
                  {VOICE_STYLES.map(vs => (
                    <button
                      key={vs.id}
                      className={`chip ${voiceStyle === vs.id ? 'active' : ''}`}
                      onClick={() => setVoiceStyle(vs.id)}
                    >
                      <span className="chip-label">{vs.label}</span>
                      <span className="chip-desc">{vs.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="setting-row">
                <div className="setting-label">
                  <span>Speed</span>
                  <span className="setting-desc">{(speechRate * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range" min="0.5" max="1.8" step="0.1"
                  value={speechRate}
                  onChange={e => setSpeechRate(parseFloat(e.target.value))}
                  className="speed-slider"
                />
              </div>

              {availableVoices.length > 0 && (
                <div className="setting-row stacked">
                  <div className="setting-label">
                    <span>System Voice</span>
                    <span className="setting-desc">Override with a specific installed voice</span>
                  </div>
                  <select
                    className="voice-select"
                    value={selectedVoiceName}
                    onChange={e => setSelectedVoiceName(e.target.value)}
                  >
                    <option value="">— Auto (style default) —</option>
                    {availableVoices.map(v => (
                      <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
                    ))}
                  </select>
                </div>
              )}

              <button className="test-voice-btn" onClick={testVoice}>
                ▶ Test Current Voice
              </button>
            </>
          )}

          {!isSupported && (
            <div className="setting-note">Voice narration is not available in this browser/environment.</div>
          )}
        </section>

        {/* ── Editor Theme ── */}
        <section className="settings-section">
          <div className="section-title">🎨 EDITOR THEME</div>
          <div className="setting-desc" style={{ marginBottom: 12 }}>
            Syntax highlighting for the code editor
          </div>
          <div className="theme-grid">
            {EDITOR_THEMES.map(t => (
              <button
                key={t.id}
                className={`theme-chip ${editorTheme === t.id ? 'active' : ''}`}
                onClick={() => setEditorTheme(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── App Theme ── */}
        <section className="settings-section">
          <div className="section-title">🖥️ APP THEME</div>
          <div className="theme-grid">
            {Object.entries(THEMES).map(([id, def]) => {
              const locked = current.level < def.unlockLevel;
              return (
                <button
                  key={id}
                  className={`theme-chip ${appTheme === id ? 'active' : ''} ${locked ? 'locked' : ''}`}
                  onClick={() => !locked && setAppTheme(id)}
                  title={locked ? `Unlocks at level ${def.unlockLevel}` : def.name}
                  style={!locked ? { borderColor: def.primary, color: def.primary } : {}}
                >
                  {def.name}
                  {locked && <span className="lock-icon"> 🔒 Lv{def.unlockLevel}</span>}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Admin Mode ── */}
        <section className="settings-section">
          <div className="section-title">🔧 ADMIN MODE</div>
          <div className="setting-desc" style={{ marginBottom: 12 }}>
            Bypass lesson lock state for viewing and testing. No XP is awarded and no lessons are marked complete.
          </div>

          {adminActive ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'Courier New, monospace',
                fontSize: 13,
                color: '#44ff88',
                fontWeight: 700,
              }}>
                <span style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#44ff88',
                  boxShadow: '0 0 6px #44ff88',
                  display: 'inline-block',
                  flexShrink: 0,
                }} />
                Admin Mode Active
              </div>
              <button
                className="test-voice-btn"
                style={{ borderColor: '#ff4141', color: '#ff4141', marginTop: 4 }}
                onClick={handleDisableAdmin}
              >
                Disable Admin Mode
              </button>

              <div style={{ borderTop: '1px solid var(--border-dim)', marginTop: 6, paddingTop: 14 }}>
                <div className="setting-desc" style={{ marginBottom: 10 }}>
                  Wipe all saved progress — XP, level, completed lessons, achievements, stats, themes, and unlocks. This cannot be undone.
                </div>
                <button
                  className="test-voice-btn"
                  style={{ borderColor: '#ff4141', color: '#ff4141' }}
                  onClick={handleResetProgress}
                >
                  {confirmReset ? '⚠ Click again to confirm reset' : 'Reset All Progress'}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {!showPasswordInput && (
                <button className="test-voice-btn" onClick={handleEnableAdmin}>
                  Enable Admin Mode
                </button>
              )}

              {showPasswordInput && (
                <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <input
                    type="password"
                    autoFocus
                    placeholder="Enter password"
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    style={{
                      background: 'var(--surface)',
                      border: `1px solid ${passwordError ? '#ff4141' : 'var(--border-dim)'}`,
                      color: 'var(--text-bright)',
                      fontFamily: 'Courier New, monospace',
                      fontSize: 13,
                      padding: '8px 12px',
                      borderRadius: 5,
                      outline: 'none',
                      width: 200,
                    }}
                  />
                  {passwordError && (
                    <div style={{ color: '#ff4141', fontFamily: 'Courier New, monospace', fontSize: 11 }}>
                      {passwordError}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button type="submit" className="test-voice-btn">
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="test-voice-btn"
                      style={{ borderColor: 'var(--border-dim)', color: 'var(--text-dim)' }}
                      onClick={() => { setShowPasswordInput(false); setPasswordError(''); setPasswordValue(''); }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
