import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import { images } from '../constants'

function About() {
  return (
    <AnimatedPage>
      <div className='flex justify-center mt-20'>
        <div className='md:w-[731px] md:flex md:flex-row md:justify-between md:items-start xxsm:flex xxsm:flex-col-reverse xxsm:items-center'>
          <div className='flex flex-col md:w-[386px] xxsm:w-[279px] xxsm:mt-10 md:mt-0'>
            <div>
              <p className='font-["Rubik"] text-gray text-[12px] md:text-right mb-2 xxsm:text-left'>SOBRE MIM</p>
              <p className='font-["Lato"] text-white text-[12px] md:text-right xxsm:text-justify'>
              Graduado em Cinema e Audiovisual pela Universidade Federal do Ceará (2018),
              atualmente é mestre em Artes pelo Programa de Pós-Graduação em Artes da 
              mesma instituição, onde desenvolveu pesquisa sobre remix, seu estado da arte e
              potencial de transformação política e social. Membro dos grupos de pesquisa:
              Grupo de Estudos em Edição e Montagem Intervalos e Ritmos (#IR!/UFC) e
              Atualidade do Pensamento Político de Herbert Marcuse (GP- Marcuse/UECE).
              </p>
            </div>
            <div className=' my-9'>
              <p className='font-["Rubik"] text-gray text-[12px] text-right mb-1'>HABILIDADES FRONTEND</p>
              <ul className='flex justify-end'>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.htmlIcon} alt="html icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.cssIcon} alt="css icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.javascriptIcon} alt="javascript icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.nodeIcon} alt="node icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.reactIcon} alt="react icon" /></li>
              </ul>
            </div>
            <div>
              <p className='font-["Rubik"] text-gray text-[12px] text-right mb-1'>HABILIDADES EM VíDEO E MOTION</p>
              <ul className='flex justify-end'>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.aeIcon} alt="html icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.prIcon} alt="css icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.psIcon} alt="javascript icon" /></li>
                <li className='w-10 m-2 hover:-translate-y-3 transition ease-in-out duration-500'><img src={images.ilIcon} alt="node icon" /></li>
              </ul>
            </div>
          </div>

          <div className='w-[279px] md:ml-10 flex flex-col'>
            <img src={images.aboutme} alt="foto do desenvolvedor" />
            <p className='font-["Lato"] italic text-[11px] text-gray text-center mt-2'>
              Um guerreiro do alimento! Caso queira conversar sobre
              tecnologia e arte manda um email ou uma DM =).
            </p>
            <a className='font-["Lato"] italic text-[11px] text-white hover:text-gray transition ease-linear text-center' href="https://www.instagram.com/wilker_cpaiva/" target="_blank" rel="noopener noreferrer">@wilker_cpaiva</a>
            <div className='flex justify-between mt-4'>
              <div className='flex flex-col'>
                <p className='font-["Rubik"] text-gray text-[14px] text-left mt-3 not-italic font-bold'>EXPERIÊNCIA</p>
                <a target="_blank" href='http://lattes.cnpq.br/0939305741520101' className='font-["Lato"] text-white text-[12px] text-left not-italic hover:text-gray transition ease-linear'>
                  Currículo Lattes
                </a>
                <a target="_blank" href='http://lattes.cnpq.br/0939305741520101' className='font-["Lato"] text-white text-[12px] text-left not-italic hover:text-gray transition ease-linear'>
                  Currículo Vitae
                </a>
              </div>
              <div className='flex flex-col'>
                <p className='font-["Rubik"] text-gray text-[14px] text-right mt-3 not-italic font-bold'>CONTATO</p>
                <a href='mailto:wilkerpaiva1@yahoo.com' className='font-["Lato"] text-white text-[12px] text-left not-italic hover:text-gray transition ease-linear'>
                    wilkerpaiva1@yahoo.com
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default About