import React from 'react'

import { NextJS } from './Icons/Nextjs'
import { ReactSvg } from './Icons/ReactSvg'
import { Js } from './Icons/Js'
import { GitHubActions } from './Icons/GitHubActions'

export function NelsonCom () {
  return (
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
          src='./nelson.jpeg'
          alt=''
        />
      </picture>
      <div>
        <h2 className='subTitle'><span>Nelson</span> Peluqueria Spa</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et perspiciatis nam sapiente iste fugiat doloribus numquam, aut quod quo explicabo minima quos exercitationem consectetur aliquam perferendis dolore, excepturi dolor quaerat.</p>
        <div className='anchors'>
          <a href='#'>GitHub</a>
          <a href='#'>Linkedin</a>
          <a href='#'> Link</a>
        </div>
      </div>
    </div>
  )
}
