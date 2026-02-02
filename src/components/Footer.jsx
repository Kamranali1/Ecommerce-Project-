import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
const Footer = () => {
    return (
        <>
        <div className='  flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='w-32 mb-5' alt="" />
                <p className='w-full md:w-2/3 text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non i
                    ure voluptatibus architecto excepturi sunt corrupti possimus accusantium dignissimos cum autem voluptas sed, voluptates explicabo? Cupiditate fugit illum repellendus labore
                    laborum.</p>
            </div>
            <div >
               <p className='text-xl font-medium mb-5'> COMPANY</p>
               <ul className='flex flex-col gap-1 text-gray-600'>
               <li>Home </li>
               <li>About us </li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
               </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+92309-1339736</li>
               <li>ContactUS@gmail.com</li>
              </ul>

            </div>
        </div>
      
  <div>  
    <hr />
    <p className='py-5 text-center text-sm'>Copyright 2026@ forever.com - All Right Reserved </p>
   </div>
        </>
    )
}

export default Footer