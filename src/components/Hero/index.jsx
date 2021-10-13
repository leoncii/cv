import './styles.css'

import PlanetsAndClounds from '../Planets'
import { HeroDescription } from '../HeroDescription'
import { Image } from '../Image'

export function Hero () {
  return (
    <div className='hero'>
      <Image
        classname='bg'
        src='./fondo.webp'
        alt='Background hecho en figma del espacio parecido al de behance.'
      />
      <HeroDescription />
      <PlanetsAndClounds />
    </div>
  )
}
