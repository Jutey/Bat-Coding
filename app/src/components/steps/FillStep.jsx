import { useState } from 'react';
import './FillStep.css';

export default function FillStep({ step, onCorrect, onWrong }) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const normalize = s => s.trim().toLowerCase();
  const isCorrect = normalize(value) === normalize(step.answer);

  const lines = step.template.split('\n').map(line => {
    if (line.includes(step.blank)) {
      const parts = line.split(step.blank);
      return { type: 'fill', before: parts[0], after: parts[1] || '' };
    }
    return { type: 'code', text: line };
  });

  function handleCheck() {
    if (!value.trim() || submitted) return;
    setSubmitted(true);
    if (isCorrect) {
      setTimeout(() => onCorrect(), 1200);
    } else {
      setTimeout(() => {
        setSubmitted(false);
        setValue('');
        onWrong();
      }, 1200);
    }
  }

  return (
    <div className="fill-step">
      <div className="fill-body">
        <div className="fill-label">FILL IN THE BLANK</div>
        <h2 className="fill-question">{step.prompt}</h2>

        <div className="fill-code-block">
          {lines.map((line, i) => (
            <div key={i} className="fill-line">
              {line.type === 'code' ? (
                <span className="fill-code-text">{line.text}</span>
              ) : (
                <>
                  <span className="fill-code-text">{line.before}</span>
                  <span className={`fill-blank-wrap ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
                    <input
                      className="fill-blank"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleCheck()}
                      disabled={submitted}
                      autoFocus
                      spellCheck={false}
                      autoComplete="off"
                      size={Math.max(step.answer.length + 2, 8)}
                    />
                  </span>
                  <span className="fill-code-text">{line.after}</span>
                </>
              )}
            </div>
          ))}
        </div>

        {submitted && !isCorrect && (
          <div className="fill-feedback wrong">
            <div className="fb-icon">✗ NOT QUITE</div>
            <p>The blank should be: <code>{step.answer}</code></p>
          </div>
        )}
        {submitted && isCorrect && (
          <div className="fill-feedback correct">
            <div className="fb-icon">✓ CORRECT</div>
          </div>
        )}

        {!submitted && (
          <button className="hint-link" onClick={() => setShowHint(!showHint)}>
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>
        )}
        {showHint && !submitted && (
          <div className="fill-hint">
            <span className="aegis-tag">A.E.G.I.S.</span> {step.hint}
          </div>
        )}
      </div>

      <button
        className="check-btn"
        disabled={!value.trim() || submitted}
        onClick={handleCheck}
      >
        CHECK ANSWER
      </button>
    </div>
  );
}
