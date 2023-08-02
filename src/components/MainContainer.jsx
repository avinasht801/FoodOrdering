import React from 'react'
import HomeContainer from './homeContainer';

const MainContainer = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen flex-col '>
     <HomeContainer/>

     <section className='w-full'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from bg-orange-400 to-orange-700 transition-all duration-100 ease-in-out'>Fruits</p>
      </div>
     </section>
    </div>
  )
}

export default MainContainer
