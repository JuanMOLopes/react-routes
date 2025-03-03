import "./Paginas.css";

import Titulo from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Meio from "../components/Meio/Meio"
import Lado from "../components/Lado/Lado";
import Footer from "../components/Footer/Footer";

import Agatha from "../../public/Agatha.png"
import Ana from "../../public/Ana.png"
import Zayra from "../../public/Zayra.png"
import Anubis from "../../public/Anubis.png"
import Lucas from "../../public/Lucas.png"
import Juan from "../../public/Juan.png"

import Instagram from "../../public/instagram.png";
import Gmail from "../../public/gmail.png";
import Logo from "../../public/logo.png";

function Grupo() {
  return (
    <div>
      <Titulo titulo="grupo 2" logo={Logo} />

      <div className="container">
        <Navbar />

        <div className="cards">
          <Meio nome="Agatha França" img={Agatha} hobby="Hobby: Ler e assistir live da Shopee" />
          <Meio nome="Ana Beatriz" img={Ana} hobby="Hobby: Fofocar as 3am" />
          <Meio nome="Anúbis" img={Anubis} hobby="Hobby: Programar" />
          <Meio nome="Juan Lopes" img={Juan} hobby="Hobby: Programar" />
          <Meio nome="Lucas Marin" img={Lucas} hobby="Hobby: Jogar Tennis" />
          <Meio nome="Zayra França" img={Zayra} hobby="Hobby: Dormir" />
        </div>

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
export default Grupo;
