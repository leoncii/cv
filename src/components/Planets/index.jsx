import { Earth } from '../svg-components/Earth'
import { Mars } from '../svg-components/Mars'
import { Venus } from '../svg-components/Venus'
import { Saturn } from '../svg-components/Saturn'
import { Neptune } from '../svg-components/Neptune'
import { Jupiter } from '../svg-components/Jupiter'
import { Clouds } from '../Clouds'

export default function PlanetsAndClounds () {
  return (
    <div className='planets_container'>
      <Earth />
      <Mars />
      <Venus />
      <Saturn />
      <Neptune />
      <Jupiter />
      <Clouds
        cloud='cloud0'
      />
      <Clouds
        cloud='cloud2'
      />
      <Clouds
        cloud='cloud1'
      />
    </div>
  )
}
