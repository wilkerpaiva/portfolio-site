import React from 'react'
import { images } from '../constants'
import data from '../api/data'
import Portfolio from '../components/Portfolio'
import AnimatedPage from '../components/AnimatedPage'

function Dev() {
  const dataArray = data.data.portfolio
  return (
    <AnimatedPage>
      <section>
        <h1 className='text-white md:text-9xl font-["Rubik"] ml-10 xsm:text-3xl xxsm:text-[24px] xxsm:mt-5'>PROJETOS FRONTEND</h1>
        <img src={images.arrow} alt="Seta" className='ml-80 xsm:ml-48 xxsm:ml-40 xxsm:mt-3'/>
        <p className='text-gray lg:w-[628px] lg:ml-10 mt-4 xsm:w-[20rem] xsm:text-[12px] xsm:text-center lg:text-left lg:text-[25px] xxsm:text-center xxsm:ml-0 xxsm:text-[12px] xsm:ml-10'>
        Construo frontend websites visando utilizar as melhores
        tecnologias e estrategias para dar vida, sentido e emoção
        as expressões criativas do design.
        </p>
        <img src={images.arrow} alt="Seta" className=' ml-80 mt-5 xsm:ml-48 xxsm:ml-40'/>
      </section>

      {/* PORTFOLIO COMPONENT */}

      {dataArray.map((item) => 
        item.role === "FRONTEND DEVELOPER" && <Portfolio key={item.id} dataPortfolio={item}/>
      )}
      
    </AnimatedPage>
  )
}

export default Dev