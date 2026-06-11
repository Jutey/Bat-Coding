import SpeakButton from '../SpeakButton';
import { getStepSegments } from '../../utils/narration';
import './LearnStep.css';

function parseBody(text) {
  // Bold **text** and inline `code`
  return text.split('\n').map((line, i) => {
    const parts = line.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith('`') && part.endsWith('`'))
        return <code key={j}>{part.slice(1, -1)}</code>;
      if (part.startsWith('**') && part.endsWith('**'))
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      return part;
    });
    return <p key={i}>{parts}</p>;
  });
}

export default function LearnStep({ step, onContinue, speak, isSupported }) {
  const segments = getStepSegments(step);
  const segText = (id) => segments.find(s => s.id === id)?.text || '';

  return (
    <div className="learn-step">
      <div className="learn-body">
        <div className="learn-title-row">
          <h2 className="learn-title">{step.title}</h2>
          <SpeakButton speak={speak} isSupported={isSupported} text={segText('title')} label="title" />
        </div>
        <div className="learn-text">
          {parseBody(step.body)}
          <SpeakButton speak={speak} isSupported={isSupported} text={segText('body')} label="explanation" />
        </div>

        {step.code && (
          <div className="learn-code-block">
            <div className="code-label">
              CODE
              <SpeakButton speak={speak} isSupported={isSupported} text={segText('code')} label="code" />
            </div>
            <pre className="code-content">{step.code}</pre>
            {step.output && (
              <>
                <div className="code-label output-label">
                  OUTPUT
                  <SpeakButton speak={speak} isSupported={isSupported} text={segText('output')} label="output" />
                </div>
                <pre className="code-output">{step.output}</pre>
              </>
            )}
          </div>
        )}
      </div>

      <button className="continue-btn" onClick={onContinue}>
        CONTINUE →
      </button>
    </div>
  );
}
