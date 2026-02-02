import React, { useContext, useState } from 'react'
import Title from '../components/Title.jsx'
import CartTotal from '../components/CartTotal.jsx'
import { assets } from '../assets/assets/frontend_assets/assets'
import ShopContext from '../context/ShopContext.jsx'

const Placeorder = () => {
  const [payment, setPayment] = useState('')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:w-[480px]' >
        <div className='text-xl sm:text-2xl my-3'>
          <Title title1={'DELIVERY'} title2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          <input type="text" placeholder='Last Name' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
        </div>
        <input type="email" placeholder='Email Address' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
        <input type="text" placeholder='Street' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          <input type="text" placeholder='State' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='ZipCode' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          <input type="text" placeholder='Country' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
        </div>
        <input type="number" placeholder='Phone Number' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
      </div>

      {/* right side */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80 '>
          <CartTotal />
        </div>

        <div className='mt-12' >
          <Title title1={'PAYMENT'} title2={'METHODS'} />
          <div className='flex gap-3 flex-col  lg:flex-row'> 
            <div onClick={()=>{setPayment('Stripe')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p  className={`min-w-3.5 h-3.5 border rounded-full ${payment==='Stripe'?'bg-green-400':''} `}></p>
              <img  className='h-5 mx-4 ' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>{setPayment('Razor')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${payment==='Razor'?'bg-green-400':''} `}></p>
              <img  className='h-5 mx-4 ' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={()=>{setPayment('Cash')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${payment ==='Cash'?'bg-green-400':''} `}></p>
               <p  className='text-gray-500 text-sm  font-medium mx-4 x '>CASH ON DELIVERY</p>
            </div>
          </div>

        </div>
       
    <div className='w-full text-end  mt-8'>
      <button className='bg-black text-white px-16 py-3 text-sm ' onClick={()=>{navigate('/orders')}} >Place Order</button>
    </div>

      </div>

    </div>
  )
}

export default Placeorder