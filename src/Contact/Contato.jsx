import React from 'react';
import { SiGithub, SiLinkedin, SiMicrosoftoutlook } from 'react-icons/si';

function Contato() {
  return (
    <div className="contact">
      <h1> Como me contatar? </h1>
      <p className="email">
        Mande-me um e-mail:
        <p>
          <a href="mailto:erikadeo.lima@hotmail.com">
            <SiMicrosoftoutlook />
            erikadeo.lima@hotmail.com
          </a>
        </p>
      </p>
      <div className="follow">
        <p>
          Siga-me nas redes sociais:
          <p>
            <a className="gitHub" href="https://github.com/erikadeolima">
              <SiGithub />
              erikadeolima
            </a>
            {'     '}
            <a className="linkedin" href="https://www.linkedin.com/in/erikadeolima/">
              <SiLinkedin />
              erikadeolima
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Contato;
