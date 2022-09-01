import React from 'react'
import { images } from '../constants'
import data from '../api/data'
import Portfolio from '../components/Portfolio'

function Video() {
  const dataArray = data.data.portfolio
  return (
    <>
      <section>
        <h1 className='text-white md:text-9xl font-["Rubik"] ml-10 xsm:text-3xl xxsm:text-[24px] xxsm:mt-5'>VIDEO & MOTION</h1>
        <img src={images.arrow} alt="Seta" className='ml-80 xsm:ml-48 xxsm:ml-40 xxsm:mt-3'/>
        <p className='text-gray lg:w-[628px] lg:ml-10 mt-4 xsm:w-[20rem] xsm:text-[12px] xsm:text-center lg:text-left lg:text-[25px] xxsm:text-center xxsm:ml-0 xxsm:text-[12px] xsm:ml-10'>
        Faço edições audiovisuais e motion graphics utilizando as melhores
        tecnologias e estrategias para dar vida, sentido e emoção
        a ideias criativas.
        </p>
        <img src={images.arrow} alt="Seta" className=' ml-80 mt-5 xsm:ml-48 xxsm:ml-40'/>
      </section>

      {/* PORTFOLIO COMPONENT */}

      {dataArray.map((item) => 
        item.role === "MOTION DESIGNER" && <Portfolio key={item.id} dataPortfolio={item}/>
      )}
      
    </>
  )
}

export default Video