import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext.jsx'
import Title from './Title.jsx'
import Products from './Products.jsx'

const BestSeller = () => {
    const { productlist } = useContext(ShopContext)
    const [bestProduct, setBestproduct] = useState([])
    useEffect(() => {
        const product = productlist.filter((item) => item.bestseller)
        setBestproduct(product.slice(0,5))
    }, [productlist])
    return (
        <div className='my-10'>
            <div className='text-center py-5 '>
                <Title title1={'BEST'} title2={'SELLER'} />
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minima aliquid ex sed sapiente consequuntur voluptate sit est r</p>
            </div>

            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5' >
                  {bestProduct.map((value,index)=>{
                  return <Products key={index} id={value._id} name={value.name} image={value.image} price={value.price} />
                  })}
            </div>

        </div>
    )
}

export default BestSeller