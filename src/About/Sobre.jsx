/* eslint-disable max-len */
import React from 'react';
import { FcHome } from 'react-icons/fc';
import { FaQuestion, FaBabyCarriage } from 'react-icons/fa';

function Sobre() {
  return (
    <div className="about">
      <h1 className="who-i-am">
        <FaQuestion />
        Quem sou eu
        <FaQuestion />
      </h1>
      <h3 className="born">
        <FaBabyCarriage />
        {' '}
        Nasci em 1993
        {' '}
      </h3>
      <h3 className="habitation">
        <FcHome />
        Moro em Itaquá - São Paulo
      </h3>
      <h4 className="description">
        <p>
          Um dos meus pensamentos de vida é que o conhecimento é uma das poucas coisas que não podem tirar de você.Por isso sou apaixonda em aprender e estar em constante evolução.
        </p>
        <p>
          Sendo assim tenho uma curiosidade instalada no meu modus operandi, busco sempre formas novas de fazer as coisas, buscando soluções mais simples para fazer com qualidade as atividades que me são propostas.
        </p>
        <p>
          Assim estudei química, me formei no técnico, em 2012 pela ETEC de Suzano, e em bacharela, em 2016 pela UMC (Mogi das Cruzes).
          Trabalho desde 2012 nessa área, e sempre busquei novas fontes de conhecimento.
        </p>
        <p>
          Essas buscas me trouxeram até a aŕea de desenvolvimento, mais precisamente para a linguagem PYTHON, e ainda em busca de novas possibilidades, a curiosidade em saber como o mundo da tecnologia funciona, me trouxe até a Trybe, onde decidi das inicio a uma nova jornada de aprendizagem.
          Hoje posso dizer que possuo conhecimentos em HTML5, JavaScript, Express, NodeJS, ReactJS, MySQL, Sequelize entre outras diversas stacks que ainda estou em processo de estudo e aprimoramento.
          Abaixo conheça um pouco mais dos projetos que ja desenvolvi.
        </p>
      </h4>
    </div>
  );
}

export default Sobre;
