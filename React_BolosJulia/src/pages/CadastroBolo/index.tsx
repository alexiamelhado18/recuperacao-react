//estilização
import "./style.css";

//hooks
import { useState } from "react";

//api
import api from "../../utils/api";


function CadastroBolo() {

    const [nome, setNome] = useState<string>("");
    const [ingredientes, setIngredientes] = useState<string>("");
    const [cobertura, setCobertura] = useState<string>("");
    const [imagem, setImagem] = useState<any>();
    const [valor, setValor] = useState<string>("");

    function cadastrarBolo(event: any) {
        event.preventDefault();

        const formData = new FormData();

        formData.append("nome", nome);
        formData.append("user_img", imagem);
        formData.append("cobertura", cobertura);
        formData.append("ingredientes", ingredientes);
        formData.append("valor", valor.toString());

        api.post("bolos", formData)
            .then((response) => {
                alert(`${nome} criado com sucesso! 😋🎂🍰`);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    function verificarCampoUpload(event: any) {
        console.log(event.target.files[0]);
        //atualiza o state foto com o valor do file
        setImagem(event.target.files[0]);
    }

    return (
        <main>
            <section className="cadastro">
                <div className="glass">
                    <h1>Cadastro de Bolos</h1>
                    <form method="POST" onSubmit={cadastrarBolo}>
                        <div>
                            <label htmlFor="nome">Nome do Bolo:</label>
                            <input
                                className="input_estilo"
                                name="nome"
                                type="text"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="valor">Valor do bolo:</label>
                            <input
                                className="input_estilo"
                                name="valor"
                                type="text"
                                id="valor"
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="imagem">Imagem:</label>
                            <input
                                className="input_estilo"
                                name="imagem"
                                type="file"
                                id="imagem"
                                onChange={verificarCampoUpload}
                            />
                        </div>

                        <div>
                            <label htmlFor="ingredientes">Ingredientes:</label>
                            <textarea
                                className="input_estilo"
                                name="ingredientes"
                                id="ingredientes"
                                onChange={(e) => setIngredientes(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="cobertura">Cobertura:</label>
                            <textarea
                                className="input_estilo"
                                name="cobertura"
                                id="cobertura"
                                onChange={(e) => setCobertura(e.target.value)}
                            >
                            </textarea>
                        </div>

                        <input className="btn" type="submit" value="Cadastrar" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CadastroBolo;