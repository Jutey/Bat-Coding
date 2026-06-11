import { useState, useRef, useEffect, useCallback } from 'react';

export const VOICE_STYLES = [
  { id: 'system',   label: 'System Voice',  desc: 'Calm, technical, neutral' },
  { id: 'coach',    label: 'Coach',         desc: 'Encouraging, clear' },
  { id: 'hacker',   label: 'Hacker',        desc: 'Slightly edgy, cyber' },
  { id: 'narrator', label: 'Narrator',      desc: 'Slow, deep, dramatic' },
  { id: 'sidekick', label: 'Sidekick',      desc: 'Upbeat, fast, chipper' },
  { id: 'robot',    label: 'Robot',         desc: 'Flat, mechanical, monotone' },
  { id: 'whisper',  label: 'Whisper',       desc: 'Soft, low, quiet tone' },
  { id: 'silent',   label: 'Silent',        desc: 'No narration' },
];

const STYLE_PARAMS = {
  system:   { rate: 0.9,  pitch: 1.0 },
  coach:    { rate: 1.0,  pitch: 1.05 },
  hacker:   { rate: 1.05, pitch: 0.9 },
  narrator: { rate: 0.8,  pitch: 0.85 },
  sidekick: { rate: 1.2,  pitch: 1.2 },
  robot:    { rate: 0.95, pitch: 0.6 },
  whisper:  { rate: 0.85, pitch: 1.1 },
  silent:   { rate: 1.0,  pitch: 1.0 },
};

export function useVoice() {
  const isSupported = typeof window !== 'undefined' && !!window.speechSynthesis;

  const [narrationEnabled, setNarrationEnabled] = useState(
    () => localStorage.getItem('narration_enabled') !== 'false'
  );
  const [voiceStyle, setVoiceStyleState] = useState(
    () => localStorage.getItem('voice_style') || 'system'
  );
  const [selectedVoiceName, setSelectedVoiceNameState] = useState(
    () => localStorage.getItem('voice_name') || ''
  );
  const [speechRate, setSpeechRateState] = useState(
    () => parseFloat(localStorage.getItem('speech_rate') || '1')
  );
  const [availableVoices, setAvailableVoices] = useState(
    () => (typeof window !== 'undefined' && window.speechSynthesis)
      ? window.speechSynthesis.getVoices()
      : []
  );
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const recognitionRef = useRef(null);

  // Load available voices
  useEffect(() => {
    if (!isSupported) return;
    function loadVoices() {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) setAvailableVoices(voices);
    }
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [isSupported]);

  function setVoiceStyle(id) {
    setVoiceStyleState(id);
    localStorage.setItem('voice_style', id);
  }

  function setSelectedVoiceName(name) {
    setSelectedVoiceNameState(name);
    localStorage.setItem('voice_name', name);
  }

  function setSpeechRate(rate) {
    setSpeechRateState(rate);
    localStorage.setItem('speech_rate', String(rate));
  }

  function toggleNarration() {
    const next = !narrationEnabled;
    setNarrationEnabled(next);
    localStorage.setItem('narration_enabled', String(next));
    if (!next) cancelSpeech();
  }

  // speak(text, { force }) — force lets manual 🔊 buttons play even when
  // auto-narration is toggled off; auto-narration on step change should not pass force.
  const speak = useCallback((text, opts = {}) => {
    if (!isSupported || voiceStyle === 'silent') return;
    if (!opts.force && !narrationEnabled) return;
    if (!text || !text.trim()) return;
    cancelSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    const params = STYLE_PARAMS[voiceStyle] || STYLE_PARAMS.system;
    utterance.rate = params.rate * speechRate;
    utterance.pitch = params.pitch;

    if (selectedVoiceName && availableVoices.length) {
      const voice = availableVoices.find(v => v.name === selectedVoiceName);
      if (voice) utterance.voice = voice;
    }
    utterance.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
    utterance.onend = () => { setIsSpeaking(false); setIsPaused(false); };
    utterance.onerror = () => { setIsSpeaking(false); setIsPaused(false); };
    window.speechSynthesis.speak(utterance);
  }, [isSupported, voiceStyle, narrationEnabled, speechRate, selectedVoiceName, availableVoices]);

  function cancelSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsPaused(false);
  }

  function pauseSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis?.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }

  function resumeSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }

  function startListening(onResult) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return;
    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onresult = e => onResult(e.results[0][0].transcript);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }

  function stopListening() {
    if (recognitionRef.current) { recognitionRef.current.stop(); recognitionRef.current = null; }
    setIsListening(false);
  }

  return {
    speak, cancelSpeech, isSupported,
    pauseSpeech, resumeSpeech, isSpeaking, isPaused,
    narrationEnabled, toggleNarration,
    voiceStyle, setVoiceStyle,
    selectedVoiceName, setSelectedVoiceName,
    speechRate, setSpeechRate,
    availableVoices,
    isListening, startListening, stopListening,
  };
}
