import Titulo from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


function Contato (){
    return(
        <div> 
            <Titulo desafio="PROJETO - REACT" logo={Logo}/>
        <h1> Contato </h1>
        <p> Contrate nossos serviços como caçadores de monstros marinhos. Somos experientes e dedicados a acabar com as bestas em sua piscina! </p>
        <img src="" alt="" />
        <p> Telefone : (19)40028922 </p>
        <Footer texto1="@JuanMOLopes" insta={Instagram} texto2="juan.molopes@gmail.com 💻" gmail={Gmail} texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉" />

        </div>
    )
}

export default Contato  