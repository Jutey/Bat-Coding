import { useState } from 'react';
import './PredictStep.css';

// Normalize options — supports both legacy (string[]) and new ({text,correct,explanation}[]) formats
function normalizeOptions(step) {
  return step.options.map((opt, i) => {
    if (typeof opt === 'string') {
      return { text: opt, correct: i === step.correct, explanation: step.explanation || '' };
    }
    return opt;
  });
}

export default function PredictStep({ step, onCorrect, onWrong }) {
  const options = normalizeOptions(step);
  const correctIndex = options.findIndex(o => o.correct === true);

  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const isCorrect = locked && selected === correctIndex;
  const isWrong = locked && selected !== correctIndex;

  function handleCheck() {
    if (selected === null || locked) return;
    setLocked(true);
    if (selected === correctIndex) {
      setTimeout(() => onCorrect(), 1400);
    }
    // wrong: stay locked, user clicks TRY AGAIN to reset
  }

  function handleRetry() {
    setSelected(null);
    setLocked(false);
    if (onWrong) onWrong(); // notify parent for stats (no hearts)
  }

  return (
    <div className="predict-step">
      <div className="predict-body">
        <div className="predict-label">WHAT DO YOU PREDICT?</div>
        <h2 className="predict-question">{step.question}</h2>

        {step.code && <pre className="predict-code">{step.code}</pre>}

        <div className="options-grid">
          {options.map((opt, i) => {
            let cls = 'option-btn';
            if (selected === i && !locked) cls += ' selected';
            if (locked && i === correctIndex) cls += ' correct';
            if (locked && selected === i && i !== correctIndex) cls += ' wrong';
            return (
              <button key={i} className={cls} onClick={() => !locked && setSelected(i)}>
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {locked && (
        <div className={`feedback-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="feedback-title">
            {isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}
          </div>
          <div className="feedback-explain">
            {options[selected]?.explanation ||
              (isCorrect
                ? `${options[correctIndex]?.text} is right.`
                : `The correct answer is: ${options[correctIndex]?.text}`)}
          </div>
        </div>
      )}

      {!locked && (
        <button className="check-btn" disabled={selected === null} onClick={handleCheck}>
          CHECK ANSWER
        </button>
      )}
      {locked && isCorrect && (
        <button className="check-btn locked-correct" onClick={onCorrect}>
          CONTINUE →
        </button>
      )}
      {locked && isWrong && (
        <button className="check-btn locked-wrong" onClick={handleRetry}>
          TRY AGAIN
        </button>
      )}
    </div>
  );
}
