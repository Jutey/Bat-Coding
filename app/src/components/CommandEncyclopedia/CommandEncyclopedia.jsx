import { useState, useMemo } from 'react';
import { COMMANDS } from '../../data/commands';
import './CommandEncyclopedia.css';

const ALL_TAGS = [...new Set(COMMANDS.flatMap(c => c.tags))].sort();

export default function CommandEncyclopedia() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    return COMMANDS.filter(c => {
      const matchSearch = !search || c.cmd.includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
      const matchTag = !activeTag || c.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  return (
    <div className="cmd-enc">
      <div className="ce-header">
        <div className="ce-title">COMMAND ENCYCLOPEDIA</div>
        <div className="ce-subtitle">{COMMANDS.length} commands documented</div>
      </div>

      <div className="ce-search-row">
        <input
          className="ce-search"
          placeholder="Search commands..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          spellCheck={false}
        />
        <div className="ce-count">{filtered.length} results</div>
      </div>

      <div className="ce-tags">
        <button className={`ce-tag ${!activeTag ? 'active' : ''}`} onClick={() => setActiveTag(null)}>ALL</button>
        {ALL_TAGS.map(t => (
          <button key={t} className={`ce-tag ${activeTag === t ? 'active' : ''}`} onClick={() => setActiveTag(activeTag === t ? null : t)}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="cmd-list">
        {filtered.map(c => (
          <div key={c.cmd} className={`cmd-card ${expanded === c.cmd ? 'open' : ''}`} onClick={() => setExpanded(expanded === c.cmd ? null : c.cmd)}>
            <div className="cmd-summary">
              <code className="cmd-name">{c.cmd}</code>
              <div className="cmd-desc-short">{c.desc}</div>
              <div className="cmd-tags-row">
                {c.tags.map(t => <span key={t} className="cmd-tag">{t}</span>)}
              </div>
              <div className="cmd-world">W{c.world} L{c.lesson}</div>
            </div>
            {expanded === c.cmd && (
              <div className="cmd-detail">
                <div className="cmd-syntax-label">SYNTAX</div>
                <code className="cmd-syntax">{c.syntax}</code>
                <div className="cmd-example-label">EXAMPLE</div>
                <pre className="cmd-example">{c.example}</pre>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="ce-empty">No commands match your search</div>
        )}
      </div>
    </div>
  );
}
