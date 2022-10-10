import React from 'react';
import { GiChemicalDrop } from 'react-icons/gi';

function Cabeçalho() {
  return (
    <div className="header">
      <div className="logo">
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
