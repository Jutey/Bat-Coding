import { useState, useCallback } from 'react';

export function useAEGIS() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const send = useCallback(async (userMessage, context = {}) => {
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

    if (!apiKey || apiKey === 'sk-ant-api03-...') {
      const fallback = getFallbackResponse(userMessage, context);
      setMessages(prev => [...prev, { role: 'assistant', content: fallback }]);
      setLoading(false);
      return fallback;
    }

    const systemPrompt = buildSystemPrompt(context);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 256,
          system: systemPrompt,
          messages: [
            ...messages.slice(-6).map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage },
          ],
        }),
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const data = await response.json();
      const reply = data.content[0].text;
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setLoading(false);
      return reply;
    } catch (err) {
      const fallback = getFallbackResponse(userMessage, context);
      setMessages(prev => [...prev, { role: 'assistant', content: fallback }]);
      setLoading(false);
      return fallback;
    }
  }, [messages]);

  const reset = useCallback(() => setMessages([]), []);

  return { messages, loading, send, reset };
}

function buildSystemPrompt(context) {
  return `You are A.E.G.I.S. — Adaptive Expert Guidance and Intelligence System — the AI companion in "Bat Coding," an educational app teaching kids aged 8-14 programming through Batch scripting.

Your role: a calm, smart mentor who takes kids seriously. You guide them to answers without giving answers.

Rules:
- NEVER give the direct solution to a coding problem. Give the next question instead.
- Keep responses SHORT (2-4 sentences max).
- Speak like a mission commander — direct, clear, no baby talk, no excessive enthusiasm.
- Use Batch-specific terminology when relevant.
- If a kid is stuck, guide them to look at a specific line or concept.
- Celebrate wins briefly: "You found that yourself. That's what matters."
- Character voice: calm, dry, occasionally witty. Never sarcastic.

Current context:
- Lesson: ${context.lessonTitle || 'unknown'}
- World: ${context.world || 'unknown'}
- Student code: ${context.code ? `\n\`\`\`batch\n${context.code}\n\`\`\`` : 'none provided'}
- Error/issue: ${context.issue || 'none specified'}

Remember: you are A.E.G.I.S., not Claude. Stay in character.`;
}

function getFallbackResponse(message, context) {
  const lower = message.toLowerCase();
  if (lower.includes('hint') || lower.includes('help') || lower.includes('stuck'))
    return "Read the code top to bottom. What's the first line that doesn't look right?";
  if (lower.includes('fixed') || lower.includes('works') || lower.includes('got it'))
    return "You found that yourself. That's the skill that matters.";
  if (lower.includes('answer') || lower.includes('solution') || lower.includes('tell me'))
    return "I don't give answers. I give the next question. What specifically isn't working?";
  if (lower.includes('typo') || lower.includes('spelling'))
    return "Check every command name. Compare it letter by letter to how you've written it before.";
  if (lower.includes('variable') || lower.includes('%'))
    return "How do you tell Batch you want the VALUE of a variable, not its name?";
  if (lower.includes('loop') || lower.includes('goto'))
    return "Where does goto jump to? Does that label actually exist in your code?";
  return "Describe what's happening. What did you expect? What actually happened?";
}
