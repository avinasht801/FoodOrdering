import React from 'react';
import delivery from './img/delivery.png';
import HeroBg from './img/heroBg.png';
import { headers } from 'next/dist/client/components/headers';
import { heroData } from '../utils/data';



const homeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center  gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Food Delivery
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={delivery} className='w-full h-full object-contain' alt='Delivery' />
                    </div>

                </div>
                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>Fastest Delivery in <span className='text-blue-500 text-[3rem] lg:text-[5rem]'>Nottingham</span></p>
                <p className='text-base text-text text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est fuga officia totam repellat amet inventore accusamus minima, voluptatibus dolorem vel. Laboriosam repellat sed delectus nisi, minima voluptate dolorum quisquam!</p>

                <button type='button' className='bg-gradient-to-br from-blue-200 to bg-blue-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 cursor-pointer inline'>Order Now</button>
            </div>
            <div className='py-2 flex-1 flex items-center relative '>
                <img src={HeroBg} className='ml-auto lg:h-650 h-420 w-full lg:w-auto' alt='Herobg'/>
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center gap-4 flex-wrap lg:px-44'>
                    {heroData && heroData.map(n=> (
                        <div key={n.id} className=' lg:w-190  p-4 bg-cardOverlay shadow-lg backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                        <img src={n.imageSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt='Icecream'/>
                        <p className='text-base lg:text-lg font-semibold text-textColor mt-1 lg:mt-3'>{n.name}</p>
                        <p className='text-[12px] lg:text-md text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                        <p className='text-sm font-semibold text-headingColor'><span className=' text-red-600'>£</span> {n.price}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default homeContainer
