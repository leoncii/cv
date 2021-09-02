import React from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Earth } from './components/svg-components/Earth'

import './icons.css'
import { NextJS } from './components/Icons/Nextjs'
import { ReactSvg } from './components/Icons/ReactSvg'
import { Js } from './components/Icons/Js'
import { GitHubActions } from './components/Icons/GitHubActions'

function App () {
  return (
    <>
      <Hero />
      <h1>Watch popdog.com cards :D! 🧨</h1>
      <div className='cards_container'>
        <section className='cards'>
          <div className='card'>
            <picture className='card_image'>
              <div>
                <NextJS />
                <ReactSvg />
                <Js />
                <GitHubActions />
              </div>
              <img
                className='card_bg'
                src='./andres.jpeg'
                alt=''
              />
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
      </div>

    </>
  )
}

export default App
