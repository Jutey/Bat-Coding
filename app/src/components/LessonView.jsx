import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from '@monaco-editor/react';
import GuidePanel from './GuidePanel';
import InteractiveLesson from './InteractiveLesson';
import MissionView from './MissionView/MissionView';
import { getLessonData } from '../data/lessons/index.js';
import { useGame } from '../contexts/GameContext';
import './LessonView.css';

const TABS = ['LESSON', 'EDITOR', 'CHALLENGE'];

export default function LessonView({ lesson, progress, onBack, onComplete, onTriggerAchievement }) {
  // Use interactive lesson if we have structured data for this lesson
  const lessonData = getLessonData(lesson.worldId, lesson.id);
  if (lessonData) {
    return (
      <InteractiveLesson
        lessonData={lessonData}
        progress={progress}
        onBack={onBack}
        onComplete={onComplete}
        onTriggerAchievement={onTriggerAchievement}
      />
    );
  }

  // Use MissionView for lessons that have objectives or voiceIntro (free-build/sandbox mode)
  if (lesson.objectives || lesson.voiceIntro) {
    return (
      <MissionView
        lesson={lesson}
        progress={progress}
        onBack={onBack}
        onComplete={onComplete}
        onTriggerAchievement={onTriggerAchievement}
      />
    );
  }

  const { trackStat } = useGame();
  const [tab, setTab] = useState('LESSON');
  const [lessonMd, setLessonMd] = useState('');
  const [code, setCode] = useState('');
  const [challengeCode, setChallengeCode] = useState('');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [showAegis, setShowAegis] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const isDone = progress.completedLessons.includes(lesson.worldId + '/' + lesson.id);

  useEffect(() => {
    window.api.readLesson(lesson.path).then(setLessonMd);
    window.api.readBat(lesson.path, 'starter.bat').then(c => {
      // Strip the instructor REM notes from challenge bat
      setCode(c);
    });
    if (lesson.hasChallenge) {
      window.api.readBat(lesson.path, 'challenge.bat').then(c => {
        // Strip solution hints from challenge file for student view
        const cleaned = c.split('\n').filter(l => !l.trim().startsWith('REM BUG') && !l.trim().startsWith('REM TYPE') && !l.trim().startsWith('REM DIFF') && !l.trim().startsWith('REM ===') && !l.trim().startsWith('REM NOTE')).join('\n').trim();
        setChallengeCode(cleaned);
      });
    }
  }, [lesson]);

  async function runCode(codeToRun) {
    setRunning(true);
    setOutput('Running...');
    const result = await window.api.runBat(codeToRun);
    const lines = (result.output || '').split('\n').length;
    trackStat('linesWritten', lines);
    trackStat('scriptsRun', 1);
    setOutput(result.output + (result.error ? '\n\nERRORS:\n' + result.error : ''));
    setRunning(false);

    // First run achievement
    onTriggerAchievement('first_signal');
  }

  async function markDone() {
    await onComplete(lesson.worldId + '/' + lesson.id);
    onBack();
  }

  const currentCode = tab === 'CHALLENGE' ? challengeCode : code;
  const setCurrentCode = tab === 'CHALLENGE' ? setChallengeCode : setCode;

  return (
    <div className="lesson-view">
      {/* Left panel */}
      <div className="lesson-left">
        <div className="lesson-header">
          <button className="back-btn" onClick={onBack}>← BACK</button>
          <div className="lesson-title-area">
            <div className="lesson-breadcrumb">{lesson.worldId.replace(/-/g, ' ').toUpperCase()}</div>
            <div className="lesson-title">{lesson.name}</div>
          </div>
          {isDone && <span className="done-badge">✓ COMPLETE</span>}
        </div>

        <div className="tab-bar">
          {TABS.filter(t => t !== 'CHALLENGE' || lesson.hasChallenge).map(t => (
            <button
              key={t}
              className={`tab-btn ${tab === t ? 'active' : ''} ${t === 'CHALLENGE' ? 'tab-challenge' : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'CHALLENGE' ? '🐛 BUG HUNT' : t}
            </button>
          ))}
        </div>

        <div className="lesson-content">
          {tab === 'LESSON' && (
            <div className="markdown-body">
              <ReactMarkdown>{lessonMd}</ReactMarkdown>
            </div>
          )}

          {(tab === 'EDITOR' || tab === 'CHALLENGE') && (
            <div className="editor-pane">
              <div className="editor-toolbar">
                <span className="editor-label">
                  {tab === 'CHALLENGE' ? '⚠ BROKEN CODE — FIND THE BUG' : 'CODE EDITOR'}
                </span>
                <div className="editor-actions">
                  {tab === 'CHALLENGE' && (
                    <button
                      className="hint-btn"
                      onClick={() => { setShowAegis(true); setHintLevel(h => h + 1); }}
                    >
                      💡 HINT ({hintLevel})
                    </button>
                  )}
                  <button
                    className="run-btn"
                    disabled={running}
                    onClick={() => runCode(currentCode)}
                  >
                    {running ? '⌛ RUNNING...' : '▶ RUN'}
                  </button>
                  {tab === 'CHALLENGE' && lesson.hasSolution && (
                    <button
                      className="solution-btn"
                      onClick={() => window.api.readBat(lesson.path, 'solution.bat').then(s => setCurrentCode(s))}
                    >
                      SHOW SOLUTION
                    </button>
                  )}
                </div>
              </div>

              <div className="editor-wrapper">
                <Editor
                  height="100%"
                  defaultLanguage="bat"
                  theme="vs-dark"
                  value={currentCode}
                  onChange={v => setCurrentCode(v || '')}
                  options={{
                    fontSize: 14,
                    fontFamily: "'Courier New', monospace",
                    minimap: { enabled: false },
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    padding: { top: 12, bottom: 12 },
                    renderLineHighlight: 'line',
                  }}
                />
              </div>

              {output && (
                <div className="output-panel">
                  <div className="output-label">OUTPUT</div>
                  <pre className="output-text">{output}</pre>
                </div>
              )}
            </div>
          )}
        </div>

        {tab === 'LESSON' && !isDone && (
          <div className="lesson-footer">
            <button className="complete-btn" onClick={markDone}>
              ✓ MARK LESSON COMPLETE
            </button>
          </div>
        )}
      </div>

      <GuidePanel lessonId={lesson.id} isBoss={lesson.isBoss} />
    </div>
  );
}
