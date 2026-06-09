import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useEditorTheme, registerThemes } from '../../hooks/useEditorTheme';
import './Sandbox.css';

const TEMPLATES = {
  blank: {
    label: 'Blank',
    code: '@echo off\n\n',
  },
  hello: {
    label: 'Hello World',
    code: '@echo off\ntitle My First Script\ncolor 0A\necho Hello, World!\necho.\necho I made this with Batch!\npause\n',
  },
  menu: {
    label: 'Menu System',
    code: '@echo off\ntitle My Menu\ncolor 0B\n:menu\ncls\necho ==================\necho    MAIN MENU\necho ==================\necho.\necho 1. Option One\necho 2. Option Two\necho 3. Quit\necho.\nchoice /c 123 /m "Choose:"\nif %errorlevel%==1 goto option1\nif %errorlevel%==2 goto option2\nif %errorlevel%==3 exit\n:option1\necho You chose Option One!\npause\ngoto menu\n:option2\necho You chose Option Two!\npause\ngoto menu\n',
  },
  quiz: {
    label: 'Mini Quiz',
    code: '@echo off\nset score=0\necho QUIZ TIME!\necho.\nset /p ans1=What command prints text? \nif /i %ans1%==echo set /a score=score+1\nset /p ans2=What command clears the screen? \nif /i %ans2%==cls set /a score=score+1\necho.\necho Your score: %score% / 2\npause\n',
  },
  guesser: {
    label: 'Number Guesser',
    code: '@echo off\nset /a secret=%random% %% 10 + 1\nset tries=0\n:guess\nset /p guess=Guess 1-10: \nset /a tries=tries+1\nif %guess%==%secret% (\n  echo Correct in %tries% tries!\n  pause\n  exit\n)\nif %guess% lss %secret% echo Too low!\nif %guess% gtr %secret% echo Too high!\ngoto guess\n',
  },
};

const IS_WINDOWS = typeof window !== 'undefined' &&
  navigator.userAgentData?.platform?.toLowerCase().includes('win') ||
  (typeof navigator !== 'undefined' && /windows/i.test(navigator.userAgent));

export default function Sandbox({ onRun }) {
  const [code, setCode] = useState(TEMPLATES.blank.code);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [template, setTemplate] = useState('blank');
  const { theme } = useEditorTheme();
  const outputRef = useRef(null);

  function handleTemplateChange(e) {
    const key = e.target.value;
    setTemplate(key);
    setCode(TEMPLATES[key].code);
  }

  async function handleRun() {
    if (!IS_WINDOWS) {
      setOutput('[Windows only] Script execution requires Windows.\nYou can still write and edit code here.\n');
      return;
    }
    setRunning(true);
    setOutput('Running...\n');
    try {
      const result = await window.api.runBat(code);
      const outText = result?.output ?? '';
      const errText = result?.error ?? '';
      setOutput(outText + (errText ? '\n\nERRORS:\n' + errText : '') || '(no output)');
      if (onRun) {
        const lineCount = code.split('\n').filter(l => l.trim()).length;
        onRun(lineCount);
      }
    } catch (err) {
      setOutput('Runner error: ' + (err?.message ?? String(err)));
    } finally {
      setRunning(false);
      setTimeout(() => {
        if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
      }, 50);
    }
  }

  function handleClearOutput() {
    setOutput('');
  }

  return (
    <div className="sandbox">
      {/* Toolbar */}
      <div className="sandbox-toolbar">
        <div className="sandbox-toolbar-left">
          <label className="sandbox-label" htmlFor="sb-template">Template</label>
          <select
            id="sb-template"
            className="sandbox-select"
            value={template}
            onChange={handleTemplateChange}
          >
            {Object.entries(TEMPLATES).map(([key, t]) => (
              <option key={key} value={key}>{t.label}</option>
            ))}
          </select>
        </div>

        <div className="sandbox-toolbar-right">
          {!IS_WINDOWS && (
            <span className="sandbox-os-warn">Windows only — run disabled</span>
          )}
          <button
            className="sandbox-btn sandbox-btn-run"
            onClick={handleRun}
            disabled={running}
            title="Run script"
          >
            {running ? 'Running…' : '▶ Run'}
          </button>
          <button
            className="sandbox-btn sandbox-btn-clear"
            onClick={handleClearOutput}
            title="Clear output"
          >
            ✕ Clear
          </button>
        </div>
      </div>

      {/* Editor + Output layout */}
      <div className="sandbox-body">
        <div className="sandbox-editor-pane">
          <Editor
            height="100%"
            language="bat"
            value={code}
            theme={theme}
            onChange={val => setCode(val ?? '')}
            beforeMount={registerThemes}
            options={{
              fontSize: 14,
              fontFamily: "'Courier New', Consolas, monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              lineNumbers: 'on',
              wordWrap: 'on',
              automaticLayout: true,
              tabSize: 4,
              renderWhitespace: 'none',
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              scrollbar: {
                verticalScrollbarSize: 6,
                horizontalScrollbarSize: 6,
              },
            }}
          />
        </div>

        <div className="sandbox-output-pane">
          <div className="sandbox-output-header">
            <span className="sandbox-output-title">Output</span>
          </div>
          <pre
            ref={outputRef}
            className={`sandbox-output-body ${output ? '' : 'empty'}`}
          >
            {output || 'Press ▶ Run to execute your script…'}
          </pre>
        </div>
      </div>
    </div>
  );
}
