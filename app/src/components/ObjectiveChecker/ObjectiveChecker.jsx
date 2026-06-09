import './ObjectiveChecker.css';

function checkObjective(obj, code, output) {
  const { type, value } = obj.check;
  switch (type) {
    case 'containsCommand':
      return code.toLowerCase().includes(value.toLowerCase());
    case 'outputContains':
      return output.toLowerCase().includes(value.toLowerCase());
    case 'containsLine':
      return code.includes(value);
    case 'minLines':
      return code.split('\n').filter(l => l.trim()).length >= value;
    default:
      return false;
  }
}

export default function ObjectiveChecker({ objectives = [], code = '', output = '' }) {
  if (!objectives.length) return null;

  return (
    <div className="objective-checker">
      <div className="obj-title">OBJECTIVES</div>
      <ul className="obj-list">
        {objectives.map((obj, i) => {
          const done = checkObjective(obj, code, output);
          return (
            <li key={i} className={`obj-item ${done ? 'obj-done' : ''}`}>
              <span className={`obj-icon ${done ? 'obj-check' : 'obj-circle'}`}>
                {done ? '✓' : '○'}
              </span>
              <span className="obj-label">{obj.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
