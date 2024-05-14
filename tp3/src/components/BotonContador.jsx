import React from 'react'
import { useState } from 'react'
import "./boton.css"

export const BotonContador = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <button className="button1" onClick={() => setCount((count) => count + 100)}>Contador  <b className="b1">{count}</b></button>
        </div>
    )
    }
