import { useState } from 'react';
import Editor from '@monaco-editor/react';
import './BuildStep.css';

export default function BuildStep({ step, onComplete, onTriggerAchievement }) {
  const [code, setCode] = useState(step.starterCode || '@echo off\n');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const lineCount = code.split('\n').filter(l => l.trim()).length;
  const meetsMinimum = lineCount >= (step.minLines || 2);

  async function handleRun() {
    setRunning(true);
    setOutput('Running...');
    const result = await window.api.runBat(code);
    setOutput(result.output + (result.error ? '\nERRORS:\n' + result.error : ''));
    setRunning(false);
    setHasRun(true);
    if (step.achievement) onTriggerAchievement(step.achievement);
  }

  function handleDone() {
    window.api.addLines(lineCount);
    onComplete();
  }

  return (
    <div className="build-step">
      <div className="build-header">
        <div className="build-label">🔬 THE LAB — BUILD IT</div>
        <p className="build-prompt">{step.prompt}</p>
      </div>

      <div className="build-editor-wrap">
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
          }}
        />
      </div>

      {output && (
        <div className="build-output">
          <div className="output-label">OUTPUT</div>
          <pre className="output-text">{output}</pre>
        </div>
      )}

      <div className="build-footer">
        <div className="build-status">
          <span className={`line-count ${meetsMinimum ? 'met' : ''}`}>
            {lineCount} line{lineCount !== 1 ? 's' : ''} written
            {step.minLines && !meetsMinimum && ` (need ${step.minLines})`}
          </span>
          {hasRun && meetsMinimum && (
            <span className="run-badge">✓ Ran successfully</span>
          )}
        </div>
        <div className="build-btns">
          <button className="run-btn" disabled={running} onClick={handleRun}>
            {running ? '⌛' : '▶'} RUN
          </button>
          <button
            className="done-btn"
            disabled={!hasRun || !meetsMinimum}
            onClick={handleDone}
          >
            SUBMIT →
          </button>
        </div>
      </div>
    </div>
  );
}
