import { useEffect } from 'react';
import './AchievementToast.css';

export default function AchievementToast({ achievement, onDismiss }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div className="achievement-toast" onClick={onDismiss}>
      <div className="toast-icon">{achievement.icon}</div>
      <div className="toast-body">
        <div className="toast-label">ACHIEVEMENT UNLOCKED</div>
        <div className="toast-title">{achievement.title}</div>
        <div className="toast-desc">{achievement.desc}</div>
      </div>
    </div>
  );
}
