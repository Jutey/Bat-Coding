import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(err) { return { error: err }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, color: '#ff4141', fontFamily: 'Courier New, monospace', background: 'var(--bg, #0d0d0d)', height: '100%', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '0.1em' }}>⚠ Something went wrong</div>
          <div style={{ fontSize: 13, color: 'var(--text-dim, #5a7a5a)', lineHeight: 1.6 }}>{this.state.error.message}</div>
          <button
            style={{ marginTop: 8, padding: '10px 20px', background: 'transparent', border: '2px solid #ff4141', color: '#ff4141', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12 }}
            onClick={() => this.setState({ error: null })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
