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

function Sobre() {
  return (
    <div>
      <Titulo titulo="sobre nós" logo={Logo} />

      <div className="container">
        <Navbar />

        <article>
          <h2>Grupo 2</h2>
          <p>
            Secretamente, os integrantes do Grupo 2 caçam monstros marinhos
            durante as horas vagas!
          </p>

          <div className="container-column">
            <div className="row">
              <img src={Cthulhu} alt="" />
              <div className="column">
                <h3>Cthulhu</h3>
                <p>Cthulhu é uma entidade cósmica de poder incomensurável, frequentemente descrito como uma criatura com traços humanoides, cabeça de polvo, asas dragônicas e um corpo escamoso. Ele reside em um sono profundo na cidade submersa de R'lyeh, aguardando o momento certo para emergir e reivindicar o domínio sobre a Terra. Sua mera presença é capaz de causar insanidade naqueles que o veem, e seu despertar é temido como o prenúncio do fim dos tempos. Cthulhu é o arquétipo do horror cósmico, simbolizando a insignificância da humanidade diante das forças do universo.</p>
              </div>
            </div>

            <div className="row reverse">
              <img src={Leviathan} alt="" />
              <div className="column">
                <h3>Leviathan</h3>
                <p>O Leviatã é uma criatura colossal das profundezas, frequentemente retratada como uma serpente marinha ou dragão aquático de proporções titânicas. Presente em mitologias e textos sagrados, ele é conhecido por sua fúria incontrolável e sua capacidade de destruir navios com um único golpe de sua cauda. O Leviatã personifica a força indomável do oceano, um lembrete de que, por mais que a humanidade tente dominar a natureza, há criaturas que jamais serão subjugadas. Ele é tanto um símbolo de destruição quanto de poder primordial.</p>
              </div>
            </div>

            <div className="row">
              <img src={KingCrab} alt="" />
              <div className="column">
                <h3>King Crab</h3>
                <p>O Rei Caranguejo é uma criatura abissal que reina sobre os recifes mais profundos e escuros do oceano. Com uma carapaça impenetrável e garras capazes de esmagar até os materiais mais resistentes, ele é um predador temido por todas as criaturas marinhas. Dizem que ele guarda tesouros perdidos de civilizações antigas, acumulados ao longo de séculos em seu domínio subaquático. O Rei Caranguejo é uma figura enigmática, representando tanto a riqueza oculta das profundezas quanto o perigo que espreita nas sombras.</p>
              </div>
            </div>

            <div className="row reverse">
              <img src={RapeAbissal} alt="" />
              <div className="column">
                <h3>Rape Abissal</h3>
                <p>O Rape Abissal é uma criatura grotesca e perturbadora, cuja aparência combina elementos de peixe e pesadelo. Ele habita as regiões mais escuras do oceano, onde usa uma luz bioluminescente para atrair suas presas. Uma vez hipnotizadas, as vítimas são devoradas por suas mandíbulas afiadas e dentes serrilhados. O Rape Abissal é um símbolo do horror que se esconde nas profundezas, um predador silencioso e implacável que lembra aos exploradores oceânicos que nem todos os mistérios devem ser desvendados.</p>
              </div>
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
export default Sobre;
