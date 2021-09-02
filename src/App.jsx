import React from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Earth } from './components/svg-components/Earth'

function App () {
  return (
    <>
      <Hero />
      <h1>Watch popdog.com cards :D! 🧨</h1>
      <section className='cards'>
        <div className='card'>
          <picture>
            <div>
              <Earth
                className='earth_card'
              />
            </div>
          </picture>
          <div>
            <h2><span>Build</span> your community</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et perspiciatis nam sapiente iste fugiat doloribus numquam, aut quod quo explicabo minima quos exercitationem consectetur aliquam perferendis dolore, excepturi dolor quaerat.</p>

            <div className='anchors'>
              <a href='#'>GitHub</a>
              <a href='#'>Linkedin</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
