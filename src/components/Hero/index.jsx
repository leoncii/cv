import './styles.css'

import PlanetsAndClounds from '../Planets'
import { Anchor } from '../Anchor'

export function Hero () {
  return (
    <div className='hero'>
      <div className='hero_description'>
        <div>
          <h1>Leonardo Torrico</h1>
          <p>Desarrollador de aplicaciónes web y escritorio</p>
          <div className='anchors'>
            <Anchor
              href=''
              text='Linkedin'
            />
            <Anchor
              href=''
              text='GitHub'
            />
          </div>
        </div>
        <picture>
          <img
            loading='lazy'
            src='./googleAna.png'
            alt=''
          />
        </picture>
      </div>
      <PlanetsAndClounds />
    </div>
  )
}
