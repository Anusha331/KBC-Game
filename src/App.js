import React, { useState } from 'react';
import QrCodeScan from './components/QrCodeScan';
import CoumpterScreen from './components/CoumpterScreen';
import PlayerScreen from './components/PlayerScreen';
import './App.css';

function App() {
  const [questions] = useState([
    {
      text: "Where was India’s first national Museum opened?",
      options: ["A. Delhi", "B. Hyderabad", "C. Rajasthan", "D. Mumbai"],
      correctAnswer: "D",
    },
    {
      text: "How many continents are there on Earth?",
      options: ["A. 5", "B. 6", "C. 7", "D. 8"],
      correctAnswer: "C",
    },
    {
      text: "The green planet in the solar system is?",
      options: ["A. Mars", "B. Uranus", "C. Venus", "D. Earth"],
      correctAnswer: "B",
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: ["A. Earth", "B. Venus", "C. Mars", "D. Jupiter"],
      correctAnswer: "C",
    },
    {
      text: "What is 2 + 2?",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      correctAnswer: "B",
    },
  ]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [gameLink] = useState(`https://game-6i4r1ouk8-anusha-nagisettys-projects.vercel.app`); 

  const handlePlayerJoin = (playerName) => {
    if (playerName && !players.includes(playerName)) {
      setPlayers([...players, playerName]);
      setCurrentPlayer(playerName);
    }
  };

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
      alert(`Congratulations, ${currentPlayer}! Correct Answer.`);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Game Over! Thanks for playing.");
      }
    } else {
      alert(`Sorry, ${currentPlayer}. Incorrect Answer.`);
    }
  };

  return (
    <div className="gameApp">
      <h1>KBC Game</h1>
      <QrCodeScan 
        question={questions[currentQuestionIndex]} 
        players={players}
        gameLink={gameLink}
      />
      {currentPlayer ? (
        <PlayerScreen 
          question={questions[currentQuestionIndex]} 
          onAnswer={handleAnswer}
        />
      ) : (
        <CoumpterScreen onJoin={handlePlayerJoin} />
      )}
    </div>
  );
}

export default App;
