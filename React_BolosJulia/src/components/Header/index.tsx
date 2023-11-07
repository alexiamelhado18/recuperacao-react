import "./style.css";

import { Link } from "react-router-dom";

import logo from "../../assets/img/logo 1.png";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <div className="linha1">
                    <img src={logo} alt="logo bolos julia" />
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/cadastro/bolo"}>Cadastrar</Link>
                        <Link to={"/lista/bolo"}>Bolos</Link>
                    </nav>
                </div>
                <div className="linha2">
                    <p>Seja bem vindo ao bolos Júlia</p>
                </div>
            </div>
        </header>
    );
};

export default Header;