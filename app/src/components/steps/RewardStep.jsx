import { useEffect } from 'react';
import './RewardStep.css';

export default function RewardStep({ step, lessonXp, alreadyDone, onFinish, onTriggerAchievement }) {
  useEffect(() => {
    if (step.achievement) onTriggerAchievement(step.achievement);
  }, []);

  const xp = lessonXp || step.xp || 100;

  return (
    <div className="reward-step">
      <div className="reward-body">
        <div className="reward-icon">✓</div>
        <div className="reward-title">LESSON COMPLETE</div>

        {alreadyDone ? (
          <div className="xp-display already-done">
            <span className="xp-label">Already completed — no bonus XP</span>
          </div>
        ) : (
          <div className="xp-display">
            <span className="xp-num">+{xp}</span>
            <span className="xp-label">XP</span>
          </div>
        )}

        {step.storyUpdate && (
          <div className="lesson-summary">
            <pre className="summary-text">{step.storyUpdate}</pre>
          </div>
        )}
      </div>

      <button className="finish-btn" onClick={onFinish}>
        CONTINUE →
      </button>
    </div>
  );
}
