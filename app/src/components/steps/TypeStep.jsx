import { useState } from 'react';
import './TypeStep.css';

export default function TypeStep({ step, onCorrect, onWrong }) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const normalize = s => s.trim().replace(/\s+/g, ' ');
  const isCorrect = normalize(value) === normalize(step.answer);

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
    <div className="type-step">
      <div className="type-body">
        <div className="type-label">TYPE THE CODE</div>
        <h2 className="type-question">{step.prompt}</h2>

        {step.target && (
          <div className="type-target">
            <div className="target-label">EXPECTED OUTPUT:</div>
            <pre className="target-text">{step.target}</pre>
          </div>
        )}

        <div className={`type-input-wrap ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
          <input
            className="type-input"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
            placeholder={step.placeholder || 'Type your answer...'}
            disabled={submitted}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          {submitted && (
            <span className="input-status">{isCorrect ? '✓' : '✗'}</span>
          )}
        </div>

        {submitted && !isCorrect && (
          <div className="type-feedback wrong">
            <div className="feedback-icon">✗ NOT QUITE</div>
            <p>Correct answer: <code>{step.answer}</code></p>
          </div>
        )}

        {submitted && isCorrect && (
          <div className="type-feedback correct">
            <div className="feedback-icon">✓ CORRECT</div>
          </div>
        )}

        {!submitted && (
          <button className="hint-link" onClick={() => setShowHint(!showHint)}>
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>
        )}

        {showHint && !submitted && (
          <div className="type-hint">
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
