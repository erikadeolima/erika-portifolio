import { SiGithub, SiLinkedin } from "react-icons/si";

function Contato(){
return(
  <div>
    <h1> Como me contatar? </h1>
    <p> Mande-me um e-mail 
      <a href="mailto:erikadeo.lima@hotmail.com">erikadeo.lima@hotmail.com</a>
    </p>
    <p> Siga-me nas redes sociais 
      <a href="https://github.com/erikadeolima"><SiGithub/>erikadeolima</a>
      <a href="https://www.linkedin.com/in/erikadeolima/"><SiLinkedin/>erikadeolima</a>
    </p>
  </div>
);
};

export default Contato;