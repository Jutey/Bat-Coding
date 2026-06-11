import './SpeakButton.css';

// Small inline button that reads a single piece of text aloud on demand —
// lets the user jump narration to a specific question/option/hint instead
// of only hearing the whole step from the top.
export default function SpeakButton({ speak, text, isSupported, label }) {
  if (!isSupported || !text) return null;
  return (
    <button
      type="button"
      className="speak-btn"
      title={label ? `Read aloud: ${label}` : 'Read aloud'}
      onClick={(e) => { e.stopPropagation(); speak(text, { force: true }); }}
    >
      🔊
    </button>
  );
}
