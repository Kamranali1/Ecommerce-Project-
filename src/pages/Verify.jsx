import React from 'react'
import { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Verify = () => {
    const {navigate,setCartItems,backendUrl,token } = useContext(ShopContext)
    const [searchParams,setSearchParams] = useSearchParams()

    const orderId =  searchParams.get('orderId')
    const success = searchParams.get('success')
    const verify = async()=>{
      if(!token) return null 
      
      try{
         const res = await axios.post(backendUrl+'/api/order/verifyStripe',{orderId,success},{headers:{token}})
         console.log(res)
         if(res.data.success){
            setCartItems({})
            navigate('/orders')
         }else{
            navigate('/cart')
         }
          
      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
    }
    useEffect(()=>{
       verify()
    },[])
    return (
    <div></div>
  )
}

export default Verify