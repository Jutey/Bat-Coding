import { useState, useEffect } from 'react';
import { AEGIS_WORLD_INTROS } from '../data/aegis';
import './WorldMap.css';

const WORLD_META = [
  { sector: 'POWER GRID',      color: '#00ff41', num: '01' },
  { sector: 'MEMORY BANKS',    color: '#00d4ff', num: '02' },
  { sector: 'DECISION ENGINE', color: '#ff9900', num: '03' },
  { sector: 'TIMING SYSTEMS',  color: '#cc44ff', num: '04' },
  { sector: 'CHAOS ENGINE',    color: '#ff4444', num: '05' },
  { sector: 'STORAGE VAULTS',  color: '#ffdd00', num: '06' },
  { sector: 'CORE FUNCTIONS',  color: '#00ffaa', num: '07' },
  { sector: 'AUTOMATION GRID', color: '#ff6644', num: '08' },
  { sector: 'RECON NETWORK',   color: '#44aaff', num: '09' },
  { sector: 'MASTER CONTROL',  color: '#ffffff', num: '10' },
  { sector: 'PYTHON BRIDGE',   color: '#ff44aa', num: '11' },
];

export default function WorldMap({ worlds, progress, selectedWorld, onSelectWorld, onSelectLesson, onTriggerAchievement }) {
  const [lessons, setLessons] = useState([]);
  const [loadingLessons, setLoadingLessons] = useState(false);

  useEffect(() => {
    if (!selectedWorld) { setLessons([]); return; }
    setLoadingLessons(true);
    window.api.getLessons(selectedWorld.id).then(l => {
      setLessons(l);
      setLoadingLessons(false);
    });
  }, [selectedWorld]);

  function getWorldIndex(world) {
    return worlds.indexOf(world);
  }

  function getWorldMeta(world) {
    const i = getWorldIndex(world);
    return WORLD_META[i] || { sector: 'UNKNOWN', color: '#444', num: '??' };
  }

  function worldCompletionPct(world) {
    const i = getWorldIndex(world);
    // rough: 10 lessons per world
    const base = i * 10;
    let count = 0;
    for (let l = base + 1; l <= base + 10; l++) {
      if (progress.completedLessons.some(id => id.includes(`lesson-${String(l).padStart(2,'0')}`))) count++;
    }
    return Math.round((count / 10) * 100);
  }

  function isLessonComplete(lessonId) {
    return progress.completedLessons.includes(lessonId);
  }

  const worldKey = selectedWorld ? selectedWorld.id.replace('world-', 'world-') : null;
  const aegisIntro = worldKey ? (AEGIS_WORLD_INTROS[worldKey] || AEGIS_WORLD_INTROS[selectedWorld?.id.substring(0, 8)]) : null;

  if (!selectedWorld) {
    return (
      <div className="world-map">
        <div className="map-header">
          <div className="map-title">DIGITAL REPAIR CORPS</div>
          <div className="map-subtitle">SELECT SECTOR TO DEPLOY</div>
        </div>

        <div className="aegis-intro-box">
          <span className="aegis-label">A.E.G.I.S.</span>
          <p>The network went dark 72 hours ago. You have been recruited. Select a sector to begin restoration. The Power Grid must come online first.</p>
        </div>

        <div className="world-grid">
          {worlds.map((world, i) => {
            const meta = WORLD_META[i] || { sector: 'UNKNOWN', color: '#444', num: '??' };
            const pct = worldCompletionPct(world);
            const isLocked = i > 0 && worldCompletionPct(worlds[i - 1]) < 50;

            return (
              <div
                key={world.id}
                className={`world-card ${isLocked ? 'locked' : ''} ${pct === 100 ? 'complete' : ''}`}
                style={{ '--world-color': meta.color }}
                onClick={() => !isLocked && onSelectWorld(world)}
              >
                <div className="world-num">SECTOR {meta.num}</div>
                <div className="world-sector">{meta.sector}</div>
                <div className="world-name">{world.name.split('—')[1]?.trim() || world.name}</div>
                <div className="world-bar">
                  <div className="world-bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="world-pct">{isLocked ? '🔒 LOCKED' : `${pct}%`}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const meta = getWorldMeta(selectedWorld);

  return (
    <div className="world-map">
      <div className="lesson-list-header">
        <button className="back-btn" onClick={() => onSelectWorld(null)}>← WORLD MAP</button>
        <div>
          <div className="lesson-list-title" style={{ color: meta.color }}>SECTOR {meta.num} — {meta.sector}</div>
          <div className="lesson-list-subtitle">{selectedWorld.name}</div>
        </div>
      </div>

      {aegisIntro && (
        <div className="aegis-intro-box">
          <span className="aegis-label">A.E.G.I.S.</span>
          <p>{aegisIntro}</p>
        </div>
      )}

      <div className="lesson-list">
        {loadingLessons ? (
          <div className="loading">LOADING SECTOR DATA...</div>
        ) : lessons.map((lesson, i) => {
          const done = isLessonComplete(lesson.worldId + '/' + lesson.id);
          return (
            <div
              key={lesson.id}
              className={`lesson-card ${done ? 'done' : ''} ${lesson.isBoss ? 'boss' : ''}`}
              style={{ '--world-color': meta.color }}
              onClick={() => onSelectLesson(lesson)}
            >
              <div className="lesson-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="lesson-info">
                <div className="lesson-name">{lesson.name}</div>
                <div className="lesson-tags">
                  {lesson.isBoss && <span className="tag tag-boss">⚔ BOSS BATTLE</span>}
                  {lesson.hasChallenge && <span className="tag tag-bug">🐛 BUG HUNT</span>}
                  {done && <span className="tag tag-done">✓ COMPLETE</span>}
                </div>
              </div>
              <div className="lesson-arrow">›</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
