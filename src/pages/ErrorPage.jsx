import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-white font-semibold text-[64px]'>ERROR 404 !!!</h1>
      <p className='text-white'>Essa página não existe! =)</p>
      <Link to="/" className='text-white bg-about-color p-3 rounded-md mt-10'>Voltar para a página inicial</Link>
    </div>
  )
}

export default ErrorPage