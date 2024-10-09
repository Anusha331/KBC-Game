//Login screen
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import "./index.css"
function QrCodeScan({ question, players, gameLink }) {
  return (
    <div>
      <QRCodeSVG value={gameLink} size={200} bgColor="#ffffff" fgColor="#000000" />
      <h4>Scan the QRcode to Join!</h4>
      <div>
        <div>
          <h4>Player Joined:</h4>
        </div>
        
        <ul>
          {players.map((player, index) => (
            <li key={index} className='playerName'>{player}</li>
          ))}
        </ul>
      </div>
      <div className='options'>
        <h4>Q: {question.text}</h4>
        {question.options.map((option, index) => (
          <p key={index} className='option'>{option}</p>
        ))}
      </div>
    </div>
  );
}

export default QrCodeScan;
