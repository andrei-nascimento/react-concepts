// Importar módulos
import React, { useState } from "react";

// Função
function Exemplo04_useState() {

    // Modelo (JSON)
    const modelo = {
        nome: '',
        email: '',
        cidade: ''
    };

    // useState
    const [form, setForm] = useState(modelo);

    // Evento
    const event = (e) => {
        let name = e.target.name;
        let valor = e.target.value;

        setForm({ ...form, [name]:valor });
    }

    //Retorno
    return(
        <div>
            <input 
                type='text' 
                name='nome'
                placeholder='Informe o nome'
                onChange={event} 
            />
            <input
                type='text'
                name='email'
                placeholder='Informe o e-mail'
                onChange={event} 
            />
            <input
                type='text'
                name='cidade'
                placeholder='Informe a cidade'
                onChange={event} 
            />      

            <p>{form.nome}</p>
            <p>{form.email}</p>
            <p>{form.cidade}</p>

            <p>{JSON.stringify(form)}</p>
        </div>
    );

}

//Exportar
export default Exemplo04_useState;