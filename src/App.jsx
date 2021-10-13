import './App.css'
import { Hero } from './components/Hero'
import { CardProject } from './components/CardProject'
import { Footer } from './components/Footer'
import { Meh } from './components/Meh'

function App () {
  return (
    <>
      <Hero />
      <h2 className='title'>Proyectos</h2>
      <div className='cards_container'>
        <section className='cards'>
          <CardProject
            title='Andres Gym'
            description='Una web personalizada para un gimnasio que ofrece servicios de entrenamiento personal y asesoramiento en nutrición deportiva.'
            img='./andresReal.webp'
            github='https://github.com/leoncii/andres'
            website='https://andrestorrico.com'
          />
          <CardProject
            title='Nelson Peluqueria Spa'
            description='Una página sencilla para una peluquería que aumento en número de seguidores en Facebook a 17 mil personas e incorpora Google Analytics, Tag Manager para gestionar mejor el embudo de clientes potenciales.'
            img='./nelsonReal.webp'
            github='https://github.com/leoncii/spa-nelson'
            website='https://nelson-peluqueria.com'
          />
          <CardProject
            title='Simple Pimpumpam'
            description='Un blog sencillo y personal, hecho con NextJs y publicado en tiktok para que la gente lo vea .'
            img='./simpleReal.webp'
            github='https://github.com/leoncii/simple-pimpumpam.com'
            website='https://simple-pimpumpam.com'
          />
          <CardProject
            title='View Cryptocurrencies Market '
            description='Aplicación hecha en React Native que ve los precios actuales de las criptomonedas y diferenciarlas con otros Brokers.'
            img='./coins.jpeg'
            github='https://github.com/leoncii/coins'
            website='https://play.google.com/store/apps/details?id=com.LTB_144.TradingView'
          />
        </section>
      </div>
      <Meh />
      <Footer />
    </>
  )
}

export default App
