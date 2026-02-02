import React from 'react'

const Title = ({title1 , title2}) => {
  return (
    <div className='text-gray-200 text-[20px]'>
     <div className=' flex flex-row gap-2 items-center justify-center py-10'>
        <p className='text-3xl sm:text-5xl text-gray-300'> {title1} <span className='text-gray-600'>{title2}</span> </p>
        <p className='w-8 sm:w-20 mt-2 h-[4px] bg-slate-700 '></p>
     </div>
    </div>
  )
}

export default Title