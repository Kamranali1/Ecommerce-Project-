import React from 'react'
import Title from '../components/Title.jsx'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter.jsx'
const Contact = () => {
  return (
    <div>
      <div className='text-center  text-2xl pt-10 border-t '>
           <Title title1={'CONTACT'} title2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center'>
            <img src={assets.contact_img} className='w-full sm:max-w-[480px] ' alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
           <p className='font-semibold text-xl'> Our Store</p>
           <p className='text-gray-500' >Nawbshah maryam road <br /> street no:5</p>
           <p  className='text-gray-500'> Tel: 03000919191 <br /> Email:contactus@gmail.com</p>
           <p className='font-semibold text-xl '> Careers At Forever </p>
              <p className='text-gray-500' >Learn more about our teams and job opening </p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs </button>
          </div>
      </div>
        <NewsLetter />
    </div>

  )
}

export default Contact