import { useState } from 'react';
import Editor from '@monaco-editor/react';
import './FixStep.css';

export default function FixStep({ step, onCorrect, onWrong }) {
  const [code, setCode] = useState(step.code);
  const [submitted, setSubmitted] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [result, setResult] = useState(null);

  const normalize = s => s.trim().replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ');

  function handleCheck() {
    if (submitted) return;
    setSubmitted(true);
    const correct = normalize(code) === normalize(step.answer);
    setResult(correct ? 'correct' : 'wrong');
    if (correct) {
      setTimeout(() => onCorrect(), 1400);
    } else {
      setTimeout(() => {
        setSubmitted(false);
        setResult(null);
        onWrong();
      }, 1600);
    }
  }

  return (
    <div className="fix-step">
      <div className="fix-header">
        <div className="fix-label">🐛 BUG HUNT — FIX THE BROKEN CODE</div>
        <p className="fix-prompt">{step.prompt}</p>
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

      <div className="fix-footer">
        <div className="fix-actions">
          {result === 'correct' && (
            <div className="fix-result correct">✓ BUG FIXED — SYSTEM RESTORED</div>
          )}
          {result === 'wrong' && (
            <div className="fix-result wrong">✗ STILL BROKEN — LOOK AGAIN</div>
          )}
          {!result && hintLevel > 0 && (
            <div className="fix-hint-box">
              <span className="aegis-tag">A.E.G.I.S.</span>
              {hintLevel === 1 && step.bugHint}
              {hintLevel >= 2 && `Bug type: ${step.bugType || 'typo'} — compare every command name to ones that worked.`}
            </div>
          )}
        </div>
        <div className="fix-btns">
          {!result && (
            <button
              className="hint-btn"
              onClick={() => setHintLevel(h => Math.min(h + 1, 2))}
            >
              💡 HINT {hintLevel > 0 ? `(${hintLevel})` : ''}
            </button>
          )}
          <button
            className="check-btn"
            disabled={submitted}
            onClick={handleCheck}
          >
            {submitted ? '⌛ CHECKING...' : 'CHECK FIX'}
          </button>
        </div>
      </div>
    </div>
  );
}
