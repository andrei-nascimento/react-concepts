import React, { useCallback, useEffect, useState } from "react";

// Função
function Exemplo13_useCallback() {

    // useState
    const [cor, setCor] = useState('blue');
    const [numero, setNumero] = useState(0);

    // Função para alterar a cor
    const alterarCor = () => {
        setCor(cor === 'blue' ? 'gray' : 'blue');
    }

    // Função para listar os números em um array
    const listarNumeros = useCallback(() => {
        return [numero - 1, numero, numero + 1];
    }, [numero]);

    //Retorno
    return(
        <div style={{ backgroundColor: cor }}>
            <button onClick={alterarCor}>Alterar cor</button>
            <input type='number' value={numero} onChange={e => setNumero(parseInt(e.target.value))} />

            <ComponenteListarNumeros lista={listarNumeros} />
        </div>
    );

}

// Componente Listar Números
function ComponenteListarNumeros({ lista }) {

    // useState
    const [vetor, setVetor] = useState([])

    // useEffect
    useEffect(() => {
        setVetor(lista);
    }, [lista]);

    // Retorno
    return(
        <ul>
            {vetor.map(n => (<li key={n}>{n}</li>))}
        </ul>
    );
}

// Exportar
export default Exemplo13_useCallback;