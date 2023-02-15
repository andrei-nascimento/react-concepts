import React, { useState, useMemo } from "react";

// Função
function Exemplo12_useMemo() {

    // useState
    const [contador, setContador] = useState(0);
    const [nomes, setNomes] = useState(['Andrei', 'Rita', 'Vera', 'Letícia']);

    // useMemo (Não atualiza o valor se não sofre alteração, questão de performance)
    const listaSemRender = useMemo(() => {
        return <ListarNomes lista={nomes} />
    }, [nomes]);

    //Retorno
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={e => setContador(contador + 1)}>Incrementar</button>

            {listaSemRender}
        </div>
    );

}

// Componente para listar nomes
function ListarNomes({lista}) {

    return(
        <ul>
            {lista.map(nome => (<li key={nome}>{nome}</li>))}
        </ul>
    )

}

// Exportar
export default Exemplo12_useMemo;