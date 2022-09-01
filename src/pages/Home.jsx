import React from 'react'
import { images } from '../constants'

function Home() {
  return (
    <>
        <div className="relative -z-50 flex overflow-x-hidden ">
          <div className="mt-20 py-12 animate-marquee whitespace-nowrap">
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
          </div>

          <div className="absolute -z-50 top-0 mt-20 py-12 animate-marquee2 whitespace-nowrap ">
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
            <span className="text-10xl mx-4 font-bold stroke-home">WILKER PAIVA -</span>
          </div>
        </div>
        
        <div className='w-full h-fit -mt-96 flex justify-center items-center flex-col'>
          <div className='flex flex-col justify-center items-center '>
            <img className='w-[300px] rounded-full bg-about-color drop-shadow-2xl md:w-[600px] -z-10' src={images.heroImg} alt="Hero image" />
            <p className=' absolute text-white w-[300px] md:w-[580px] text-center font-bold text-sm md:text-3xl font-["Lato"] mt-48 md:mt-96 -z-10'>
              Sou um editor audiovisual, motion designer 
              e programador frontend, que adora transformar 
              ideias em realidade.|
            </p>
          </div>
          <div className='flex flex-col items-center justify-center py-3 mt-10'>
            <img src={images.arrow} alt="seta"  className='text-center -mt-4 mb-4 md:mt-0'/>
            <p className='font-["Roboto"] text-gray w-[300px] md:w-[590px] text-[14px] md:text-[24px] text-center text-size'>
              Faço edições, motion designer e programo websites.
              Atualmente você pode me encontrar nessas redes:
            </p>
            <ul className='flex w-40 mt-4 bg-about-color p-4 rounded-full'>
              <li className='px-2 w-40'><a target='_blank' href="https://www.linkedin.com/in/wilker-paiva-0855b1215"><img src={images.linkedinIcon} alt="Icone Linkedin" /></a></li>
              <li className='px-2 w-40'><a target='_blank' href="https://www.behance.net/wilkerpaiv9934"><img src={images.behanceIcon} alt="Icone Behance" /></a></li>
              <li className='px-2 w-40'><a target='_blank' href="https://github.com/wilkerpaiva"><img src={images.githubIcon} alt="Icone Github" /></a></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Home