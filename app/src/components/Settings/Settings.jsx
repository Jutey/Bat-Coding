import { useState } from 'react';
import { useVoice, VOICE_STYLES } from '../../hooks/useVoice';
import { useEditorTheme, EDITOR_THEMES } from '../../hooks/useEditorTheme';
import { useGame, THEMES } from '../../contexts/GameContext';
import './Settings.css';

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
  const { theme: appTheme, setTheme: setAppTheme, levelInfo } = useGame();
  const { current } = levelInfo;

  function testVoice() {
    speak('Hello. This is how your current voice setting sounds. You can adjust the style and speed below.');
  }

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div className="settings-title">SETTINGS</div>
        <div className="settings-sub">Customize your learning environment</div>
      </div>

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

      </div>
    </div>
  );
}
