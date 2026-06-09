import { useState } from 'react';
import './FillStep.css';

export default function FillStep({ step, onCorrect, onWrong }) {
  const [value, setValue] = useState('');
  const [locked, setLocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const normalize = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const correct = normalize(value) === normalize(step.answer);

  function handleCheck() {
    if (!value.trim() || locked) return;
    setLocked(true);
    if (correct) {
      setTimeout(() => onCorrect(), 1200);
    } else {
      setTimeout(() => {
        setLocked(false);
        setValue('');
        onWrong();
      }, 1400);
    }
  }

  return (
    <div className="fill-step">
      <div className="fill-body">
        <div className="fill-label">FILL IN THE BLANK</div>

        <div className="fill-code-block">
          {step.before && (
            <pre className="fill-code-text faded">{step.before}</pre>
          )}

          <div className="fill-line-wrap">
            <span className={`fill-blank-wrap ${locked ? (correct ? 'correct' : 'wrong') : ''}`}>
              <input
                className="fill-blank"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCheck()}
                disabled={locked}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                placeholder="type here..."
                size={Math.max((step.answer?.length || 0) + 4, 12)}
              />
            </span>
          </div>

          {step.after && (
            <pre className="fill-code-text faded">{step.after}</pre>
          )}
        </div>

        {!locked && (
          <button className="hint-link" onClick={() => setShowHint(!showHint)}>
            {showHint ? 'Hide hint' : '💡 Show hint'}
          </button>
        )}
        {showHint && !locked && (
          <div className="fill-hint">
            <span className="aegis-tag">A.E.G.I.S.</span> {step.hint}
          </div>
        )}
      </div>

      {locked && (
        <div className={`feedback-banner ${correct ? 'correct' : 'wrong'}`}>
          <div className="feedback-title">{correct ? '✓ CORRECT' : '✗ NOT QUITE'}</div>
          {!correct && (
            <div className="feedback-explain">The answer is: <code>{step.answer}</code></div>
          )}
        </div>
      )}

      <button
        className="check-btn"
        disabled={!value.trim() || locked}
        onClick={handleCheck}
      >
        CHECK ANSWER
      </button>
    </div>
  );
}
