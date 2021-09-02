import React from 'react'
import './styles.css'

import { Earth } from '../svg-components/Earth'
import { Mars } from '../svg-components/Mars'
import { Venus } from '../svg-components/Venus'
import { Saturn } from '../svg-components/Saturn'
import { Neptune } from '../svg-components/Neptune'
import { Jupiter } from '../svg-components/Jupiter'

export function Hero () {
  return (
    <div className='hero'>
      <div className='planets_container'>
        <Earth
          className='Earth'
        />
        <Mars />
        <Venus />
        <Saturn />
        <Neptune />
        <Jupiter />
      </div>
      <img
        className='backgrond'
        src='./1.1.3.jpg'
        alt='Esto es el fondo op ue hice para mi cv'
      />
    </div>
  )
}
