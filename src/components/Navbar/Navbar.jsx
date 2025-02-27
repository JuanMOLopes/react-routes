import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul>
                <li><Link to="/">🏠 Home</Link></li>
                <li><Link to="/sobre">ℹ Sobre</Link></li>
                <li><Link to="/contato">📞 Contato</Link></li>
                <li><Link to="/grupo">🦃 Grupo</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;