import { useGame } from '../../contexts/GameContext';
import { getDailyMissions, getWeeklyChallenge, getTodayDate } from '../../data/dailymissions';
import './DailyMissions.css';

export default function DailyMissions() {
  const { completedLessons, stats, dailyStats, claimMission, claimedMissions = {} } = useGame();
  const today = getTodayDate();
  const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const daily = getDailyMissions(today);
  const weekly = getWeeklyChallenge(weekNum);

  function isClaimed(id) {
    return !!claimedMissions[`${today}:${id}`];
  }

  function isEarned(mission) {
    try { return mission.check(stats, completedLessons, dailyStats); } catch { return false; }
  }

  function handleClaim(mission) {
    if (isClaimed(mission.id) || !isEarned(mission)) return;
    claimMission(mission.id, mission.xp, today);
  }

  function missionStatus(mission) {
    if (isClaimed(mission.id)) return 'claimed';
    if (isEarned(mission)) return 'ready';
    return 'locked';
  }

  return (
    <div className="daily-missions">
      <div className="dm-header">
        <div className="dm-title">DAILY MISSIONS</div>
        <div className="dm-date">{today}</div>
      </div>

      <div className="dm-section">
        <div className="dm-section-label">TODAY</div>
        {daily.map(m => {
          const status = missionStatus(m);
          return (
            <div key={m.id} className={`mission-card ${status}`}>
              <div className="mission-info">
                <div className="mission-name">{m.title}</div>
                <div className="mission-desc">{m.desc}</div>
              </div>
              <div className="mission-right">
                <div className="mission-xp">+{m.xp} XP</div>
                <button
                  className={`mission-claim ${status}`}
                  disabled={status !== 'ready'}
                  onClick={() => handleClaim(m)}
                >
                  {status === 'claimed' ? '✓ DONE' : status === 'ready' ? 'CLAIM' : 'LOCKED'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dm-section">
        <div className="dm-section-label">WEEKLY CHALLENGE</div>
        {(() => {
          const status = missionStatus(weekly);
          return (
            <div className={`mission-card weekly ${status}`}>
              <div className="mission-info">
                <div className="mission-name">{weekly.title}</div>
                <div className="mission-desc">{weekly.desc}</div>
              </div>
              <div className="mission-right">
                <div className="mission-xp weekly-xp">+{weekly.xp} XP</div>
                <button
                  className={`mission-claim weekly-claim ${status}`}
                  disabled={status !== 'ready'}
                  onClick={() => handleClaim(weekly)}
                >
                  {status === 'claimed' ? '✓ DONE' : status === 'ready' ? 'CLAIM' : 'LOCKED'}
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      <div className="dm-stats">
        <div className="dm-section-label">STATS</div>
        <div className="dm-stat-grid">
          <div className="dm-stat"><span>{stats.scriptsRun || 0}</span><small>Scripts Run</small></div>
          <div className="dm-stat"><span>{stats.bugsFixed || 0}</span><small>Bugs Fixed</small></div>
          <div className="dm-stat"><span>{stats.linesWritten || 0}</span><small>Lines Written</small></div>
          <div className="dm-stat"><span>{completedLessons.length}</span><small>Lessons Done</small></div>
        </div>
      </div>
    </div>
  );
}
