import React from 'react';

function Projetos() {
  return (
    <div className="projeto flex flex-wrap items-center justify-center w-full space-x-5 bg-[#8C3545] text-[#201F40]">
      <div className="flex items-center justify-center w-full text-[25px]"> Conheça meus projetos: </div>
      <div className="email flex items-center justify-center grow-0 w-full space-x-[10px] text-[14px]">
        <div className="flex grow-0 text-[17px]">Titulo do Projeto:</div>
      </div>
    </div>
  );
}

export default Projetos;
