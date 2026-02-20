import React, { useContext, useEffect, useState } from 'react'
import Title from './Title.jsx'
import ShopContext from '../context/ShopContext.jsx'
import Products from './Products.jsx'

const LatestProduct = () => {
    const { products,productlist } = useContext(ShopContext)
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct(productlist.slice(0, 10))
    },[productlist]
    )

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
            <Title title1={'LATEST'} title2={'Collection'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm lg:text-base'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, asperiores! Tenetur hic, praesentium fugiat sequi facere quam voluptatibus molestias inc</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 '>
                {product.map((value, index) => {
                    return (
                        <Products key={index} id={value._id} name={value.name} image={value.image} price={value.price} />
                    )
                })}
            </div>
        </div>
    )
}

export default LatestProduct