import { useState } from 'react';
import SpeakButton from '../SpeakButton';
import './TypeStep.css';

export default function TypeStep({ step, onCorrect, onWrong, speak, isSupported }) {
  const [value, setValue] = useState('');
  const [locked, setLocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const normalize = s => s.trim().replace(/\s+/g, ' ');
  const isCorrect = normalize(value) === normalize(step.answer || '');

  function handleCheck() {
    if (!value.trim() || locked) return;
    setLocked(true);
    // wrong: user clicks TRY AGAIN; correct: user clicks CONTINUE
  }

  function handleRetry() {
    setValue('');
    setLocked(false);
    if (onWrong) onWrong();
  }

  return (
    <div className="type-step">
      <div className="type-body">
        <div className="type-label">TYPE THE CODE</div>
        <div className="type-question-row">
          <h2 className="type-question">{step.prompt}</h2>
          <SpeakButton speak={speak} isSupported={isSupported} text={step.prompt} label="prompt" />
        </div>

        {step.target && (
          <div className="type-target">
            <div className="target-label">EXPECTED OUTPUT:</div>
            <pre className="target-text">{step.target}</pre>
          </div>
        )}

        <div className={`type-input-wrap ${locked ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
          <input
            className="type-input"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
            placeholder={step.placeholder || 'Type your answer...'}
            disabled={locked}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          {locked && <span className="input-status">{isCorrect ? '✓' : '✗'}</span>}
        </div>

        {!locked && (
          <button className="hint-link" onClick={() => setShowHint(v => !v)}>
            {showHint ? 'Hide hint' : '💡 Show hint'}
          </button>
        )}

        {showHint && !locked && (
          <div className="type-hint">
            <span className="guide-tag">GUIDE</span> {step.hint}
          </div>
        )}
      </div>

      {locked && (
        <div className={`feedback-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="feedback-title">{isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}</div>
          {!isCorrect && (
            <div className="feedback-explain">Answer: <code>{step.answer}</code></div>
          )}
        </div>
      )}

      {!locked && (
        <button className="check-btn" disabled={!value.trim()} onClick={handleCheck}>
          CHECK ANSWER
        </button>
      )}
      {locked && isCorrect && (
        <button className="check-btn locked-correct" onClick={onCorrect}>CONTINUE →</button>
      )}
      {locked && !isCorrect && (
        <button className="check-btn locked-wrong" onClick={handleRetry}>TRY AGAIN</button>
      )}
    </div>
  );
}
