import React, { useState } from 'react';
import "./adivinanza.css"

export const Adivinanza = () => {
    const [numeroAleatorio, setNumeroAleatorio] = useState(GenerarNumeroAleatorio());
    const [adivinanzaNumero, setAdivinanzaNumero] = useState("0");
    const [mensaje, setMensaje] = useState("Escribe un numero!");

    function GenerarNumeroAleatorio() {
        return Math.floor(Math.random() * 20) + 1;
    }

    const manejarAdivinanza = () => {
        const numeroAdivinado = parseInt(adivinanzaNumero);
        if (numeroAdivinado === numeroAleatorio) {
            setMensaje("Felicidades!!! Has adivinado el número!");
        } else if (numeroAdivinado < numeroAleatorio) {
            setMensaje("El número es más grande que "+ numeroAdivinado +", Sigue intentando!");
        } else {
            setMensaje("El número es menor que "+ numeroAdivinado +", Sigue intentando!");
        }
    };

    return (
        <section>
            <h2>Adivinanza</h2>
            <h4>Intenta adivinar el número entre 1 y 20</h4>
            <div className="inputs">
                <input 
                    className="adivinar"
                    type="number"
                    value={adivinanzaNumero}
                    onChange={(e) => setAdivinanzaNumero(e.target.value)}
                />
                <button className="boton2" onClick={manejarAdivinanza}>Adivinar</button>
            </div>
            <h4 className="h4">{mensaje}</h4>
        </section>
    );
};
