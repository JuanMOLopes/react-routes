import Titulo from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import pagina2 from "./public/imagens/pg2.jpg"


function Grupo (){
    return(
        <div> 
            <Titulo desafio="PROJETO - REACT" logo={Logo}/>
        <h1> Grupo 2 - Os caçadores de monstros marinhos 👹👹 </h1>
        <p> Os integrantes do grupo 2 secretamente, caçam monstros marinhos durante as horas vagas!  </p>
        <img src="" alt="" />
        <p> </p>
        <Footer texto1="@JuanMOLopes" insta={Instagram} texto2="juan.molopes@gmail.com 💻" gmail={Gmail} texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉" />

        </div>
    )
}

export default Grupo
