import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="O que é GPT-3" text="Desfrutamos imensamente da troca de mensagens entre amigos, pois elas nos trazem grande prazer. Todos estão atentos e receptivos às ideias compartilhadas. Mesmo diante de qualquer imperfeição, valorizamos a autenticidade do lugar onde vivemos. A conexão que temos é tão vibrante que é impossível ignorá-la. Priorizamos a empatia e a humanidade em cada interação. Um ambiente acolhedor espera por nós, ansiosos por receber novos amigos." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação.</h1>
      <p>Explore a Biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="A mensagem que recebi dos meus amigos trouxe-me imensa alegria, pois valorizo suas opiniões. Todos na mesa prestaram atenção às palavras ditas, reconhecendo a importância delas." />
      <Feature title="Base de Conhecimento" text="É uma coleção de dados, documentos, artigos, tutoriais ou respostas a perguntas frequentes que fornecem informações relevantes e úteis sobre um determinado tópico ou área de interesse. " />
      <Feature title="Educação" text="A educação é a chave que abre as portas do conhecimento, capacitando-nos a alcançar nossos sonhos e transformar o mundo ao nosso redor." />
    </div>
  </div>
);

export default WhatGPT3;
