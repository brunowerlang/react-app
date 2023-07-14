import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Construa algo Incrível GPT-3 OpenAI</h1>
      <p>Apesar de qualquer incômodo, é importante buscar assistência durante as viagens. Não deixe de aproveitar todas as bênçãos do exercício. Aproveite cada momento de alegria e mudança com entusiasmo e dedicação. É preciso permitir-se aproveitar e desfrutar dessas experiências ao longo dos anos.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu Email" />
        <button type="button">Comece Agora</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 pessoas solicitaram acesso nas últimas 24 horas.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
