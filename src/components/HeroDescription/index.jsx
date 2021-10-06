import { Anchor } from '../Anchor'
import { Image } from '../Image'

export function HeroDescription () {
  return (
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
            text='Descargar CV'
          />
        </div>
      </div>
      <Image
        className='o'
        src='./yo.jpg'
        alt=''
      />
    </div>
  )
}
