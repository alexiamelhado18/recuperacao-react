//rotas
import { Link } from "react-router-dom";

//estilização
import "./style.css";

//hooks
import { useEffect, useState } from "react";

//
import api from "../../utils/api";

function Home() {

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolo() {
        api.get("bolos")
            .then((response) => {
                setBolos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        listarBolo();
    }, []);
    return (

        <main className="home_main">

            <section className="banner"></section>

            <section className="mais_vendidos container">
                <h2>Mais Vendidos</h2>
                <div>

                    {
                        bolos.map((bolo: any, index: number) => {
                            if (index <= 2) {
                                return <Link to="#" className="card" key={index}>
                                    <img src={"http://localhost:3000/static/" + bolo.user_img} alt={"Foto de um" + bolo.nome} />
                                    <h3>{bolo.nome}</h3>
                                    <span>R$ {bolo.valor}</span>
                                </Link>

                            }
                        })
                    }

                </div>
                <Link to={"lista/bolo"}>Ver mais bolos...</Link>
            </section>

            <section className="aproveite container">
                <h2>Aproveite</h2>
                <div>
                    <div className="card">
                        <h3>Cube Assintura</h3>
                        <p>Se torne cliente fidelizado e receba divresas vantagens</p>
                        <Link to="#">Saiba mais</Link>
                    </div>
                    <div className="card">
                        <h3>Monte seu bolo</h3>
                        <p>Escolha os ingredientes e receba um bolo feito para você!</p>
                        <Link to="#">Saiba mais</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;