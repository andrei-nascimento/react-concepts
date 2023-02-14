// Importar módulos
import React, { createContext, useContext } from "react";

//Criar Contexto (Local onde-se pode especificar states, variáveis, funções e etc de maneira global)
const Contexto = createContext();

// Componente Principal
function Principal() {

    let texto = 'Passando informações com useContext';

    return(
        <Contexto.Provider value={{ texto }}>
            <Camada1 />
        </Contexto.Provider>
    );
}

// Componente Camada1
function Camada1() {
    return(
        <div style={{ 
            backgroundColor: 'red', 
            width: '500px', height: '500px', 
            display: 'inline-block' 
        }}>
            <Camada2 />
        </div>
    );
}

// Componente Camada2
function Camada2() {
    return(
        <div style={{ 
            backgroundColor: 'green', 
            width: '400px', 
            height: '400px', 
            margin: '50px', 
            display: 'inline-block' 
        }}>
            <Camada3/>
        </div>
    );
}

// Componente Camada3
function Camada3() {

    const {texto} = useContext(Contexto);

    return(
        <div style={{ 
            backgroundColor: 'yellow', 
            width: '300px', 
            height: '300px', 
            margin: '50px' 
        }}>
            <p>{texto}</p>
        </div>
    );
}

export default Principal;