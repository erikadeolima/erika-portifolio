import React from 'react';
import './App.css';
import Sobre from './About/Sobre';
import Contato from './Contact/Contato';
import Cabeçalho from './Header/Cabeçalho';
import Rodapé from './Footer/Rodapé';

function App() {
  return (
    <div className="App">
      <Cabeçalho />
      <Sobre />
      <Contato />
      <Rodapé />
    </div>
  );
}

export default App;
