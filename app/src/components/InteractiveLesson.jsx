import { useState, useEffect } from 'react';
import LearnStep from './steps/LearnStep';
import PredictStep from './steps/PredictStep';
import TypeStep from './steps/TypeStep';
import FillStep from './steps/FillStep';
import FixStep from './steps/FixStep';
import BuildStep from './steps/BuildStep';
import RewardStep from './steps/RewardStep';
import GuidePanel from './GuidePanel';
import NarrationControls from './NarrationControls';
import { useVoice } from '../hooks/useVoice';
import { isAdminMode } from './Settings/Settings';
import { getFullStepText } from '../utils/narration';
import './InteractiveLesson.css';

export default function InteractiveLesson({ lessonData, progress, onBack, onComplete, onTriggerAchievement }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [confirmSkip, setConfirmSkip] = useState(false);
  const alreadyDone = progress.completedLessons.includes(lessonData.id);
  const {
    speak, cancelSpeech, isSupported, narrationEnabled, toggleNarration,
    isSpeaking, isPaused, pauseSpeech, resumeSpeech,
  } = useVoice();

  const steps = lessonData.steps;
  const step = steps[stepIndex];
  const pct = Math.round((stepIndex / steps.length) * 100);

  // Auto-read every step from the top when narration is enabled
  useEffect(() => {
    cancelSpeech();
    if (narrationEnabled && isSupported) {
      speak(getFullStepText(step));
    }
    return () => cancelSpeech();
  }, [stepIndex, narrationEnabled]);

  function goNext() {
    if (stepIndex < steps.length - 1) setStepIndex(i => i + 1);
    setConfirmSkip(false);
  }

  // Stuck on a question/exercise? Skip it without credit (no XP/stat tracking
  // for that step) — second click confirms so it isn't a careless miss.
  const isSkippable = step?.type !== 'reward' && stepIndex < steps.length - 1;
  function handleSkip() {
    if (!isSkippable) return;
    if (!confirmSkip) {
      setConfirmSkip(true);
      setTimeout(() => setConfirmSkip(false), 4000);
      return;
    }
    goNext();
  }

  function handleFinish() {
    // Skip completion and XP in admin mode — view only
    if (!isAdminMode()) {
      onComplete(lessonData.id, lessonData.xp || 100);
    }
    onBack();
  }

  function renderStep() {
    const speakProps = { speak, isSupported };
    switch (step.type) {
      case 'learn':
        return <LearnStep key={stepIndex} step={step} onContinue={goNext} {...speakProps} />;
      case 'predict':
        return <PredictStep key={stepIndex} step={step} onCorrect={goNext} onWrong={() => {}} {...speakProps} />;
      case 'type':
        return <TypeStep key={stepIndex} step={step} onCorrect={goNext} onWrong={() => {}} {...speakProps} />;
      case 'fill':
        return <FillStep key={stepIndex} step={step} onCorrect={goNext} onWrong={() => {}} {...speakProps} />;
      case 'fix':
        return <FixStep key={stepIndex} step={step} onCorrect={goNext} onWrong={() => {}} {...speakProps} />;
      case 'build':
        return <BuildStep key={stepIndex} step={step} onComplete={goNext} onTriggerAchievement={onTriggerAchievement} {...speakProps} />;
      case 'reward':
        return <RewardStep key={stepIndex} step={step} lessonXp={lessonData.xp} alreadyDone={alreadyDone} onFinish={handleFinish} onTriggerAchievement={onTriggerAchievement} />;
      default:
        return <div style={{ padding: 32, color: '#7a9a7a' }}>Unknown step type: {step.type}</div>;
    }
  }

  return (
    <div className="interactive-lesson">
      {/* Top bar */}
      <div className="lesson-topbar">
        <button className="exit-btn" onClick={onBack}>✕</button>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>

        <div className="step-counter">{stepIndex + 1} / {steps.length}</div>

        {isSupported && (
          <>
            <button
              className="narration-toggle"
              onClick={toggleNarration}
              title={narrationEnabled ? 'Mute narration' : 'Enable narration'}
            >
              {narrationEnabled ? '🔊' : '🔇'}
            </button>
            <NarrationControls
              isSupported={isSupported}
              isSpeaking={isSpeaking}
              isPaused={isPaused}
              onPlay={() => speak(getFullStepText(step), { force: true })}
              onPause={pauseSpeech}
              onResume={resumeSpeech}
              onStop={cancelSpeech}
            />
          </>
        )}

        {isSkippable && (
          <button className="skip-btn" onClick={handleSkip} title="Skip this step (no credit)">
            {confirmSkip ? '⚠ Skip — sure?' : '⏭ Skip'}
          </button>
        )}

        {alreadyDone && <span className="done-chip">✓ Completed</span>}
      </div>

      {/* Step area + guide */}
      <div className="lesson-body">
        <div className="step-area">
          {renderStep()}
        </div>
        <GuidePanel lessonId={lessonData.id} isBoss={lessonData.isBoss} />
      </div>
    </div>
  );
}
