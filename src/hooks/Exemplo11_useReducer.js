import React, { useReducer } from "react";

// Função
function Exemplo11_useReducer() {

    // Função para incrementar e decrementar
    const funcao = (state, acao) => {

        switch(acao) {
            case 'incrementar':
                return state + 1;

            case 'decrementar':
                return state - 1;
            
            default:
                return 0;
        }
    }

    // useReducer (Mais usado em projetos de média e longa escola, quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores )
    const [contador, executarFuncao] = useReducer(funcao, 0);

    //Retorno
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={e => executarFuncao('incrementar')}>Incrementar</button>
            <button onClick={e => executarFuncao('decrementar')}>Decrementar</button>
        </div>
    );

}

// Exportar
export default Exemplo11_useReducer;