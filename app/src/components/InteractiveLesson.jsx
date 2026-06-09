import { useState, useEffect } from 'react';
import LearnStep from './steps/LearnStep';
import PredictStep from './steps/PredictStep';
import TypeStep from './steps/TypeStep';
import FillStep from './steps/FillStep';
import FixStep from './steps/FixStep';
import BuildStep from './steps/BuildStep';
import RewardStep from './steps/RewardStep';
import AegisPanel from './AegisPanel';
import { useVoice } from '../hooks/useVoice';
import './InteractiveLesson.css';

const MAX_HEARTS = 3;

export default function InteractiveLesson({ lessonData, progress, onBack, onComplete, onTriggerAchievement }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [xpEarned, setXpEarned] = useState(0);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [narrationEnabled, setNarrationEnabled] = useState(
    () => localStorage.getItem('narration_enabled') !== 'false'
  );

  const { speak, cancelSpeech, isSupported } = useVoice();

  function toggleNarration() {
    const next = !narrationEnabled;
    setNarrationEnabled(next);
    localStorage.setItem('narration_enabled', String(next));
    if (!next) cancelSpeech();
  }

  // Auto-speak learn steps when narration is enabled
  useEffect(() => {
    const step = steps[stepIndex];
    if (narrationEnabled && isSupported && step && step.type === 'learn') {
      speak(step.body || step.title || '');
    }
  }, [stepIndex, narrationEnabled]);

  const steps = lessonData.steps;
  const step = steps[stepIndex];
  const pct = Math.round((stepIndex / steps.length) * 100);

  function goNext() {
    if (stepIndex < steps.length - 1) {
      setStepIndex(i => i + 1);
    }
  }

  function handleCorrect() {
    const pts = 10;
    setXpEarned(x => x + pts);
    goNext();
  }

  function handleWrong() {
    setHearts(h => Math.max(0, h - 1));
    setWrongFlash(true);
    setTimeout(() => setWrongFlash(false), 600);
  }

  function handleFinish() {
    onComplete(lessonData.id, xpEarned);
    onBack();
  }

  function renderStep() {
    switch (step.type) {
      case 'learn':
        return <LearnStep step={step} onContinue={goNext} onSpeak={isSupported ? speak : null} />;
      case 'predict':
        return <PredictStep step={step} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'type':
        return <TypeStep step={step} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'fill':
        return <FillStep step={step} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'fix':
        return <FixStep step={step} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'build':
        return <BuildStep step={step} onComplete={goNext} onTriggerAchievement={onTriggerAchievement} />;
      case 'reward':
        return <RewardStep step={step} xpEarned={xpEarned} onFinish={handleFinish} onTriggerAchievement={onTriggerAchievement} />;
      default:
        return <div style={{ padding: 32, color: '#7a9a7a' }}>Unknown step type: {step.type}</div>;
    }
  }

  return (
    <div className={`interactive-lesson ${wrongFlash ? 'wrong-flash' : ''}`}>
      {/* Top bar */}
      <div className="lesson-topbar">
        <button className="exit-btn" onClick={onBack}>✕</button>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>

        <div className="hearts">
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <span key={i} className={`heart ${i < hearts ? 'full' : 'empty'}`}>
              {i < hearts ? '♥' : '♡'}
            </span>
          ))}
        </div>

        <div className="xp-counter">+{xpEarned} XP</div>

        {isSupported && (
          <button
            className="narration-toggle"
            onClick={toggleNarration}
            title={narrationEnabled ? 'Disable narration' : 'Enable narration'}
          >
            {narrationEnabled ? '🔊' : '🔇'}
          </button>
        )}
      </div>

      {/* Step area + aegis */}
      <div className="lesson-body">
        <div className="step-area">
          {renderStep()}
        </div>

        <AegisPanel
          hintLevel={0}
          lessonId={lessonData.id}
          isBoss={lessonData.isBoss}
        />
      </div>
    </div>
  );
}
