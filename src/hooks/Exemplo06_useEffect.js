// Importar módulos
import React, { useState, useEffect } from "react";

// Função
function Exemplo06_useEffect() {

    // useState para armazenar os dados que virão da API
    const [vetor, setVetor] = useState([]);
    const [status, setStatus] = useState('Carregando...');

    // useEffect (feito quando todo o resto já estiver montado)
    useEffect(() => {
        obterDados();
    });

    //Função para obter os dados da API
    const obterDados = async () => {

        const dados = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const converter = await dados.json();
        setVetor(converter);
        setStatus('Dados carregados com sucesso!')
    }

    //Retorno
    return(
        <div>
            <h1>{status}</h1>
            <ul>
                {vetor.map(objeto => (
                    <li>{objeto.title}</li>
                ))}
            </ul>
        </div>
    );

}

//Exportar
export default Exemplo06_useEffect;