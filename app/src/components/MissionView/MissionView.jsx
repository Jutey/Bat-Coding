import { useState, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import ObjectiveChecker from '../ObjectiveChecker/ObjectiveChecker';
import TerminalVisualizer from '../TerminalVisualizer/TerminalVisualizer';
import { useVoice } from '../../hooks/useVoice';
import './MissionView.css';

export default function MissionView({ lesson, progress, onBack, onComplete, onTriggerAchievement }) {
  const [code, setCode] = useState(lesson.starterCode || '@echo off\n');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hintIndex, setHintIndex] = useState(-1);
  const [completed, setCompleted] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  const { speak, cancelSpeech, isSupported, startListening, stopListening, isListening, parseCommand } = useVoice();

  const objectives = lesson.objectives || [];
  const hints = lesson.hints || [];
  const voiceIntro = lesson.voiceIntro || `Mission: ${lesson.name}. Write your batch script to complete the objectives.`;

  function checkAllObjectives() {
    if (!objectives.length) return false;
    return objectives.every(obj => {
      const { type, value } = obj.check;
      switch (type) {
        case 'containsCommand': return code.toLowerCase().includes(value.toLowerCase());
        case 'outputContains': return output.toLowerCase().includes(value.toLowerCase());
        case 'containsLine': return code.includes(value);
        case 'minLines': return code.split('\n').filter(l => l.trim()).length >= value;
        default: return false;
      }
    });
  }

  useEffect(() => {
    if (!completed && objectives.length > 0 && checkAllObjectives()) {
      const xp = 50 + objectives.length * 10;
      setXpEarned(xp);
      setCompleted(true);
    }
  }, [code, output]);

  async function handleRun() {
    setIsRunning(true);
    setOutput('Running...');
    const result = await window.api.runBat(code);
    setOutput(result.output + (result.error ? '\n\nERRORS:\n' + result.error : ''));
    setIsRunning(false);
    if (onTriggerAchievement) onTriggerAchievement('first_signal');
  }

  function handleCheck() {
    if (checkAllObjectives()) {
      speak('All objectives complete! Great job!');
    } else {
      const failing = objectives.filter(obj => {
        const { type, value } = obj.check;
        switch (type) {
          case 'containsCommand': return !code.toLowerCase().includes(value.toLowerCase());
          case 'outputContains': return !output.toLowerCase().includes(value.toLowerCase());
          case 'containsLine': return !code.includes(value);
          case 'minLines': return code.split('\n').filter(l => l.trim()).length < value;
          default: return true;
        }
      });
      speak(`Still need to: ${failing.map(o => o.label).join(', ')}`);
    }
  }

  function handleHint() {
    if (!hints.length) { speak('No hints available for this mission.'); return; }
    const next = (hintIndex + 1) % hints.length;
    setHintIndex(next);
    speak(hints[next]);
  }

  function handleExplainCode() {
    const lines = code.split('\n').filter(l => l.trim());
    const explanations = lines.map(line => {
      const l = line.trim().toLowerCase();
      if (l.startsWith('@echo off')) return 'at echo off hides command output';
      if (l.startsWith('echo')) return `echo prints: ${line.trim().slice(5)}`;
      if (l.startsWith('set /p')) return 'set /p asks the user for input';
      if (l.startsWith('set')) return `set creates a variable: ${line.trim().slice(4)}`;
      if (l.startsWith('pause')) return 'pause waits for a key press';
      if (l.startsWith('cls')) return 'cls clears the screen';
      if (l.startsWith('goto')) return `goto jumps to a label: ${line.trim().slice(5)}`;
      if (l.startsWith('if')) return `if checks a condition: ${line.trim().slice(3)}`;
      if (l.startsWith('rem')) return `rem is a comment: ${line.trim().slice(4)}`;
      return `line: ${line.trim()}`;
    });
    speak(explanations.join('. '));
  }

  function handleReset() {
    setCode(lesson.starterCode || '@echo off\n');
    setOutput('');
  }

  function handleStop() {
    setIsRunning(false);
    cancelSpeech();
  }

  function handleVoice() {
    if (isListening) {
      stopListening();
    } else {
      startListening((transcript) => {
        const cmd = parseCommand(transcript);
        if (!cmd) return;
        if (cmd === 'run') handleRun();
        else if (cmd === 'check') handleCheck();
        else if (cmd === 'hint') handleHint();
        else if (cmd === 'reset') handleReset();
        else if (cmd === 'stop') handleStop();
        else if (cmd === 'explain') handleExplainCode();
        else if (cmd && cmd.action === 'insert') {
          setCode(prev => prev + '\n' + cmd.code);
        }
      });
    }
  }

  function handleCompleteConfirm() {
    if (onComplete) onComplete(lesson.worldId + '/' + lesson.id, xpEarned);
    onBack();
  }

  return (
    <div className="mission-view">
      {/* Top bar */}
      <div className="mission-topbar">
        <button className="mission-back-btn" onClick={onBack}>← BACK</button>
        <div className="mission-title">{lesson.name}</div>
        <div className="mission-xp">+{xpEarned} XP</div>
      </div>

      <div className="mission-panels">
        {/* LEFT PANEL */}
        <div className="mission-left">
          <div className="mission-brief">
            <div className="mission-section-label">MISSION BRIEF</div>
            <p className="mission-brief-text">{voiceIntro}</p>
            {isSupported && (
              <button className="mission-icon-btn" onClick={() => speak(voiceIntro)} title="Read Aloud">
                🔊 Read Aloud
              </button>
            )}
          </div>

          <ObjectiveChecker objectives={objectives} code={code} output={output} />

          {hints.length > 0 && (
            <div className="mission-hints">
              <div className="mission-section-label">HINTS</div>
              {hintIndex >= 0 && (
                <div className="mission-hint-text">{hints[hintIndex]}</div>
              )}
              <button className="mission-icon-btn" onClick={handleHint}>
                💡 {hintIndex < 0 ? 'Show Hint' : `Hint ${hintIndex + 1}/${hints.length}`}
              </button>
            </div>
          )}

          {isSupported && (
            <button
              className={`mission-mic-btn ${isListening ? 'mic-active' : ''}`}
              onClick={handleVoice}
            >
              {isListening ? '🎙 Listening...' : '🎙 Voice Command'}
            </button>
          )}
        </div>

        {/* CENTER PANEL */}
        <div className="mission-center">
          <div className="mission-editor-wrapper">
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
                wordWrap: 'on',
                padding: { top: 12, bottom: 12 },
              }}
            />
          </div>

          <div className="mission-action-bar">
            <button className="action-btn action-run" onClick={handleRun} disabled={isRunning}>
              {isRunning ? '⌛' : '▶'} RUN
            </button>
            <button className="action-btn action-check" onClick={handleCheck}>
              ✓ CHECK
            </button>
            <button className="action-btn action-hint" onClick={handleHint}>
              💡 HINT
            </button>
            {isSupported && (
              <button className="action-btn action-explain" onClick={handleExplainCode}>
                🔊 EXPLAIN
              </button>
            )}
            {isSupported && (
              <button className={`action-btn action-mic ${isListening ? 'mic-active' : ''}`} onClick={handleVoice}>
                🎙 MIC
              </button>
            )}
            <button className="action-btn action-reset" onClick={handleReset}>
              ↺ RESET
            </button>
            <button className="action-btn action-stop" onClick={handleStop} disabled={!isRunning}>
              ■ STOP
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="mission-right">
          <TerminalVisualizer code={code} output={output} isRunning={isRunning} />
        </div>
      </div>

      {/* Completion overlay */}
      {completed && (
        <div className="mission-complete-overlay">
          <div className="mission-complete-card">
            <div className="complete-icon">🏆</div>
            <div className="complete-title">MISSION COMPLETE!</div>
            <div className="complete-xp">+{xpEarned} XP</div>
            <div className="complete-sub">All objectives passed.</div>
            <button className="complete-btn" onClick={handleCompleteConfirm}>
              CONTINUE →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
