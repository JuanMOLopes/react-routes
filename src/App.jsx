import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Titulo from "./components/Header/Header";
import Meio from "./components/Meio/Meio";
import Lado from './components/Lado/Lado';
import Footer from "./components/Footer/Footer";

import Agatha from "./assets/Agatha.png"
import Ana from "./assets/Ana.png"
import Zayra from "./assets/Zayra.png"
import Anubis from "./assets/Anubis.png"
import Lucas from "./assets/Lucas.png"
import Juan from "./assets/Juan.png"
import Instagram from "./assets/insta.png"
import Gmail from "./assets/gmail.png"
import Logo from "./assets/logo.png";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Titulo desafio="DESAFIO 1 de PROPS - REACT" logo={Logo}/>

      <div className="container">
        <div className="cards">
          <Meio nome="Agatha França" img={Agatha} hobby="Hobby: Ler e assistir live da Shopee" />
          <Meio nome="Ana Beatriz" img={Ana} hobby="Hobby: Fofocar as 3am" />
          <Meio nome="Anúbis" img={Anubis} hobby="Hobby: Programar" />
          <Meio nome="Juan Lopes" img={Juan} hobby="Hobby: Programar" />
          <Meio nome="Lucas Marin" img={Lucas} hobby="Hobby: Jogar Tennis" />
          <Meio nome="Zayra França" img={Zayra} hobby="Hobby: Dormir" />
        </div>

        <div className="valores">
          <Lado txt1="Companheirismo" txt2="Confiança" txt3="Resiliência" />
        </div>
      </div>

      <Footer texto1="@JuanMOLopes 🤳" insta={Instagram} texto2="juan.molopes@gmail.com 💻" gmail={Gmail} texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉" />

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
oi

export default App;