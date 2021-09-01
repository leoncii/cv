import React from 'react'
import './App.css'

import { Earth } from '../svg-components/Earth'
import { Mars } from '../svg-components/Mars'
import { Venus } from '../svg-components/Venus'
import { Saturn } from '../svg-components/Saturn'
import { Neptune } from '../svg-components/Neptune'
import { Jupiter } from '../svg-components/Jupiter'

function App () {
  return (
    <>
      <div className='hero'>
        <div className='planets_container'>
          <Earth />
          <Mars />
          <Venus />
          <Saturn />
          <Neptune />
          <Jupiter />
        </div>
        <img
          className='backgrond'
          src='./1.1.1.jpg'
          alt='Esto es el fondo op ue hice para mi cv'
        />
      </div>

    </>
  )
}

export default App
