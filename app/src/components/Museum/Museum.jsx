import { useGame } from '../../contexts/GameContext';
import './Museum.css';

export default function Museum() {
  const { completedLessons, stats, gallery = [] } = useGame();

  const milestones = [
    { id: 'first-lesson',  label: 'First Script Written',  icon: '📜', unlocked: completedLessons.length >= 1 },
    { id: 'five-lessons',  label: '5 Lessons Completed',   icon: '⭐', unlocked: completedLessons.length >= 5 },
    { id: 'ten-lessons',   label: '10 Lessons Completed',  icon: '🌟', unlocked: completedLessons.length >= 10 },
    { id: 'first-bug',     label: 'First Bug Squashed',    icon: '🐛', unlocked: (stats.bugsFixed || 0) >= 1 },
    { id: '10-bugs',       label: '10 Bugs Squashed',      icon: '🔧', unlocked: (stats.bugsFixed || 0) >= 10 },
    { id: '50-lines',      label: '50 Lines Written',      icon: '✍️',  unlocked: (stats.linesWritten || 0) >= 50 },
    { id: '500-lines',     label: '500 Lines Written',     icon: '📝', unlocked: (stats.linesWritten || 0) >= 500 },
    { id: '10-scripts',    label: '10 Scripts Run',        icon: '▶️',  unlocked: (stats.scriptsRun || 0) >= 10 },
    { id: 'world-1',       label: 'Power Grid Restored',   icon: '⚡', unlocked: completedLessons.some(l => l.includes('lesson-10')) },
    { id: 'world-2',       label: 'Memory Banks Online',   icon: '💾', unlocked: completedLessons.some(l => l.includes('lesson-19')) },
  ];

  return (
    <div className="museum">
      <div className="museum-header">
        <div className="museum-title">CODE MUSEUM</div>
        <div className="museum-subtitle">Your coding journey preserved forever</div>
      </div>

      <div className="museum-section">
        <div className="museum-section-label">MILESTONES</div>
        <div className="milestone-grid">
          {milestones.map(m => (
            <div key={m.id} className={`milestone-card ${m.unlocked ? 'unlocked' : ''}`}>
              <div className="milestone-icon">{m.unlocked ? m.icon : '🔒'}</div>
              <div className="milestone-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="museum-section">
        <div className="museum-section-label">SCRIPTS ARCHIVE ({completedLessons.length} TOTAL)</div>
        {completedLessons.length === 0 ? (
          <div className="museum-empty">Complete lessons to fill your archive</div>
        ) : (
          <div className="archive-grid">
            {completedLessons.slice(-20).map(id => (
              <div key={id} className="archive-card">
                <div className="archive-id">{id.replace('lesson-', 'L').toUpperCase()}</div>
                <div className="archive-status">✓ DONE</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="museum-section">
        <div className="museum-section-label">GALLERY</div>
        {gallery.length === 0 ? (
          <div className="museum-empty">Build scripts in lessons to add them to your gallery</div>
        ) : (
          <div className="gallery-list">
            {gallery.map((entry, i) => (
              <div key={i} className="gallery-entry">
                <div className="gallery-title">{entry.title}</div>
                <pre className="gallery-code">{entry.code}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
