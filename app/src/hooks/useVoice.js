import { useState, useRef } from 'react';

export function useVoice() {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const isSupported = typeof window !== 'undefined' && !!window.speechSynthesis;

  function speak(text) {
    if (!isSupported) return;
    cancelSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function cancelSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  function parseCommand(transcript) {
    const t = transcript.toLowerCase().trim();

    if (t === 'run it' || t === 'run code') return 'run';
    if (t === 'check it' || t === 'check') return 'check';
    if (t === 'hint' || t === 'give me a hint') return 'hint';
    if (t === 'reset' || t === 'reset code') return 'reset';
    if (t === 'stop' || t === 'stop program') return 'stop';
    if (t === 'explain this' || t === 'explain code') return 'explain';
    if (t === 'make it say hello') return { action: 'insert', code: 'echo hello' };
    if (t === 'ask for my name' || t === 'ask for name') return { action: 'insert', code: 'set /p name=Enter name: ' };
    if (t === 'set health to 100') return { action: 'insert', code: 'set health=100' };
    if (t === 'add pause') return { action: 'insert', code: 'pause' };
    if (t === 'clear screen') return { action: 'insert', code: 'cls' };
    if (t === 'change color to green') return { action: 'insert', code: 'color 0A' };

    return null;
  }

  function startListening(onResult) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return;

    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      onResult(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }

  function stopListening() {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }

  return { speak, cancelSpeech, isSupported, startListening, stopListening, isListening, parseCommand };
}
