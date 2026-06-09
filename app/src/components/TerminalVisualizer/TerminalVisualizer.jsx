import './TerminalVisualizer.css';

function analyzeCode(code) {
  const lower = code.toLowerCase();
  const visuals = [];

  if (lower.includes('echo')) {
    const match = code.match(/echo\s+(.+)/i);
    const val = match ? match[1].trim() : '...';
    visuals.push({ icon: '💬', label: 'ECHO', value: val });
  }
  if (lower.includes('set ')) {
    const match = code.match(/set\s+([^=\n]+)=([^\n]*)/i);
    if (match) visuals.push({ icon: '🧠', label: 'VAR', value: `${match[1].trim()} = ${match[2].trim()}` });
    else visuals.push({ icon: '🧠', label: 'VAR', value: 'set ...' });
  }
  if (lower.includes('if ')) {
    visuals.push({ icon: '🚪', label: 'IF GATE', value: 'conditional branch' });
  }
  if (lower.includes('goto')) {
    visuals.push({ icon: '🔁', label: 'GOTO', value: 'loop / jump' });
  }
  if (lower.includes('%random%')) {
    visuals.push({ icon: '🎲', label: 'RANDOM', value: 'random number' });
  }
  if (lower.includes('> ')) {
    visuals.push({ icon: '💾', label: 'FILE WRITE', value: 'saving to file' });
  }
  if (lower.includes('call :')) {
    visuals.push({ icon: '📦', label: 'CALL', value: 'subroutine / function' });
  }

  return visuals;
}

export default function TerminalVisualizer({ code = '', output = '', isRunning = false }) {
  const visuals = analyzeCode(code);

  return (
    <div className="terminal-visualizer">
      {visuals.length > 0 && (
        <div className="viz-metaphors">
          {visuals.map((v, i) => (
            <div key={i} className="viz-chip">
              <span className="viz-icon">{v.icon}</span>
              <span className="viz-label">{v.label}</span>
              <span className="viz-value">{v.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className={`viz-terminal ${isRunning ? 'viz-scanning' : ''}`}>
        <div className="viz-terminal-bar">
          <span className="viz-dot red" />
          <span className="viz-dot yellow" />
          <span className="viz-dot green" />
          <span className="viz-terminal-label">OUTPUT</span>
          {isRunning && <span className="viz-running-badge">● RUNNING</span>}
        </div>
        <pre className="viz-output">{output || (isRunning ? 'Running...' : '(no output yet)')}</pre>
      </div>
    </div>
  );
}
