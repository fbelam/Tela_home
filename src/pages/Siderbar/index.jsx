import React from 'react';
import './styles/app.css';
import profileImage from './assets/Frame.png';
import { useState } from 'react'; // Adicionando a importação do useState



function App() {

  const [currentXP, setCurrentXP] = useState(0);
  const maxXP = 100;

  const increaseXP = () => {
    if (currentXP < maxXP) {
      setCurrentXP(currentXP + 10); // Aumenta o XP em 10
    }
  };

  const progressPercentage = (currentXP / maxXP) * 100;

  return (
    <>
    <div className="App">
      <div className="sidebar">
        <h2>One Piece</h2>
        <ul className='my-list'>
          <li><a href="#">Fazer Orçamento</a></li>
          <li><a href="#">Pedidos</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">Configurações</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <input type="text" placeholder="Pesquisar..." />
          <img src={profileImage} alt="Perfil" className="profile-image" />
          </div>
        <div className='Conteudo'>
          <div className="card">
            <h2>Player XP Progress</h2>
              <div className="progress-bar-container">
                 <div className="progress-bar"
                      style={{ width: `${progressPercentage}%` }}
                      ></div>
              </div>
               <p id="xpText">XP:{currentXP}/{maxXP}</p>
                <button onClick={increaseXP}>Gain XP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

