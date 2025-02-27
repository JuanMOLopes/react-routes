import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Titulo from "./components/Header/Header";
import Meio from "./components/Meio/Meio";
import Lado from "./components/Lado/Lado";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Agatha from "./assets/Agatha.png";
import Ana from "./assets/Ana.png";
import Zayra from "./assets/Zayra.png";
import Anubis from "./assets/Anubis.png";
import Lucas from "./assets/Lucas.png";
import Juan from "./assets/Juan.png";
import Instagram from "./assets/insta.png";
import Gmail from "./assets/gmail.png";
import Logo from "./assets/logo.png";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Grupo from "./pages/Grupo"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/grupo" element={<Grupo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
oi;

export default App;
