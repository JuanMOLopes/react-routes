import "./Paginas.css";

import Titulo from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Lado from "../components/Lado/Lado";
import Footer from "../components/Footer/Footer";

import Instagram from "../../public/instagram.png";
import Gmail from "../../public/gmail.png";
import Logo from "../../public/logo.png";

import Cthulhu from "../../public/cthulhu.jpg";
import Leviathan from "../../public/leviathan.jpg";
import KingCrab from "../../public/king-crab.jpg";
import RapeAbissal from "../../public/rape-abissal.jpg";

function Home() {
  return (
    <div>
      <Titulo titulo="caça monstros marinhos s.a." logo={Logo} />

      <div className="container">
        <Navbar />

        <article>
          <h2>Monstros Marinhos</h2>
          <div className="monstros-container">
            <div className="monstros">
              <img src={Cthulhu} alt="" />
              <p>Cthulhu</p>
            </div>

            <div className="monstros">
              <img src={Leviathan} alt="" />
              <p>Leviathan</p>
            </div>

            <div className="monstros">
              <img src={KingCrab} alt="" />
              <p>King Crab</p>
            </div>

            <div className="monstros">
              <img src={RapeAbissal} alt="" />
              <p>Rape Abissal</p>
            </div>
          </div>
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
export default Home;
