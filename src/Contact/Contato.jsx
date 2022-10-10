import { SiGithub, SiLinkedin, SiMicrosoftoutlook } from "react-icons/si";

function Contato(){
return(
  <div>
    <h1> Como me contatar? </h1>
    <p> Mande-me um e-mail:
      <p><a href="mailto:erikadeo.lima@hotmail.com"><SiMicrosoftoutlook/> erikadeo.lima@hotmail.com</a></p>
    </p>
    <p> Siga-me nas redes sociais:
      <p>
        <a href="https://github.com/erikadeolima"><SiGithub/> erikadeolima</a>
        <p/>
        <a href="https://www.linkedin.com/in/erikadeolima/"><SiLinkedin/> erikadeolima</a>
      </p>      
    </p>
  </div>
);
};

export default Contato;