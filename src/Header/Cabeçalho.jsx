import React from 'react';
import { GiChemicalDrop } from 'react-icons/gi';

function Cabeçalho() {
  return (
    <div className="header fixed flex top-0 h-[50px] w-full flex-col bg-[#201F40] text-[#8C3545]">
      <div className="logo flex justify-center flex-row text-[40px]">
        <GiChemicalDrop />
        Erika Lima
        <GiChemicalDrop />
      </div>
      {/* <div>
        the image of the day
      </div> */}
    </div>
  );
}

export default Cabeçalho;
