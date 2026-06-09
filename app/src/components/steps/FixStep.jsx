import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useEditorTheme, registerThemes } from '../../hooks/useEditorTheme';
import './FixStep.css';

export default function FixStep({ step, onCorrect, onWrong }) {
  const [code, setCode] = useState(step.code || '');
  const [locked, setLocked] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [result, setResult] = useState(null);
  const { theme } = useEditorTheme();

  const normalize = s => s.trim().replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ');
  // Support both hint and bugHint field names
  const hint1 = step.hint || step.bugHint || 'Look carefully at each command name.';
  const hint2 = step.hint2 || 'Compare to code you know works. Something is spelled wrong or in the wrong order.';

  function handleCheck() {
    if (locked) return;
    setLocked(true);
    const ok = normalize(code) === normalize(step.answer || '');
    setResult(ok ? 'correct' : 'wrong');
    setTimeout(() => {
      if (ok) onCorrect();
      else {
        setLocked(false);
        setResult(null);
        if (onWrong) onWrong();
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
          theme={theme}
          value={code}
          onChange={v => setCode(v || '')}
          beforeMount={registerThemes}
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
          <span className="guide-tag">GUIDE</span>{' '}
          {hintLevel === 1 ? hint1 : hint2}
        </div>
      )}

      {result && (
        <div className={`feedback-banner ${result}`}>
          <div className="feedback-title">
            {result === 'correct' ? '✓ BUG FIXED' : '✗ STILL BROKEN — LOOK AGAIN'}
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
        <button className="check-btn" disabled={locked} onClick={handleCheck}>
          {locked ? '⌛ CHECKING...' : 'CHECK FIX'}
        </button>
      </div>
    </div>
  );
}
