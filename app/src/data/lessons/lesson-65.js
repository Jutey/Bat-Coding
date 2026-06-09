// Lesson 65 — Shop Function
export default {
  id: 'world-07/lesson-65-shop-function',
  title: 'Shop Function',
  world: 'SECTOR 7 — FUNCTION FACTORY',
  xp: 110,
  steps: [
    {
      type: 'learn',
      title: 'Modular Game Systems',
      body: 'Every RPG has a shop. The shop is a perfect function — it is self-contained, can be called from multiple places in the game, and handles its own logic.',
      code: null,
    },
    {
      type: 'learn',
      title: 'A Shop Function',
      body: 'The shop function reads `gold`, shows items, handles purchase, deducts gold, then returns.',
      code: '@echo off\nset gold=100\nset sword=0\ncall :shop\necho After shop: Gold=%gold% Sword=%sword%\npause\nexit /b\n\n:shop\ncls\necho === ITEM SHOP ===\necho Gold: %gold%\necho 1. Iron Sword (50 gold)\necho 2. Leave\nchoice /c 12\nif errorlevel 2 exit /b\nif %gold% LSS 50 (\n  echo Not enough gold!\n  pause\n  exit /b\n)\nset /a gold=%gold%-50\nset sword=1\necho Sword purchased!\npause\nexit /b',
      output: '=== ITEM SHOP ===\nGold: 100\n1. Iron Sword (50 gold)\n2. Leave',
    },
    {
      type: 'predict',
      question: 'What does `if %gold% LSS 50` check before the purchase?',
      options: [
        { text: 'Whether the player can afford the item', correct: true, explanation: 'Good design prevents invalid purchases.' },
        { text: 'Whether the item is in stock', correct: false, explanation: 'There is no stock variable here.' },
        { text: 'Whether the shop is open', correct: false, explanation: 'LSS compares numbers.' },
        { text: 'Whether gold is less than 100', correct: false, explanation: '50 is the price, not 100.' },
      ],
    },
    {
      type: 'fill',
      before: '@echo off\nset gold=80\ncall :shop\npause\nexit /b\n\n:shop\nif %gold% LSS 30 (\n  echo Cannot afford!\n  exit /b\n)\nset /a gold=%gold%-30\necho Purchased!\n',
      blank: 'exit /b',
      after: '',
      answer: 'exit /b',
      hint: 'The shop function needs to return after a successful purchase',
    },
    {
      type: 'build',
      prompt: 'Build a shop with 3 items:\n- Health Potion: 25 gold (sets potion=1)\n- Shield: 50 gold (sets shield=1)\n- Legendary Sword: 100 gold (sets lsword=1)\n\nCheck if player can afford. Show current gold. After buying, show updated inventory.',
      minLines: 30,
      starterCode: '@echo off\nset gold=120\nset potion=0\nset shield=0\nset lsword=0\ncall :shop\necho Gold: %gold%  Potion: %potion%  Shield: %shield%  Sword: %lsword%\npause\nexit /b\n\n:shop\n',
    },
    {
      type: 'reward',
      xp: 110,
      storyUpdate: 'Commerce module active. Transactions are now encapsulated and reusable.',
    },
  ],
};
