import { useGame } from '../contexts/GameContext';
import './GlobalToasts.css';

const RARITY_COLORS = {
  common:    '#00ff41',
  uncommon:  '#00ccff',
  rare:      '#aa44ff',
  epic:      '#ff9900',
  legendary: '#ffdd00',
};

export default function GlobalToasts() {
  const { toasts, dismissToast } = useGame();

  return (
    <div className="toast-stack">
      {toasts.map(t => (
        <Toast key={t.key} toast={t} onDismiss={() => dismissToast(t.key)} />
      ))}
    </div>
  );
}

function Toast({ toast, onDismiss }) {
  const color = toast.color || RARITY_COLORS[toast.rarity] || '#00ff41';

  return (
    <div className={`gtost gtost-${toast.type}`} style={{ '--tc': color }} onClick={onDismiss}>
      <div className="gtost-bar" />
      <div className="gtost-icon">
        {toast.type === 'achievement' && (toast.icon || '🏆')}
        {toast.type === 'levelup'     && '⬆'}
        {toast.type === 'secret'      && '🔓'}
        {toast.type === 'xp'          && '⚡'}
        {!['achievement','levelup','secret','xp'].includes(toast.type) && '✦'}
      </div>
      <div className="gtost-body">
        <div className="gtost-eyebrow">
          {toast.type === 'achievement' && 'ACHIEVEMENT UNLOCKED'}
          {toast.type === 'levelup'     && 'LEVEL UP'}
          {toast.type === 'secret'      && 'SECRET DISCOVERED'}
          {toast.type === 'xp'          && 'XP EARNED'}
          {!['achievement','levelup','secret','xp'].includes(toast.type) && 'NOTIFICATION'}
        </div>
        <div className="gtost-title">{toast.title}</div>
        {toast.desc && <div className="gtost-desc">{toast.desc}</div>}
      </div>
      {toast.rarity && toast.rarity !== 'common' && (
        <div className="gtost-rarity" style={{ color }}>{toast.rarity.toUpperCase()}</div>
      )}
    </div>
  );
}
