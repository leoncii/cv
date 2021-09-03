import React from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { AndresCom } from './components/AndresCom.jsx'
import { NelsonCom } from './components/NelsonCom.jsx'

import './icons.css'

function App () {
  return (
    <>
      <Hero />
      <h2 className='title'>Ejemplos</h2>
      <div className='cards_container'>
        <section className='cards'>
          <AndresCom />
          <NelsonCom />
        </section>
      </div>

    </>
  )
}

export default App
