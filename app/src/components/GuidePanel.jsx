import { useState } from 'react';
import { getRandomGreeting, getHint, getRandomCelebration } from '../data/aegis';
import './GuidePanel.css';

const HINT_TYPES = ['general', 'typo', 'missing_percent', 'wrong_label', 'logic_error'];

export default function GuidePanel({ lessonId, isBoss }) {
  const [messages, setMessages] = useState([
    { from: 'guide', text: getRandomGreeting() }
  ]);
  const [input, setInput] = useState('');
  const [hintType, setHintType] = useState('general');
  const [hintLevel, setHintLevel] = useState(0);

  function addMessage(from, text) {
    setMessages(prev => [...prev, { from, text, key: Date.now() + Math.random() }]);
  }

  function handleSend() {
    if (!input.trim()) return;
    const msg = input.trim();
    addMessage('user', msg);
    setInput('');

    setTimeout(() => {
      const lower = msg.toLowerCase();
      let response;

      if (lower.includes('hint') || lower.includes('help') || lower.includes('stuck')) {
        response = getHint(hintType, hintLevel);
        setHintLevel(h => h + 1);
        setHintType(prev => HINT_TYPES[(HINT_TYPES.indexOf(prev) + 1) % HINT_TYPES.length]);
      } else if (lower.includes('fixed') || lower.includes('got it') || lower.includes('works')) {
        response = getRandomCelebration();
      } else if (lower.includes('typo') || lower.includes('spelling')) {
        response = getHint('typo', Math.min(hintLevel, 3));
      } else if (lower.includes('variable') || lower.includes('%')) {
        response = getHint('missing_percent', Math.min(hintLevel, 3));
      } else if (lower.includes('loop') || lower.includes('goto') || lower.includes('label')) {
        response = getHint('wrong_label', Math.min(hintLevel, 3));
      } else if (lower.includes('if') || lower.includes('logic') || lower.includes('condition')) {
        response = getHint('logic_error', Math.min(hintLevel, 3));
      } else if (lower.includes('answer') || lower.includes('solution') || lower.includes('tell me')) {
        response = "I won't give the answer directly. Tell me what's happening when you run the code — what did you expect vs. what you got?";
      } else if (isBoss) {
        response = "This one's on you. Read each line carefully. Something doesn't match what you've learned.";
      } else {
        response = "Describe what's happening. What did you expect? What actually happened?";
      }

      addMessage('guide', response);
    }, 500);
  }

  return (
    <div className="guide-panel">
      <div className="guide-header">
        <div className="guide-title">GUIDE</div>
        <div className="guide-subtitle">Ask anything about this lesson</div>
      </div>

      <div className="guide-messages">
        {messages.map((m, i) => (
          <div key={m.key || i} className={`guide-msg ${m.from}`}>
            <span className="msg-label">{m.from === 'guide' ? 'GUIDE' : 'YOU'}</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>

      <div className="guide-quick">
        <button onClick={() => { addMessage('user', 'Give me a hint'); setTimeout(() => addMessage('guide', getHint(hintType, hintLevel)), 400); }}>
          💡 Hint
        </button>
        <button onClick={() => { addMessage('user', 'I fixed it!'); setTimeout(() => addMessage('guide', getRandomCelebration()), 400); }}>
          ✓ Got it
        </button>
        <button onClick={() => { addMessage('user', 'What type of bug is this?'); setTimeout(() => addMessage('guide', "What goes wrong when you run it? Wrong output, crash, or nothing? Each points to a different cause."), 400); }}>
          ? Bug type
        </button>
      </div>

      <div className="guide-input-row">
        <input
          className="guide-input"
          placeholder="Ask the guide..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="guide-send" onClick={handleSend}>→</button>
      </div>
    </div>
  );
}
