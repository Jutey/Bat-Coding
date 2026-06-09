import { useState, useEffect } from 'react';
import WorldMap from './components/WorldMap';
import LessonView from './components/LessonView';
import TitleBar from './components/TitleBar';
import AchievementToast from './components/AchievementToast';
import { getAchievement } from './data/achievements';
import './App.css';

export default function App() {
  const [worlds, setWorlds] = useState([]);
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [progress, setProgress] = useState({ completedLessons: [], achievements: [], totalLinesWritten: 0 });
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    window.api.getWorlds().then(setWorlds);
    window.api.getProgress().then(setProgress);
  }, []);

  async function handleCompleteLesson(lessonId) {
    const p = await window.api.completeLesson(lessonId);
    setProgress(p);
    if (p.completedLessons.length === 1) triggerAchievement('first_signal');
    if (p.completedLessons.length >= 10) triggerAchievement('repairman');
  }

  async function triggerAchievement(id) {
    const result = await window.api.unlockAchievement(id);
    if (result.unlocked) {
      const ach = getAchievement(id);
      if (ach) {
        const key = Date.now() + Math.random();
        setToasts(prev => [...prev, { ...ach, key }]);
        setProgress(p => ({ ...p, achievements: [...(p.achievements || []), id] }));
      }
    }
  }

  function dismissToast(key) {
    setToasts(prev => prev.filter(t => t.key !== key));
  }

  return (
    <div className="app">
      <TitleBar progress={progress} />
      <div className="app-body">
        {!selectedLesson ? (
          <WorldMap
            worlds={worlds}
            progress={progress}
            selectedWorld={selectedWorld}
            onSelectWorld={setSelectedWorld}
            onSelectLesson={setSelectedLesson}
            onTriggerAchievement={triggerAchievement}
          />
        ) : (
          <LessonView
            lesson={selectedLesson}
            progress={progress}
            onBack={() => setSelectedLesson(null)}
            onComplete={handleCompleteLesson}
            onTriggerAchievement={triggerAchievement}
          />
        )}
      </div>
      <div className="toast-stack">
        {toasts.map(t => (
          <AchievementToast key={t.key} achievement={t} onDismiss={() => dismissToast(t.key)} />
        ))}
      </div>
    </div>
  );
}
