import './TitleBar.css';

export default function TitleBar({ progress }) {
  const completed = progress?.completedLessons?.length || 0;
  const achievements = progress?.achievements?.length || 0;
  const lines = progress?.totalLinesWritten || 0;

  return (
    <div className="titlebar">
      <div className="titlebar-left">
        <span className="titlebar-logo">⚡ BAT CODING</span>
        <span className="titlebar-tag">Digital Repair Corps</span>
      </div>
      <div className="titlebar-center">
        <span className="stat">{completed} <small>lessons</small></span>
        <span className="stat-sep">·</span>
        <span className="stat">{achievements} <small>achievements</small></span>
        <span className="stat-sep">·</span>
        <span className="stat">{lines} <small>lines written</small></span>
      </div>
      <div className="titlebar-right titlebar-drag">
        <button className="wbtn" onClick={() => window.api.windowMinimize()}>─</button>
        <button className="wbtn" onClick={() => window.api.windowMaximize()}>□</button>
        <button className="wbtn wbtn-close" onClick={() => window.api.windowClose()}>✕</button>
      </div>
    </div>
  );
}
