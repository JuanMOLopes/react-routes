import "./Paginas.css";

import Titulo from "./components/Header/Header";
import Lado from "./components/Lado/Lado";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Instagram from "../../public/instagram.png";
import Gmail from "../../public/gmail.png";
import Logo from "../../public/logo.png";

function Home() {
  return (
    <div>
      <Titulo desafio="🏠 HOME" logo={Logo} />

      <div className="container">
        <Navbar />

        <article>
          <img src={peixe} alt="" />
        </article>

        <Lado />
      </div>

      <Footer
        texto1="@JuanMOLopes 🤳"
        insta={Instagram}
        texto2="juan.molopes@gmail.com 💻"
        gmail={Gmail}
        texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉"
      />
    </div>
  );
}
export default Home;
