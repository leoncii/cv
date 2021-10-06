import './styles.css'

import PlanetsAndClounds from '../Planets'
import { HeroDescription } from '../HeroDescription'

export function Hero () {
  return (
    <div className='hero'>
      <HeroDescription />
      <PlanetsAndClounds />
    </div>
  )
}
