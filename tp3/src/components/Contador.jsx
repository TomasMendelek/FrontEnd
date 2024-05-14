import React from 'react'
import { BotonContador } from './BotonContador'
import "./contador.css"

export const Contador = () => {
  return (
    <section className='contador'>
        <h2>Contador</h2>
        <h4 className="contador-">Cuando el contador llegue a <b>5000</b>, algo pasara!</h4>
        <BotonContador className="BotonContador"/>
    </section>
  )
}
