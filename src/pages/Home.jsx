import React, {useState} from 'react'
import { images } from '../constants'
import { motion } from 'framer-motion'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

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
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }} 
            className='flex flex-col justify-center items-center '
          >
            
            <motion.img
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible
              }}
              className='w-[300px] rounded-full bg-about-color drop-shadow-2xl md:w-[600px] -z-10' src={images.heroImg} alt="Hero image" 
            />

            <motion.p
            variants={itemVariants}
              className=' absolute text-white w-[300px] md:w-[580px] text-center font-bold text-sm md:text-3xl font-["Lato"] mt-48 md:mt-96 -z-10'
            >
              Sou um editor de vídeo, motion designer 
              e programador frontend, que adora transformar 
              ideias em realidade.
            </motion.p>
          
          </motion.div>


          <motion.div 
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }} 
            className='flex flex-col items-center justify-center py-3 mt-10'
          >
            <motion.img 
              variants={itemVariants}
              src={images.arrow} alt="seta"  className='text-center -mt-4 mb-4 md:mt-0'
            />
            <motion.p 
            variants={itemVariants}
            className='font-["Roboto"] text-gray w-[300px] md:w-[590px] text-[14px] md:text-[24px] text-center text-size'
            >
              Faço edições de vídeo, motion design e desenvolvo websites dinâmicos.
              Atualmente você pode me encontrar nessas redes:
            </motion.p>
            <motion.ul
              variants={itemVariants} 
              className='flex w-40 mt-4 bg-about-color p-4 rounded-full'
            >
              <li className='px-2 w-40'><a target='_blank' href="https://www.linkedin.com/in/wilker-paiva-0855b1215"><img src={images.linkedinIcon} alt="Icone Linkedin" /></a></li>
              <li className='px-2 w-40'><a target='_blank' href="https://www.behance.net/wilkerpaiv9934"><img src={images.behanceIcon} alt="Icone Behance" /></a></li>
              <li className='px-2 w-40'><a target='_blank' href="https://github.com/wilkerpaiva"><img src={images.githubIcon} alt="Icone Github" /></a></li>
            </motion.ul>
          </motion.div>
        </div>
    </>
  )
}

export default Home