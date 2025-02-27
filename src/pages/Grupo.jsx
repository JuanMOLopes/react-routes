import Titulo from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


function Grupo (){
    return(
        <div> 
            <Titulo desafio="PROJETO - REACT" logo={Logo}/>
        <h1> O monstro do lago Ness </h1>
        <p> O monstro do lago Ness, monstro de Loch Ness, também conhecido simplesmente por Nessie, é um criptídeo aquático que alegadamente foi visto no Loch Ness (Lago Ness), nas Terras Altas da Escócia, no Reino Unido. A sua existência (ou não) continua a suscitar debate entre os cépticos e os crentes, e é um dos mistérios da criptozoologia.[1] O monstro de Loch Ness é descrito como uma espécie de monstro ou réptil gigante marinho, semelhante ao plesiossauro, um sauropterígeo pré-histórico. </p>
        <img src="" alt="" />
        <p> </p>
        <Footer texto1="@JuanMOLopes" insta={Instagram} texto2="juan.molopes@gmail.com 💻" gmail={Gmail} texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉" />

        </div>
    )
}

export default Grupo