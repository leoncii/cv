import { Anchor } from '../Anchor'
import { Image } from '../Image'

export function HeroDescription () {
  return (
    <div className='hero_description'>
      <div>
        <h1><span className='leo'>Leonardo</span>Torrico</h1>
        <p>Desarrollador de aplicaciónes web y escritorio.</p>
        <div className='anchors'>
          <Anchor
            href='https://www.linkedin.com/in/leonardo-torrico-becerra-14232b1a5/'
            text='Linkedin'
            className='linkedin_anchor'
          />
          <Anchor
            download
            href='./cv.pdf'
            text='Resumen'
          />
        </div>
      </div>
      <Image
        classname='cvleo'
        src='./CV0PSD.webp'
        alt=''
      />
    </div>
  )
}
