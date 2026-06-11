import { useState, useMemo } from 'react';
import { useGame } from '../../contexts/GameContext';
import './PredictStep.css';

function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = ((s * 1664525) + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Normalize both legacy (string[] + correct index) and new ({text,correct,explanation}[]) formats
function normalizeOptions(step) {
  if (!Array.isArray(step.options)) return [];
  return step.options.map((opt, i) => {
    if (typeof opt === 'string') {
      return { text: opt, correct: i === step.correct, explanation: step.explanation || '' };
    }
    return { text: opt.text || String(opt), correct: !!opt.correct, explanation: opt.explanation || opt.feedback || '' };
  });
}

export default function PredictStep({ step, onCorrect, onWrong }) {
  const { trackStat } = useGame();
  const rawOptions = useMemo(() => normalizeOptions(step), [step]);

  // Stable shuffle per step render — seed from question text length + option count
  const shuffled = useMemo(() => {
    const seed = (step.question?.length || 0) * 37 + rawOptions.length * 13 + (step.id || '').length;
    return seededShuffle(rawOptions, seed);
  }, [rawOptions, step.question, step.id]);

  const correctIndex = shuffled.findIndex(o => o.correct);

  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const isCorrect = locked && selected === correctIndex;
  const isWrong = locked && selected !== correctIndex;

  function handleCheck() {
    if (selected === null || locked) return;
    setLocked(true);
    if (selected === correctIndex) {
      trackStat('predictionsCorrect', 1);
    }
  }

  function handleRetry() {
    setSelected(null);
    setLocked(false);
    if (onWrong) onWrong();
  }

  return (
    <div className="predict-step">
      <div className="predict-body">
        <div className="predict-label">PREDICT THE OUTPUT</div>
        <h2 className="predict-question">{step.question}</h2>
        {step.code && <pre className="predict-code">{step.code}</pre>}

        <div className="options-grid">
          {shuffled.map((opt, i) => {
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
          <div className="feedback-title">{isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}</div>
          <div className="feedback-explain">
            {shuffled[selected]?.explanation ||
              (isCorrect ? '' : `The answer is: ${shuffled[correctIndex]?.text}`)}
          </div>
        </div>
      )}

      {!locked && (
        <button className="check-btn" disabled={selected === null} onClick={handleCheck}>
          CHECK ANSWER
        </button>
      )}
      {locked && isCorrect && (
        <button className="check-btn locked-correct" onClick={onCorrect}>CONTINUE →</button>
      )}
      {locked && isWrong && (
        <button className="check-btn locked-wrong" onClick={handleRetry}>TRY AGAIN</button>
      )}
    </div>
  );
}
