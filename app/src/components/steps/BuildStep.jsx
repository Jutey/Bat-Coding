import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useEditorTheme, registerThemes } from '../../hooks/useEditorTheme';
import { useGame } from '../../contexts/GameContext';
import './BuildStep.css';

export default function BuildStep({ step, onComplete, onTriggerAchievement }) {
  const [code, setCode] = useState(step.starterCode || '@echo off\n');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const { theme } = useEditorTheme();
  const { trackStat } = useGame();

  const lineCount = code.split('\n').filter(l => l.trim()).length;
  const meetsMinimum = lineCount >= (step.minLines || 2);

  async function handleRun() {
    setRunning(true);
    setOutput('Running...');
    const result = await window.api.runBat(code);
    setOutput(result.output + (result.error ? '\nERRORS:\n' + result.error : ''));
    setRunning(false);
    setHasRun(true);
    trackStat('linesWritten', lineCount);
    trackStat('scriptsRun', 1);
  }

  function handleDone() {
    if (step.achievement) onTriggerAchievement(step.achievement);
    onComplete();
  }

  return (
    <div className="build-step">
      <div className="build-header">
        <div className="build-label">⚗️ LAB — BUILD IT</div>
        <p className="build-prompt">{step.prompt}</p>
      </div>

      <div className="build-editor-wrap">
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
            wordWrap: 'on',
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
            {lineCount} line{lineCount !== 1 ? 's' : ''}
            {step.minLines && !meetsMinimum && ` (need ${step.minLines})`}
          </span>
          {hasRun && meetsMinimum && <span className="run-badge">✓ Ran</span>}
        </div>
        <div className="build-btns">
          <button className="run-btn" disabled={running} onClick={handleRun}>
            {running ? '⌛' : '▶'} RUN
          </button>
          <button
            className="done-btn"
            disabled={!hasRun || !meetsMinimum}
            onClick={handleDone}
            title={!hasRun ? 'Run your code first' : !meetsMinimum ? `Write at least ${step.minLines} lines` : ''}
          >
            SUBMIT →
          </button>
        </div>
      </div>
    </div>
  );
}
