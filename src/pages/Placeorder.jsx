import React, { useContext, useState } from 'react'
import Title from '../components/Title.jsx'
import CartTotal from '../components/CartTotal.jsx'
import { assets } from '../assets/assets/frontend_assets/assets'
import ShopContext from '../context/ShopContext.jsx'
import axios from 'axios'
import {toast} from 'react-toastify'
const Placeorder = () => {
  const [payment, setPayment] = useState('')
  const { navigate ,backendUrl,token,cartItems,setCartItems,getCartAmount,deliveryfee,productlist} = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''

  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }
 
   const onSubmitHandler = async (e) =>{
        e.preventDefault()
      try{  
      let  orderItems = []
          for(let items in cartItems){
            for (let item in cartItems[items]){
                 if(cartItems[items][item]>0){
                  let itemInfo = structuredClone(productlist.find(item=> item._id === items))
                  if(itemInfo){
                    itemInfo.size = item
                    itemInfo.quantity = cartItems[items][item]
                    orderItems.push(itemInfo)
                  }
                }
            }
          }
       
         const orderData = {
          address : formData,
          items : orderItems,
          amount : getCartAmount() + deliveryfee
         }

         switch (payment){
          case 'Cash':
           const res = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
            console.log(res)  
           if(res.data.success){
              setCartItems({})
              navigate('/orders')
             }else{
              toast.error(res.data.msg)
             }
          break;
         case 'Stripe':
              const resStripe = await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
              if(resStripe.data.success){
                 const {session_url} = resStripe.data
                 window.location.replace(session_url)
              }else{
                console.log(resStripe.data.msg)
              }  
         break;
            default:
              break;
         }

      }catch(error){
       console.log(error)

      }
             
      }

  return (
    <form onSubmit={(e)=>onSubmitHandler(e)} >

      <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        <div className='flex flex-col gap-4 w-full sm:w-[480px]' >
          <div className='text-xl sm:text-2xl my-3'>
            <Title title1={'DELIVERY'} title2={'INFORMATION'} />
          </div>
          <div className='flex gap-3'>
            <input required   onChange={(e) => onChangeHandler(e)} value={formData.firstname} name='firstname' type="text" placeholder='First Name' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
            <input  required  onChange={(e) => onChangeHandler(e)} value={formData.lastname} type="text" placeholder='Last Name' name='lastname' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          </div>
          <input  required  onChange={(e) => onChangeHandler(e)} value={formData.email} type="email" placeholder='Email Address' name='email' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          <input  required  onChange={(e) => onChangeHandler(e)} value={formData.street} type="text" placeholder='Street' name='street' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          <div className='flex gap-3'>
            <input required   onChange={(e) => onChangeHandler(e)} value={formData.city} type="text" placeholder='City' name='city' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
            <input required   onChange={(e) => onChangeHandler(e)} value={formData.state} type="text" placeholder='State' name='state' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          </div>
          <div className='flex gap-3'>
            <input required   onChange={(e) => onChangeHandler(e)} value={formData.zipcode} type="number" placeholder='ZipCode' name='zipcode' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
            <input  required  onChange={(e) => onChangeHandler(e)} value={formData.country} type="text" placeholder='Country' name='country' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
          </div>
          <input  required   type="number" onChange={(e) => onChangeHandler(e)} value={formData.phone} placeholder='Phone Number' name='phone' className='border px-3.5 py-1.5 bg-gray-100  w-full ' />
        </div>

        {/* right side */}

        <div className='mt-8'>
          <div className='mt-8 min-w-80 '>
            <CartTotal />
          </div>

          <div className='mt-12' >
            <Title title1={'PAYMENT'} title2={'METHODS'} />
            <div className='flex gap-3 flex-col  lg:flex-row'>
              <div onClick={() => { setPayment('Stripe') }} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${payment === 'Stripe' ? 'bg-green-400' : ''} `}></p>
                <img className='h-5 mx-4 ' src={assets.stripe_logo} alt="" />
              </div>
              <div onClick={() => { setPayment('Cash') }} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${payment === 'Cash' ? 'bg-green-400' : ''} `}></p>
                <p className='text-gray-500 text-sm  font-medium mx-4 x '>CASH ON DELIVERY</p>
              </div>
            </div>
          </div>
          <div className='w-full text-end  mt-8'>
            <button type="submit"   className='bg-black text-white px-16 py-3 text-sm ' >Place Order</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder