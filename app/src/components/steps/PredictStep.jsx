import { useState } from 'react';
import './PredictStep.css';

export default function PredictStep({ step, onCorrect, onWrong }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(i) {
    if (submitted) return;
    setSelected(i);
  }

  function handleCheck() {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (selected === step.correct) {
      setTimeout(() => onCorrect(), 1400);
    } else {
      onWrong();
    }
  }

  const isCorrect = submitted && selected === step.correct;
  const isWrong = submitted && selected !== step.correct;

  return (
    <div className="predict-step">
      <div className="predict-body">
        <div className="predict-label">WHAT DO YOU PREDICT?</div>
        <h2 className="predict-question">{step.question}</h2>

        {step.code && (
          <pre className="predict-code">{step.code}</pre>
        )}

        <div className="options-grid">
          {step.options.map((opt, i) => (
            <button
              key={i}
              className={`option-btn
                ${selected === i ? 'selected' : ''}
                ${submitted && i === step.correct ? 'correct' : ''}
                ${submitted && selected === i && i !== step.correct ? 'wrong' : ''}
              `}
              onClick={() => handleSelect(i)}
            >
              <span className="option-letter">{String.fromCharCode(65 + i)}</span>
              <pre className="option-text">{opt}</pre>
            </button>
          ))}
        </div>

        {submitted && (
          <div className={`feedback-box ${isCorrect ? 'correct' : 'wrong'}`}>
            <div className="feedback-icon">{isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}</div>
            <p>{step.explanation}</p>
          </div>
        )}
      </div>

      <button
        className="check-btn"
        disabled={selected === null}
        onClick={handleCheck}
      >
        {submitted ? (isCorrect ? 'CONTINUE →' : 'TRY AGAIN') : 'CHECK ANSWER'}
      </button>
    </div>
  );
}
