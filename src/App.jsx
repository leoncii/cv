import './App.css'
import { Hero } from './components/Hero'
import { CardProject } from './components/CardProject'
import { Footer } from './components/Footer'

import './icons.css'

function App () {
  return (
    <>
      <Hero />
      <h2 className='title'>Aplicaciónes</h2>
      <div className='cards_container'>
        <section className='cards'>
          <CardProject
            title='Andres Gym'
            description='Una web para un gymnasio que ofrece servicios de entrenamiento personal y asesoramiento '
            img='./andres.jpeg'
            github='https://github.com/leoncii/andres'
            website='https://andrestorrico.com'
          />
          <CardProject
            title='Nelson Peluqueria Spa'
            description='Una web para una peluqueria de 17k seguidores en Facebookb que incorpora google analytics, tag manager para una mejor gestion de marketing y atención al cliente.'
            img='./nelson.jpeg'
            github='https://github.com/leoncii/spa-nelson'
            website='https://nelson-peluqueria.com'
          />
          <CardProject
            title='Simple Pimpumpam'
            description='Un blog personal simple, sobre los temas que estoy interesado.'
            img='./simple.jpeg'
            github='https://github.com/leoncii/simple-pimpumpam.com'
            website='https://simple-pimpumpam.com'
          />
          <CardProject
            title='View Cryptocurrencies Market '
            description='Una aplicación para ver los precios actuales de las criptomonedas.'
            img='./coins.jpeg'
            github='https://github.com/leoncii/coins'
            website='https://play.google.com/store/apps/details?id=com.LTB_144.TradingView'
          />
        </section>
      </div>

      <div className='meh'>
        <h1 className='title'>Sobre mí</h1>
        <p> ¡Hola! 👋, Me llamo<strong> Leonardo Torrico </strong>desarrollador de JavasCript Soy alguien abierto, confiable y me gusta ayudar a otras personas.</p>
        <p>siempre me a gustado saber como funcionan las cosas y sobre todo las tecnologias que usamos todos los dias como fue cambiando la manera de vivir de las personas y como evoluciono en la historia de la humanidad para que lleguemos a estar todos conectados con tan solo presionar un clic 🙂.</p>
      </div>

      <Footer />
    </>
  )
}

export default App
