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
        <Earth />
        <Mars />
        <Venus />
        <Saturn />
        <Neptune />
        <Jupiter />
        <img className='cloud cloud0' src='./cloud.svg' alt='' />
        <img className='cloud cloud1' src='./cloud.svg' alt='' />
        <img className='cloud cloud2' src='./cloud.svg' alt='' />
        {/* <img className='cloud cloud3' src='./cloud.svg' alt='' />
        <img className='cloud cloud4' src='./cloud.svg' alt='' /> */}
      </div>
      <div className='space_container'>
        {/* <img
          className='floorEdit'
          src='./floorEdit3.png'
          alt='Esto es el fondo op ue hice para mi cv'
        />
        <img
          className='spaceEdit'
          src='./spaceEdit01.png'
          alt=''
        /> */}
      </div>
    </div>
  )
}
