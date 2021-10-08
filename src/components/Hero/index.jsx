import './styles.css'

import PlanetsAndClounds from '../Planets'
import { HeroDescription } from '../HeroDescription'

export function Hero () {
  return (
    <div className='hero'>

      <img
        className='bg'
        src='./b.svg'
        alt='Background hecho en figma del espacio parecido al de behance.'
      />

      <HeroDescription />
      <PlanetsAndClounds />
    </div>
  )
}
