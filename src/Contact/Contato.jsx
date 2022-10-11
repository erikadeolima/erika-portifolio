import React from 'react';
import { SiGithub, SiLinkedin, SiMicrosoftoutlook } from 'react-icons/si';

function Contato() {
  return (
    <div className="contact flex flex-wrap items-center justify-center w-full space-x-5 bg-[#8C3545] text-[#201F40]">
      <div className="flex items-center justify-center w-full text-[25px]"> Como me contatar? </div>
      <div className="email flex items-center justify-center grow-0 w-full space-x-[10px] text-[14px]">
        <div className="flex grow-0 text-[17px]">Mande-me um e-mail:</div>
        <div className="flex grow-1" href="mailto:erikadeo.lima@hotmail.com">
          <SiMicrosoftoutlook />
          erikadeo.lima@hotmail.com
        </div>
      </div>
      <div className="follow flex items-center justify-center w-full">
        <div className="flex items-center justify-center mx-[50px] w-full space-x-[10px] text-[17px]">
          Siga-me nas redes sociais:
          <div className="gitHub flex mx-[20px] text-[14px]" href="https://github.com/erikadeolima">
            <SiGithub />
            erikadeolima
          </div>
          <div className="linkedin flex  mx-[20px] text-[14px]" href="https://www.linkedin.com/in/erikadeolima/">
            <SiLinkedin />
            erikadeolima
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
