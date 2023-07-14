import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Instantaneamente aprimorando a confiança perdida',
    text: 'Ao oferecer sua generosidade, John rapidamente dissipa as desconfianças. Com o passar do tempo, ele conquista a simpatia da Sra. E assim, a melhoria contínua da confiança é prontamente aplaudida por todos na residência.',
  },
  {
    title: 'Assuma o papel ativo e dedicado',
    text: 'Seja reconhecido por sua disposição em ajudar de forma ocasional e incomum. Uma carta que descreve como você assume um papel ativo e capacitado para auxiliar aqueles ao seu redor.',
  },
  {
    title: 'A mensagem é tudo',
    text: 'Solicitada, uma possível relação com uma amante elegante levanta debates. Por meio da mensagem, tudo se define e ocupa um lugar de destaque.',
  },
  {
    title: 'A verdadeira lei do condado do garoto',
    text: 'A verdadeira lei do condado impede que ela seja semelhante à sua irmã. Você se afasta como se fossem seis. Entre o prazer, as leis agora são ignoradas. Em uma mesa bem montada, um rubor rápido se espalha.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">O futuro é agora e você só precisa perceber isso. Dê o primeiro passo em direção ao futuro hoje e faça acontecer.</h1>
      <p>Solicite o acesso antecipado para começar.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
