import './App.css'
import { Hero } from './components/Hero'
import { CardProject } from './components/CardProject'
import { Footer } from './components/Footer'

import './icons.css'

function App () {
  return (
    <>
      <Hero />
      <h2 className='title'>Sites</h2>
      <div className='cards_container'>
        <section className='cards'>
          <CardProject
            title='Andres Gym'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et perspiciatis nam sapiente iste fugiat doloribus numquam, aut quod quo explicabo minima quos exercitationem consectetur aliquam perferendis dolore, excepturi dolor quaerat.'
            img='./andres.jpeg'
            github='https://github.com/leoncii/andres'
            website='https://andrestorrico.com'
          />
          <CardProject
            title='Nelson Peluqueria Spa'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et perspiciatis nam sapiente iste fugiat doloribus numquam, aut quod quo explicabo minima quos exercitationem consectetur aliquam perferendis dolore, excepturi dolor quaerat.'
            img='./nelson.jpeg'
            github='https://github.com/leoncii/spa-nelson'
            website='https://nelson-peluqueria.com'
          />
          <CardProject
            title='Simple Pimpumpam'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et perspiciatis nam sapiente iste fugiat doloribus numquam, aut quod quo explicabo minima quos exercitationem consectetur aliquam perferendis dolore, excepturi dolor quaerat.'
            img='./simple.jpeg'
            github='https://github.com/leoncii/simple-pimpumpam.com'
            website='https://simple-pimpumpam.com'
          />
        </section>
      </div>

      <Footer />
    </>
  )
}

export default App
