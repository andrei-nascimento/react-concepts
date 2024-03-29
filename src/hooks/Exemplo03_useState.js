// Importar módulos
import React, { useState } from "react";

// Função
function Exemplo03_useState() {

    //useState
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);

    // Média
    let media = (nota1 + nota2) / 2;

    //Situação
    let situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';

    //Retorno
    return(
        <div>
            <input 
                type='number' 
                placeholder='Digite a primeira nota' 
                onChange={ e => setNota1(parseFloat(e.target.value)) } 
            />
            <input
                type='number' 
                placeholder='Digite a segunda nota'
                onChange={ e => setNota2(parseFloat(e.target.value)) } 
            />

            { nota1 && nota2 ? <p>{situacao} com média {media}</p> : '' } 
        </div>
    );

}

//Exportar
export default Exemplo03_useState;