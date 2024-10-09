// PlayerScreen.js
import React from 'react';
import "./index.css";

function PlayerScreen({ question, onAnswer }) {
  return (
    <div>
      <h4>{question.text}</h4>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option[0])} className='option'>
          {option}
        </button>
      ))}
    </div>
  );
}

export default PlayerScreen;
