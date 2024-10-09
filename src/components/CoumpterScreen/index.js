// CoumpterScreen
import React, { useState } from 'react';
import "./index.css"

function CoumpterScreen({ onJoin }) {
  const [name, setName] = useState("");

  const submitName = (e) => {
    e.preventDefault();
    onJoin(name);
    setName(""); 
  };

  return (
    <div>
      <h4>Enter Your Name to Join</h4>
      <form onSubmit={submitName}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name"
          required
        />
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
}
export default CoumpterScreen;