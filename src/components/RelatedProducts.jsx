import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext.jsx'
import Title from './Title.jsx'
import Product from '../pages/Product.jsx'

import Products from './Products.jsx'
 
const RelatedProducts = ({category,type}) => {
   const {products,productlist} = useContext(ShopContext)
   const [related, setRelated] = useState([])
   useEffect(()=>{
    if(category.length>0){
        let fpcopy = productlist.slice() 
         fpcopy = fpcopy.filter((item)=> category === item.category) 
         fpcopy = fpcopy.filter((item)=> type === item.subCategory) 
         setRelated(fpcopy.slice(0,5))
     }
   },[productlist])
    return (
    <div className='my-24' >
     <div className='text-center text-3xl py-2 '>
       <Title title1={'Related'} title2={'Products'} />
     </div>
    <div className='grid grid-col-2 sm:grid-cols-3  md:grid-col-4 lg:grid-col-5 gap-4 gap-y-6' >
     {related.map((item ,index)=>(
         <Products key={index}   id={item._id} name={item.name} price={item.price} image={item.image} />
     ))}
    </div>
    </div>
  )
}

export default RelatedProducts