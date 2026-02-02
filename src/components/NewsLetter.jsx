import React from 'react'

const NewsLetter = () => {
  const onSubmitHandler = (event)=>{
    event.preventDefault()
  }

  return (
    <div className='text-center  mb-5'>
          <p className='text-2xl font-medium text-gray-800'> Subscribe Now and get 20% off </p>
          <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis quibusdam libero, dolore laudantium nam quidem reru </p>
    
    <form onSubmit={onSubmitHandler} className=' w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3'>
         <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1   outline-none  '  />
         <button type='submit' className='bg-black text-white text-xs px-10 py-4 '> Subscribe</button>
    </form>
        
    </div>
  )
}

export default NewsLetter