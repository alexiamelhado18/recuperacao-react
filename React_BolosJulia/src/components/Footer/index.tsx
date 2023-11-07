//estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom";

//imagens
import imgWhatsApp from "../../assets/img/whats 1.png";
import imgFacebook from "../../assets/img/face 1.png";
import imgInstagram from "../../assets/img/instag 1.png";

function Footer() {
    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                <div>
                    <Link to={"#"}>
                        <img src={imgWhatsApp} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={imgFacebook} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={imgInstagram} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;