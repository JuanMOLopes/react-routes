import "./Paginas.css";

import Titulo from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import pagina4 from "../../public/pg4.jpg";
import Logo from "../../public/logo.png";
import Instagram from "../../public/instagram.png";
import Gmail from "../../public/gmail.png";

function Sobre() {
  return (
    <div>
      <Titulo desafio="O monstro do lago Ness" logo={Logo} />
      <article>
        <p>
          O monstro do lago Ness, monstro de Loch Ness, também conhecido
          simplesmente por Nessie, é um criptídeo aquático que alegadamente foi
          visto no Loch Ness (Lago Ness), nas Terras Altas da Escócia, no Reino
          Unido. A sua existência (ou não) continua a suscitar debate entre os
          cépticos e os crentes, e é um dos mistérios da criptozoologia.[1] O
          monstro de Loch Ness é descrito como uma espécie de monstro ou réptil
          gigante marinho, semelhante ao plesiossauro, um sauropterígeo
          pré-histórico.
        </p>
        <img src={pagina4} alt="" />
      </article>
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

export default Sobre;
