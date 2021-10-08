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
            className='linkedin_anchor'
          />
          <Anchor
            href=''
            text='Resumen'
          />
        </div>
      </div>
      <Image
        className='o'
        src='./leo.png'
        alt=''
      />
    </div>
  )
}
