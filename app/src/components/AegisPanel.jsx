import { useState } from 'react';
import { getRandomGreeting, getHint, getRandomCelebration } from '../data/aegis';
import './AegisPanel.css';

const HINT_TYPES = ['general', 'typo', 'missing_percent', 'wrong_label', 'logic_error'];

export default function AegisPanel({ hintLevel, lessonId, isBoss }) {
  const [messages, setMessages] = useState([
    { from: 'aegis', text: getRandomGreeting() }
  ]);
  const [input, setInput] = useState('');
  const [hintType, setHintType] = useState('general');

  function addMessage(from, text) {
    setMessages(prev => [...prev, { from, text, key: Date.now() }]);
  }

  function handleSend() {
    if (!input.trim()) return;
    const msg = input.trim();
    addMessage('cadet', msg);
    setInput('');

    // Simple keyword response system
    setTimeout(() => {
      let response;
      const lower = msg.toLowerCase();

      if (lower.includes('hint') || lower.includes('help') || lower.includes('stuck')) {
        response = getHint(hintType, hintLevel);
        setHintType(prev => HINT_TYPES[(HINT_TYPES.indexOf(prev) + 1) % HINT_TYPES.length]);
      } else if (lower.includes('fixed') || lower.includes('got it') || lower.includes('works')) {
        response = getRandomCelebration();
      } else if (lower.includes('typo') || lower.includes('spelling')) {
        response = getHint('typo', Math.min(hintLevel, 3));
      } else if (lower.includes('variable') || lower.includes('percent') || lower.includes('%')) {
        response = getHint('missing_percent', Math.min(hintLevel, 3));
      } else if (lower.includes('loop') || lower.includes('goto') || lower.includes('label')) {
        response = getHint('wrong_label', Math.min(hintLevel, 3));
      } else if (lower.includes('if') || lower.includes('logic') || lower.includes('condition')) {
        response = getHint('logic_error', Math.min(hintLevel, 3));
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        response = "Cadet. Let's focus. What's the problem?";
      } else if (lower.includes('what') && lower.includes('next')) {
        response = "Keep reading the lesson. The next step is in the text.";
      } else if (lower.includes('answer') || lower.includes('solution') || lower.includes('tell me')) {
        response = "I don't give answers. I give the next question. What specifically isn't working?";
      } else if (lower.includes('boss') || isBoss) {
        response = "Boss battles are solo. No full hints here. Read the code line by line. Something doesn't match what you've learned.";
      } else {
        response = "Describe what's happening. What did you expect? What actually happened?";
      }

      addMessage('aegis', response);
    }, 600);
  }

  return (
    <div className="aegis-panel">
      <div className="aegis-header">
        <div className="aegis-title">
          <span className="aegis-dot" />
          A.E.G.I.S.
        </div>
        <div className="aegis-subtitle">Adaptive Expert Guidance</div>
      </div>

      <div className="aegis-messages">
        {messages.map((m, i) => (
          <div key={m.key || i} className={`aegis-msg ${m.from}`}>
            <span className="msg-label">{m.from === 'aegis' ? 'A.E.G.I.S.' : 'YOU'}</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>

      <div className="aegis-quick">
        <button onClick={() => { addMessage('cadet', "I need a hint"); setTimeout(() => addMessage('aegis', getHint(hintType, hintLevel)), 400); }}>💡 Hint</button>
        <button onClick={() => { addMessage('cadet', "I fixed it!"); setTimeout(() => addMessage('aegis', getRandomCelebration()), 400); }}>✓ Fixed it</button>
        <button onClick={() => { addMessage('cadet', "What type of bug is this?"); setTimeout(() => addMessage('aegis', "What's going wrong when you run it? Crash, wrong output, or nothing at all? Each one points to a different type of bug."), 400); }}>? Bug type</button>
      </div>

      <div className="aegis-input-row">
        <input
          className="aegis-input"
          placeholder="Talk to A.E.G.I.S..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="aegis-send" onClick={handleSend}>→</button>
      </div>
    </div>
  );
}
