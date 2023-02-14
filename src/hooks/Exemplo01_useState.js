//Importar módulo React e o hook useState
import React, { useState } from "react";

// Função
function Exemplo01_useState() {

    //useState
    const [texto, setTexto] = useState('Hello World');

    //Evento
    const eventoHandler = (e) => {
        setTexto(e.target.value);
    }

    //Retorno
    return(
        <div>
            <input type='text' onChange={eventoHandler} />
            <p>{texto}</p>
        </div>
    );

}

// Exportar
export default Exemplo01_useState;