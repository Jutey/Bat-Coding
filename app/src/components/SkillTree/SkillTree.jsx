import { useGame } from '../../contexts/GameContext';
import './SkillTree.css';

const SKILLS = [
  { id: 'output',    name: 'OUTPUT',     icon: '📺', lessons: [1,2,3,4,5,6,7,8,9], color: '#00ff41',
    levels: ['echo basics','multi-line','colors+title','ASCII art','professional menus','full displays'] },
  { id: 'memory',    name: 'MEMORY',     icon: '💾', lessons: [11,12,13,14,15,16,17,18,19], color: '#00ccff',
    levels: ['set variable','read variable','user input','health system','gold system','full character'] },
  { id: 'logic',     name: 'LOGIC',      icon: '🧠', lessons: [21,22,23,24,25,26,27,28,29], color: '#ff9900',
    levels: ['true/false','if statement','comparisons','nested if','decision trees','full branching'] },
  { id: 'loops',     name: 'LOOPS',      icon: '♾️',  lessons: [31,32,33,34,35,36,37,38,39], color: '#cc44ff',
    levels: ['labels','goto','infinite loop','game loop','timers','animation'] },
  { id: 'random',    name: 'RANDOMNESS', icon: '🎲', lessons: [41,42,43,44,45,46,47,48,49], color: '#ff4444',
    levels: ['%random%','coin flip','dice','loot drops','encounters','battle system'] },
  { id: 'files',     name: 'FILES',      icon: '📁', lessons: [51,52,53,54,55,56,57,58,59], color: '#ffdd00',
    levels: ['create file','read file','save state','high scores','profiles','database'] },
  { id: 'functions', name: 'FUNCTIONS',  icon: '⚙️', lessons: [61,62,63,64,65,66,67,68,69], color: '#00ffaa',
    levels: ['call','reusable code','menus','combat fn','shop fn','full rpg framework'] },
  { id: 'automation',name: 'AUTOMATION', icon: '🤖', lessons: [71,72,73,74,75,76,77,78,79], color: '#ff6644',
    levels: ['open programs','websites','timers','file ops','organizer','personal assistant'] },
  { id: 'network',   name: 'NETWORK',    icon: '📡', lessons: [81,82,83,84,85,86,87,88,89], color: '#44aaff',
    levels: ['ping','ipconfig','tree','netstat','tasklist','full scanner'] },
  { id: 'debug',     name: 'DEBUGGING',  icon: '🔧', lessons: [91,92,93,94,95,96,97,98,99,100], color: '#ff44aa',
    levels: ['typo bugs','variable bugs','logic bugs','runtime bugs','math bugs','multi-system bugs'] },
];

export default function SkillTree() {
  const { completedLessons } = useGame();

  function getSkillLevel(skill) {
    const done = skill.lessons.filter(n => completedLessons.some(id => id.includes(`lesson-${String(n).padStart(2,'0')}`)));
    return Math.min(skill.levels.length, Math.ceil(done.length / 1.5));
  }

  return (
    <div className="skill-tree">
      <div className="st-header">
        <div className="st-title">SKILL TREE</div>
        <div className="st-subtitle">Every lesson levels up your skills</div>
      </div>

      <div className="skills-grid">
        {SKILLS.map(skill => {
          const level = getSkillLevel(skill);
          const maxLevel = skill.levels.length;
          const pct = Math.round((level / maxLevel) * 100);

          return (
            <div key={skill.id} className="skill-card" style={{ '--sc': skill.color }}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-name-wrap">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">LVL {level} / {maxLevel}</div>
                </div>
                <div className="skill-pct">{pct}%</div>
              </div>

              <div className="skill-bar-wrap">
                <div className="skill-bar-fill" style={{ width: `${pct}%` }} />
              </div>

              <div className="skill-nodes">
                {skill.levels.map((lvlName, i) => (
                  <div key={i} className={`skill-node ${i < level ? 'unlocked' : ''}`}>
                    <div className="node-dot" />
                    <div className="node-label">{lvlName}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
