// Importar módulos
import React from "react";

// Componente Principal
function Principal() {

    let texto = 'Passando a variável como props, sem useContext';

    return(
        <Camada1 texto={texto}/>
    );
}

// Componente Camada1
function Camada1({texto}) {
    return(
        <div style={{ 
            backgroundColor: 'red', 
            width: '500px', height: '500px', 
            display: 'inline-block' 
        }}>
            <Camada2 texto={texto}/>
        </div>
    );
}

// Componente Camada2
function Camada2({texto}) {
    return(
        <div style={{ 
            backgroundColor: 'green', 
            width: '400px', 
            height: '400px', 
            margin: '50px', 
            display: 'inline-block' 
        }}>
            <Camada3 texto={texto}/>
        </div>
    );
}

// Componente Camada3
function Camada3({texto}) {
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