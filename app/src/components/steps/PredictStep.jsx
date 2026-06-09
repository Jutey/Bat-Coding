import { useState } from 'react';
import './PredictStep.css';

export default function PredictStep({ step, onCorrect, onWrong }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const correctIndex = step.options.findIndex(o => o.correct === true);

  function handleCheck() {
    if (selected === null || locked) return;
    setLocked(true);
    const correct = selected === correctIndex;
    setTimeout(() => {
      if (correct) onCorrect();
      else onWrong();
    }, 1600);
  }

  const isCorrect = locked && selected === correctIndex;
  const isWrong = locked && selected !== correctIndex;

  return (
    <div className="predict-step">
      <div className="predict-body">
        <div className="predict-label">WHAT DO YOU PREDICT?</div>
        <h2 className="predict-question">{step.question}</h2>

        {step.code && (
          <pre className="predict-code">{step.code}</pre>
        )}

        <div className="options-grid">
          {step.options.map((opt, i) => {
            let cls = 'option-btn';
            if (selected === i) cls += ' selected';
            if (locked && i === correctIndex) cls += ' correct';
            if (locked && selected === i && i !== correctIndex) cls += ' wrong';
            return (
              <button
                key={i}
                className={cls}
                onClick={() => !locked && setSelected(i)}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {locked && (
        <div className={`feedback-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="feedback-title">{isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}</div>
          <div className="feedback-explain">
            {step.options[selected]?.explanation}
          </div>
        </div>
      )}

      <button
        className={`check-btn ${locked ? (isCorrect ? 'locked-correct' : 'locked-wrong') : ''}`}
        disabled={selected === null}
        onClick={locked ? (isCorrect ? onCorrect : onWrong) : handleCheck}
      >
        {locked ? (isCorrect ? 'CONTINUE →' : 'TRY AGAIN') : 'CHECK ANSWER'}
      </button>
    </div>
  );
}
