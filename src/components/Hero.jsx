import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'
const Hero = () => {
    return (
        <div className='flex flex-col  sm:flex-row   border border-gray-400'>
            {/* left side  */}
            <div className='b w-full sm:w-1/2 flex items-center justify-center py-10 '>
                <div className='text-[#414141] ' >
                    <div className='flex items-center gap-2'>
                        <p className='w-8 sm:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base '>OUR BESTSELLER</p>  
                    </div>
                    <h1 className='text-3xl  sm:text-5xl font-medium leading-3'>LATEST ARRIVAL </h1>
                   <div className='flex items-center gap-2'>
                        <p className='font-medium text-sm md:text-base '>SHOP NOW</p>  
                        <p className='w-8 sm:w-11 h-[2px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            <img src={assets.hero_img} className='prata-regular w-full sm:w-1/2' alt="" />
        </div>
    )
}

export default Hero