import "./Paginas.css";

import Titulo from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Lado from "../components/Lado/Lado";
import Footer from "../components/Footer/Footer";

import Instagram from "../../public/instagram.png";
import Gmail from "../../public/gmail.png";
import Logo from "../../public/logo.png";

function Contato() {
  return (
    <div>
      <Titulo titulo="contato" logo={Logo} />

      <div className="container">
        <Navbar />

        <article>
          <p>Contrate nossos serviços como caçadores de monstros marinhos. Somos experientes e dedicados a acabar com as bestas em sua piscina!</p>
          <p><strong>Telefone:</strong> (19) 4002-8922</p>
        </article>

        <Lado txt1="Companheirismo" txt2="Confiança" txt3="Resiliência" />
      </div>

      <Footer
        insta={Instagram}
        gmail={Gmail}
        texto1="@juanmolopes"
        texto2="juanmolopes@gmail.com"
        texto3="O responsável pelo desenvolvimento foi Juan Lopes."
      />
    </div>
  );
}
export default Contato;
