import { useState } from 'react';
import Editor from '@monaco-editor/react';
import './FixStep.css';

export default function FixStep({ step, onCorrect, onWrong }) {
  const [code, setCode] = useState(step.code || '');
  const [locked, setLocked] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [result, setResult] = useState(null);

  const normalize = s => s.trim().replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ');

  function handleCheck() {
    if (locked) return;
    setLocked(true);
    const ok = normalize(code) === normalize(step.answer);
    setResult(ok ? 'correct' : 'wrong');
    setTimeout(() => {
      if (ok) onCorrect();
      else {
        setLocked(false);
        setResult(null);
        onWrong();
      }
    }, 1600);
  }

  return (
    <div className="fix-step">
      <div className="fix-header">
        <div className="fix-label">🐛 BUG HUNT — FIX THE BROKEN CODE</div>
        {step.prompt && <p className="fix-prompt">{step.prompt}</p>}
      </div>

      <div className="fix-editor-wrap">
        <Editor
          height="100%"
          defaultLanguage="bat"
          theme="vs-dark"
          value={code}
          onChange={v => setCode(v || '')}
          options={{
            fontSize: 14,
            fontFamily: "'Courier New', monospace",
            minimap: { enabled: false },
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            padding: { top: 10, bottom: 10 },
            renderLineHighlight: 'line',
          }}
        />
      </div>

      {hintLevel > 0 && !result && (
        <div className="fix-hint-box">
          <span className="aegis-tag">A.E.G.I.S.</span>{' '}
          {hintLevel === 1 && (step.hint || 'Look carefully at each command name.')}
          {hintLevel >= 2 && (step.hint2 || step.hint || 'Compare to working code you wrote earlier.')}
        </div>
      )}

      {result && (
        <div className={`feedback-banner ${result}`}>
          <div className="feedback-title">
            {result === 'correct' ? '✓ BUG FIXED — SYSTEM RESTORED' : '✗ STILL BROKEN — LOOK AGAIN'}
          </div>
        </div>
      )}

      <div className="fix-footer">
        <button
          className="hint-btn"
          onClick={() => setHintLevel(h => Math.min(h + 1, 2))}
          disabled={hintLevel >= 2 || !!result}
        >
          💡 HINT {hintLevel > 0 ? `(${hintLevel}/2)` : ''}
        </button>
        <button
          className="check-btn"
          disabled={locked}
          onClick={handleCheck}
        >
          {locked ? '⌛ CHECKING...' : 'CHECK FIX'}
        </button>
      </div>
    </div>
  );
}
