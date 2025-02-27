import "./Paginas.css";

import Titulo from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import pagina2 from "../../public/pg2.jpg";
import Logo from "../../public/logo.png";
import Instagram from "../../public/instagram.png";
import Gmail from "../../public/gmail.png";

function Grupo() {
  return (
    <div>
      <Titulo desafio="PROJETO - REACT" logo={Logo} />
      <h1> Grupo 2 - Os caçadores de monstros marinhos 👹👹 </h1>
      <p>
        Os integrantes do grupo 2 secretamente, caçam monstros marinhos durante
        as horas vagas!
      </p>
      <img src={pagina2} alt="" />
      <p> </p>
      <Footer
        texto1="@JuanMOLopes"
        insta={Instagram}
        texto2="juan.molopes@gmail.com 💻"
        gmail={Gmail}
        texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉"
      />
    </div>
  );
}

export default Grupo;
