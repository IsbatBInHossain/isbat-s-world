import React from 'react'
import './loader.css'

const HomeLoader = () => {
  return (
    <div className=' z-50 absolute left-0 top-0 bg-dark text-white flex flex-col gap-5 justify-center items-center w-full h-screen'>
      <div className='loading w-fit font-bold font-mono text-3xl'></div>
      <div className='loader'></div>
    </div>
  )
}

export default HomeLoader
