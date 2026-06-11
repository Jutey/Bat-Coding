import { useState } from 'react';
import SpeakButton from '../SpeakButton';
import './FillStep.css';

// Support both legacy (template+blank) and new (before+after) formats
function deriveBeforeAfter(step) {
  if (step.before !== undefined) return { before: step.before, after: step.after || '' };
  if (step.template && step.blank) {
    const parts = step.template.split(step.blank);
    return { before: parts[0] || '', after: parts.slice(1).join(step.blank) || '' };
  }
  return { before: '', after: '' };
}

export default function FillStep({ step, onCorrect, onWrong, speak, isSupported }) {
  const { before, after } = deriveBeforeAfter(step);
  const [value, setValue] = useState('');
  const [locked, setLocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const normalize = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const isCorrect = normalize(value) === normalize(step.answer || '');

  function handleCheck() {
    if (!value.trim() || locked) return;
    setLocked(true);
    // correct: user clicks CONTINUE; wrong: user clicks TRY AGAIN
  }

  function handleRetry() {
    setValue('');
    setLocked(false);
    if (onWrong) onWrong();
  }

  return (
    <div className="fill-step">
      <div className="fill-body">
        <div className="fill-label">FILL IN THE BLANK</div>
        {step.prompt && (
          <div className="fill-prompt-row">
            <p className="fill-prompt">{step.prompt}</p>
            <SpeakButton speak={speak} isSupported={isSupported} text={step.prompt} label="prompt" />
          </div>
        )}

        <div className="fill-code-block">
          {before && <pre className="fill-code-text faded">{before}</pre>}
          <div className="fill-line-wrap">
            <span className={`fill-blank-wrap ${locked ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
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
          {after && <pre className="fill-code-text faded">{after}</pre>}
        </div>

        {!locked && (
          <button className="hint-link" onClick={() => setShowHint(v => !v)}>
            {showHint ? 'Hide hint' : '💡 Show hint'}
          </button>
        )}
        {showHint && !locked && (
          <div className="fill-hint">
            <span className="guide-tag">GUIDE</span> {step.hint || 'Think about which command fits here.'}
          </div>
        )}
      </div>

      {locked && (
        <div className={`feedback-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="feedback-title">
            {isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}
          </div>
          {!isCorrect && (
            <div className="feedback-explain">
              The answer is: <code>{step.answer}</code>
            </div>
          )}
        </div>
      )}

      {!locked && (
        <button className="check-btn" disabled={!value.trim()} onClick={handleCheck}>
          CHECK ANSWER
        </button>
      )}
      {locked && isCorrect && (
        <button className="check-btn locked-correct" onClick={onCorrect}>
          CONTINUE →
        </button>
      )}
      {locked && !isCorrect && (
        <button className="check-btn locked-wrong" onClick={handleRetry}>
          TRY AGAIN
        </button>
      )}
    </div>
  );
}
