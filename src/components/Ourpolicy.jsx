import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets.js'
const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around text-center gap-20 sm:gap-5  ' >

     <div className='text-center pt-10 pb-10'>
        <img src={assets.exchange_icon} className='w-25  m-auto' alt="" />
        <p className='font-semibold'>Best Exchange Policy</p>
        <p className='text-gray-400'>we Provide Easy Exchange Policy </p>
     </div>
      <div className='text-center pt-10 pb-10'>
        <img src={assets.quality_icon} className='w-25  m-auto' alt="" />
        <p className='font-semibold'>7 Days Return Policy </p>
        <p className='text-gray-400'>We Provide 7 Days Easy Return Policy </p>
     </div>
      <div className='text-center pt-10 pb-10'>
        <img src={assets.support_img} className='w-25  m-auto' alt="" />
        <p className='font-semibold'>BEST CUSTOMER SUPPORT</p>
        <p className='text-gray-400'>we Provide  24/7 Customer Support  </p>
     </div>
    </div>
  )
}

export default Ourpolicy