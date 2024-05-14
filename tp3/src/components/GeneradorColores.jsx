import React from 'react'
import "./generadorColores.css"
import { useState } from 'react';

export const GeneradorColores = () => {
    const [color, setColor] = useState("var(--primario)");
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    return ( 

        <section className="colores">
            <h2>Generador de Color</h2>
            <div className="contenedorColores">
                <h4>Puedes Cambiar el color del cuadro de abajo!</h4>
            </div>
            <div className="custom-div" style={{ backgroundColor: color }}>
                <input type="color" className="select-color" value={color} onChange={handleColorChange} />
                </div>
        </section>
    );
}
