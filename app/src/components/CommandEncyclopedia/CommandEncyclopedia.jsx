import { useState, useMemo } from 'react';
import { COMMANDS } from '../../data/commands';
import { useVoice } from '../../hooks/useVoice';
import './CommandEncyclopedia.css';

const ALL_TAGS = [...new Set(COMMANDS.flatMap(c => c.tags))].sort();

export default function CommandEncyclopedia() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const { speak, isSupported } = useVoice();

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return COMMANDS.filter(c => {
      const matchSearch = !q || c.cmd.includes(q) || c.desc.toLowerCase().includes(q) || c.tags.some(t => t.includes(q));
      const matchTag = !activeTag || c.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  return (
    <div className="cmd-enc">
      <div className="ce-header">
        <div className="ce-title">COMMAND BOOK</div>
        <div className="ce-subtitle">{COMMANDS.length} Batch commands documented</div>
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
          <div key={c.cmd} className={`cmd-card ${expanded === c.cmd ? 'open' : ''}`}>
            <div className="cmd-summary" onClick={() => setExpanded(expanded === c.cmd ? null : c.cmd)}>
              <div className="cmd-summary-left">
                <code className="cmd-name">{c.cmd}</code>
                <div className="cmd-desc-short">{c.desc}</div>
              </div>
              <div className="cmd-summary-right">
                <div className="cmd-tags-row">{c.tags.map(t => <span key={t} className="cmd-tag">{t}</span>)}</div>
                <div className="cmd-world-badge">W{c.world} L{c.lesson}</div>
              </div>
            </div>

            {expanded === c.cmd && (
              <div className="cmd-detail">
                <div className="cmd-detail-header">
                  {isSupported && (
                    <button className="speak-btn" onClick={() => speak(`${c.cmd}. ${c.desc}`)}>
                      🔊 Read aloud
                    </button>
                  )}
                </div>

                <div className="cmd-section">
                  <div className="cmd-section-label">SYNTAX</div>
                  <code className="cmd-syntax">{c.syntax}</code>
                </div>

                <div className="cmd-section">
                  <div className="cmd-section-label">PLAIN ENGLISH</div>
                  <p className="cmd-plain">{c.desc}</p>
                </div>

                <div className="cmd-section">
                  <div className="cmd-section-label">EXAMPLE</div>
                  <pre className="cmd-example">{c.example}</pre>
                </div>

                {c.tryIt && (
                  <div className="cmd-section">
                    <div className="cmd-section-label">TRY IT (copy this into the Lab)</div>
                    <pre className="cmd-try">{c.tryIt}</pre>
                  </div>
                )}

                {c.mistakes?.length > 0 && (
                  <div className="cmd-section">
                    <div className="cmd-section-label">COMMON MISTAKES</div>
                    <ul className="cmd-mistakes">
                      {c.mistakes.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                  </div>
                )}

                {c.related?.length > 0 && (
                  <div className="cmd-section">
                    <div className="cmd-section-label">RELATED COMMANDS</div>
                    <div className="cmd-related-row">
                      {c.related.map(r => (
                        <button
                          key={r}
                          className="related-cmd-btn"
                          onClick={() => setExpanded(r)}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {c.lessons?.length > 0 && (
                  <div className="cmd-section">
                    <div className="cmd-section-label">APPEARS IN</div>
                    <div className="cmd-lessons-row">
                      {c.lessons.map(l => <span key={l} className="lesson-badge">{l}</span>)}
                    </div>
                  </div>
                )}
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
