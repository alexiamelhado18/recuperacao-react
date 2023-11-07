//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";


function ListaBolo() {

    const [bolos, setBolos] = useState<any[]>([]);


    function listarBolo() {
        api.get("bolos")
            .then((response) => {
                console.log(response.data);

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
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}
                {
                    bolos.map((bolo: any, index: number) => {
                        return <CardBolo
                            key={index}
                            nome={bolo.nome}
                            foto={bolo.user_img}
                            ingredientes={bolo.ingredientes}
                            cobertura={bolo.cobertura}
                            valor={bolo.valor}
                        />
                    })
                }
            </section>
        </main>
    );
};

export default ListaBolo;