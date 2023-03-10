// Importar módulos
import React, { useState, useEffect } from "react";

// Função
function Exemplo05_useEffect() {

    // useState
    const [texto, setTexto] = useState('Hello World');

    // useEffect
    useEffect(() => {

        setInterval(() => {
            setTexto('useEffect executado com sucesso!')
        }, 3000);

    });

    //Retorno
    return(
        <div>
            <p>{texto}</p>
        </div>
    );

}

//Exportar
export default Exemplo05_useEffect;