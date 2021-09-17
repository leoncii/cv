import './styles.css'

import Planets from '../Planets'
import { Anchor } from '../Anchor'

export function Hero () {
  return (
    <div className='hero'>
      <Planets />
      <div className='hero_description'>
        <div>
          <h1>Leonardo Torrico</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum tenetur voluptas explicabo sequi accusamus in et ea porro. Doloremque cupiditate eaque reiciendis quaerat dicta. Amet nesciunt asperiores expedita omnis?</p>
          <div>
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
            src='./googleAna.png'
            alt=''
          />
        </picture>
      </div>
    </div>
  )
}
