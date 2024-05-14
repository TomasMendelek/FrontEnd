import React from 'react'
import "./presentacion.css"



export const Presentacion = ({nombre="Tomas Corbalan Mendelek", dedicacion="Developer FrontEnd", descripcion="Hola, Soy una apacionado Por la programacion y estoy aprendiendo react!"}) => {

    return (
    <>
    <div className="contenedor">
        <div className="fotoNombre">
            <img src='/src/assets/file.jpg' alt="Foto-Presentacion" className="foto" />
            <h2 className="nombre">{nombre}</h2>
        </div>
        <div className="info">
            <div className="lenguajes">
                <h4>Lenguajes</h4>
                <p>{dedicacion}</p>
                <div className="imagenes">
                    <img src="./src/assets/logos/html.png" alt="" />
                    <img src="./src/assets/logos/css.png" alt="" />
                    <img src="./src/assets/logos/js.png" alt="" />
                    <img src="./src/assets/logos/react.png" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className="descripcion">
                <h4>Descripcion</h4>
                <p>{descripcion}</p>
            </div>
        </div>
    </div>
    </>
    )
}
