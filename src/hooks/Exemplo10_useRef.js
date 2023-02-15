import React, { useRef } from "react";

// Função
function Exemplo10_useRef() {

    // useRef (Usado amplamente em formulários para modificar elementos HTML)
    const elemento = useRef();

    // Função
    const acao = () => {
        elemento.current.focus(); // Deixa o elemento input selecionado
        elemento.current.style.backgroundColor = 'red'; // Muda o fundo do elemento input para vermelho
        elemento.current.value = 'Digite algo...'; // Inclui o valor da frase no elemento input
    }

    //Retorno
    return(
        <div>
            <input type='text' ref={elemento} />
            <input type='button' value='Clique aqui' onClick={acao} />
        </div>
    );

}

// Exportar
export default Exemplo10_useRef;