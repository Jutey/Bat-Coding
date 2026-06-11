// Builds the spoken text for a lesson step, broken into segments so
// individual parts (question, an option, a hint, ...) can be read on
// their own via a per-segment 🔊 button, plus a combined "read all" text.

function clean(text) {
  if (!text) return '';
  return String(text)
    .replace(/[`*_#>]/g, '')
    .replace(/\n+/g, '. ')
    .trim();
}

function normalizeOptions(step) {
  if (!Array.isArray(step.options)) return [];
  return step.options.map((opt, i) => {
    if (typeof opt === 'string') return { text: opt };
    return { text: opt.text || String(opt) };
  });
}

const LETTERS = 'ABCDEFGH';

export function getStepSegments(step) {
  if (!step) return [];
  switch (step.type) {
    case 'learn': {
      const segments = [{ id: 'title', label: 'Title', text: clean(step.title) }];
      if (step.body) segments.push({ id: 'body', label: 'Explanation', text: clean(step.body) });
      if (step.code) segments.push({ id: 'code', label: 'Code', text: `Code example: ${clean(step.code)}` });
      if (step.output) segments.push({ id: 'output', label: 'Output', text: `Output: ${clean(step.output)}` });
      return segments;
    }
    case 'predict': {
      const segments = [{ id: 'question', label: 'Question', text: clean(step.question) }];
      if (step.code) segments.push({ id: 'code', label: 'Code', text: `Code: ${clean(step.code)}` });
      normalizeOptions(step).forEach((opt, i) => {
        segments.push({ id: `option-${i}`, label: `Option ${LETTERS[i] || i + 1}`, text: `Option ${LETTERS[i] || i + 1}: ${clean(opt.text)}` });
      });
      return segments;
    }
    case 'type':
    case 'fill': {
      const segments = [{ id: 'prompt', label: 'Prompt', text: clean(step.prompt) }];
      if (step.target) segments.push({ id: 'target', label: 'Expected output', text: `Expected output: ${clean(step.target)}` });
      if (step.hint) segments.push({ id: 'hint', label: 'Hint', text: `Hint: ${clean(step.hint)}` });
      return segments;
    }
    case 'fix': {
      const segments = [{ id: 'header', label: 'Bug hunt', text: 'Bug hunt: fix the broken code.' }];
      if (step.prompt) segments.push({ id: 'prompt', label: 'Prompt', text: clean(step.prompt) });
      const hint1 = step.hint || step.bugHint;
      if (hint1) segments.push({ id: 'hint', label: 'Hint', text: `Hint: ${clean(hint1)}` });
      return segments;
    }
    case 'build': {
      const segments = [];
      if (step.title) segments.push({ id: 'title', label: 'Title', text: clean(step.title) });
      if (step.prompt) segments.push({ id: 'prompt', label: 'Prompt', text: clean(step.prompt) });
      if (step.instructions) segments.push({ id: 'instructions', label: 'Instructions', text: clean(step.instructions) });
      return segments;
    }
    case 'reward': {
      const segments = [{ id: 'title', label: 'Result', text: 'Lesson complete.' }];
      if (step.storyUpdate) segments.push({ id: 'story', label: 'Story update', text: clean(step.storyUpdate) });
      return segments;
    }
    default:
      return [];
  }
}

export function getFullStepText(step) {
  return getStepSegments(step).map(s => s.text).filter(Boolean).join('. ');
}
