import React, { useState } from 'react';
import './EmojiVoiting.css';

const EmojiVoting = () => {
  const [emojis, setEmojis] = useState([
    { id: 1, symbol: '🥺', count: 0 },
    { id: 2, symbol: '😍', count: 0 },
    { id: 3, symbol: '🥰', count: 0 },
    { id: 4, symbol: '😞', count: 0 },
  ]);

  const handleVote = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((emoji) => {
        if (emoji.id === id) {
          return { ...emoji, count: emoji.count + 1 };
        }
        return emoji;
      });
    });
  };

  const handleShowResults = () => {
    const winningEmoji = emojis.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    });

    alert(`Переможець: ${winningEmoji.symbol}`);
  };

  return (
    <div>
      <h1>Голосування за найкращий смайлик</h1>
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.id} onClick={() => handleVote(emoji.id)}>
            <span role="img" aria-label="emoji" className="emoji">
              {emoji.symbol}
            </span>
            <span>{emoji.count}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Показати результати</button>
    </div>
  );
};

export default EmojiVoting;
