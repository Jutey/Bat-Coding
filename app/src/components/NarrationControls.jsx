import './NarrationControls.css';

// Play/pause/stop transport for the current step's full narration.
export default function NarrationControls({ isSupported, isSpeaking, isPaused, onPlay, onPause, onResume, onStop }) {
  if (!isSupported) return null;

  return (
    <div className="narration-controls">
      {!isSpeaking && (
        <button className="narration-btn" onClick={onPlay} title="Read this step aloud">▶</button>
      )}
      {isSpeaking && !isPaused && (
        <button className="narration-btn" onClick={onPause} title="Pause">⏸</button>
      )}
      {isSpeaking && isPaused && (
        <button className="narration-btn" onClick={onResume} title="Resume">▶</button>
      )}
      {isSpeaking && (
        <button className="narration-btn" onClick={onStop} title="Stop">⏹</button>
      )}
    </div>
  );
}
