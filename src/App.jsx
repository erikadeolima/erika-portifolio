import React from 'react';
import './App.css';
import Sobre from './About/Sobre';
import Contato from './Contact/Contato';
import Cabeçalho from './Header/Cabeçalho';
import Rodapé from './Footer/Rodapé';
// import Projetos from './Projetcs/Projetos';

function App() {
  return (
    <div className="App flex flex-wrap h-full h-screen mt-51 mb-[51px] bg-[#8C3545] text-[#201F40]">
      <Cabeçalho />
      <Sobre />
      <Contato />
      <Rodapé />
    </div>
  );
}

export default App;
