import { useEffect } from 'react';
import './RewardStep.css';

export default function RewardStep({ step, xpEarned, onFinish, onTriggerAchievement }) {
  useEffect(() => {
    if (step.achievement) onTriggerAchievement(step.achievement);
  }, []);

  return (
    <div className="reward-step">
      <div className="reward-body">
        <div className="reward-icon">⚡</div>
        <div className="reward-title">LESSON COMPLETE</div>

        <div className="xp-display">
          <span className="xp-num">+{xpEarned || step.xp || 100}</span>
          <span className="xp-label">XP</span>
        </div>

        {step.message && (
          <div className="reward-message">
            {step.message.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        {step.storyUpdate && (
          <div className="story-update">
            <div className="story-label">GRAND QUEST</div>
            <pre className="story-text">{step.storyUpdate}</pre>
          </div>
        )}
      </div>

      <button className="finish-btn" onClick={onFinish}>
        CONTINUE MISSION →
      </button>
    </div>
  );
}
