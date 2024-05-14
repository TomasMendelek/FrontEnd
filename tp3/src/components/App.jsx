import React from 'react'
import "./app.css"
import { Presentacion } from './Presentacion'
import { Contador } from './Contador'
import { GeneradorColores } from './GeneradorColores'
import { GeneradorEmojis } from './GeneradorEmojis'
import { Adivinanza } from './Adivinanza'
export const App = () => {
  return (
    <>
    <Presentacion/>
    <main className="main">
        <Contador/>
        <GeneradorColores/>
    </main>
    <main>
      <GeneradorEmojis/>
      <Adivinanza/>
    </main>
    </>
  )
}
