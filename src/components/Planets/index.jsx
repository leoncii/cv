import { Earth } from '../svg-components/Earth'
import { Mars } from '../svg-components/Mars'
import { Venus } from '../svg-components/Venus'
import { Saturn } from '../svg-components/Saturn'
import { Neptune } from '../svg-components/Neptune'
import { Jupiter } from '../svg-components/Jupiter'

export default function PlanetsAndClounds () {
  return (
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
    </div>
  )
}
