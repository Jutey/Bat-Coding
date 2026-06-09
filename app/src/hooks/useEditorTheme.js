import { useState, useEffect } from 'react';

export const EDITOR_THEMES = [
  { id: 'cq-dark',      label: 'Dark (Default)',   monacoId: 'cq-dark' },
  { id: 'cq-hacker',    label: 'Hacker Green',     monacoId: 'cq-hacker' },
  { id: 'cq-midnight',  label: 'Midnight Blue',    monacoId: 'cq-midnight' },
  { id: 'cq-monokai',   label: 'Monokai',          monacoId: 'cq-monokai' },
  { id: 'cq-light',     label: 'Light (Clean)',    monacoId: 'cq-light' },
  { id: 'cq-retro',     label: 'Retro DOS',        monacoId: 'cq-retro' },
  { id: 'cq-cyber',     label: 'Cyberpunk',        monacoId: 'cq-cyber' },
];

export const THEME_DEFS = {
  'cq-dark': {
    base: 'vs-dark',
    rules: [
      { token: 'keyword', foreground: '00ff41', fontStyle: 'bold' },
      { token: 'string', foreground: 'ffdd00' },
      { token: 'comment', foreground: '4a6a4a', fontStyle: 'italic' },
      { token: 'variable', foreground: '00aaff' },
      { token: 'number', foreground: 'ff9900' },
    ],
    colors: {
      'editor.background': '#0d0d0d',
      'editor.foreground': '#9ab09a',
      'editor.lineHighlightBackground': '#0f1f0f',
      'editorLineNumber.foreground': '#2a4a2a',
      'editorLineNumber.activeForeground': '#00ff41',
      'editor.selectionBackground': '#1a4a1a',
      'editorCursor.foreground': '#00ff41',
    },
  },
  'cq-hacker': {
    base: 'vs-dark',
    rules: [
      { token: 'keyword', foreground: '00ff41', fontStyle: 'bold' },
      { token: 'string', foreground: '00cc33' },
      { token: 'comment', foreground: '005a00', fontStyle: 'italic' },
      { token: 'variable', foreground: '33ff66' },
      { token: 'number', foreground: '99ff99' },
    ],
    colors: {
      'editor.background': '#000500',
      'editor.foreground': '#00cc33',
      'editor.lineHighlightBackground': '#001a00',
      'editorLineNumber.foreground': '#003a00',
      'editorLineNumber.activeForeground': '#00ff41',
      'editor.selectionBackground': '#004400',
      'editorCursor.foreground': '#00ff41',
    },
  },
  'cq-midnight': {
    base: 'vs-dark',
    rules: [
      { token: 'keyword', foreground: '7aa0ff', fontStyle: 'bold' },
      { token: 'string', foreground: '79c0ff' },
      { token: 'comment', foreground: '3a5a8a', fontStyle: 'italic' },
      { token: 'variable', foreground: 'ff9980' },
      { token: 'number', foreground: 'd2a8ff' },
    ],
    colors: {
      'editor.background': '#0d1117',
      'editor.foreground': '#c9d1d9',
      'editor.lineHighlightBackground': '#161b22',
      'editorLineNumber.foreground': '#2a3a4a',
      'editorLineNumber.activeForeground': '#7aa0ff',
      'editor.selectionBackground': '#1f3a5a',
      'editorCursor.foreground': '#7aa0ff',
    },
  },
  'cq-monokai': {
    base: 'vs-dark',
    rules: [
      { token: 'keyword', foreground: 'f92672', fontStyle: 'bold' },
      { token: 'string', foreground: 'e6db74' },
      { token: 'comment', foreground: '75715e', fontStyle: 'italic' },
      { token: 'variable', foreground: 'a6e22e' },
      { token: 'number', foreground: 'ae81ff' },
    ],
    colors: {
      'editor.background': '#272822',
      'editor.foreground': '#f8f8f2',
      'editor.lineHighlightBackground': '#3e3d32',
      'editorLineNumber.foreground': '#5a5a4a',
      'editorLineNumber.activeForeground': '#f8f8f2',
      'editor.selectionBackground': '#49483e',
      'editorCursor.foreground': '#f8f8f0',
    },
  },
  'cq-light': {
    base: 'vs',
    rules: [
      { token: 'keyword', foreground: '0000ff', fontStyle: 'bold' },
      { token: 'string', foreground: 'a31515' },
      { token: 'comment', foreground: '008000', fontStyle: 'italic' },
      { token: 'variable', foreground: '0070c1' },
      { token: 'number', foreground: '098658' },
    ],
    colors: {
      'editor.background': '#ffffff',
      'editor.foreground': '#1e1e1e',
      'editor.lineHighlightBackground': '#f0f0f0',
      'editorLineNumber.foreground': '#aaaaaa',
      'editorLineNumber.activeForeground': '#333333',
      'editor.selectionBackground': '#add6ff',
      'editorCursor.foreground': '#000000',
    },
  },
  'cq-retro': {
    base: 'vs-dark',
    rules: [
      { token: 'keyword', foreground: 'ffff00', fontStyle: 'bold' },
      { token: 'string', foreground: 'ffffff' },
      { token: 'comment', foreground: '8888cc', fontStyle: 'italic' },
      { token: 'variable', foreground: 'ffaa00' },
      { token: 'number', foreground: 'ff8888' },
    ],
    colors: {
      'editor.background': '#000088',
      'editor.foreground': '#ffffff',
      'editor.lineHighlightBackground': '#0000aa',
      'editorLineNumber.foreground': '#4444aa',
      'editorLineNumber.activeForeground': '#ffff00',
      'editor.selectionBackground': '#0000cc',
      'editorCursor.foreground': '#ffffff',
    },
  },
  'cq-cyber': {
    base: 'vs-dark',
    rules: [
      { token: 'keyword', foreground: 'ff00ff', fontStyle: 'bold' },
      { token: 'string', foreground: 'ff88ff' },
      { token: 'comment', foreground: '6a006a', fontStyle: 'italic' },
      { token: 'variable', foreground: '00ffff' },
      { token: 'number', foreground: 'ff44aa' },
    ],
    colors: {
      'editor.background': '#0a000a',
      'editor.foreground': '#ff88ff',
      'editor.lineHighlightBackground': '#1a001a',
      'editorLineNumber.foreground': '#440044',
      'editorLineNumber.activeForeground': '#ff00ff',
      'editor.selectionBackground': '#2a002a',
      'editorCursor.foreground': '#ff00ff',
    },
  },
};

let themesRegistered = false;

export function registerThemes(monaco) {
  if (themesRegistered) return;
  themesRegistered = true;
  Object.entries(THEME_DEFS).forEach(([id, def]) => {
    monaco.editor.defineTheme(id, {
      base: def.base,
      inherit: true,
      rules: def.rules,
      colors: def.colors,
    });
  });
}

export function useEditorTheme() {
  const [themeId, setThemeId] = useState(
    () => localStorage.getItem('editor_theme') || 'cq-dark'
  );

  function setTheme(id) {
    setThemeId(id);
    localStorage.setItem('editor_theme', id);
  }

  return { theme: themeId, setTheme };
}
