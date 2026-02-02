import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets/frontend_assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams()
  const { products ,currency ,addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
   const[size,setSize] = useState('')
  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
      }
      return null
    })
  }
  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10  transition-opacity ease-in duration-500  opacity-100 ' >
      {/*product data*/}

      <div className='flex  flex-col gap-12 sm:gap-12 sm:flex-row '>
        {/*product images*/}
        <div className=' flex-1 flex  flex-col-reverse gap-3 sm:flex-row '>
          
          <div className='flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll  justify-between sm:justify-normal sm:w-[18.7%]  w-full ' >
            {productData.image.map((item ,index)=>( 
              <img onClick={()=>{setImage(item)}}  src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' alt="" />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
           <img className='w-full h-auto' src={image} alt="" />
          </div>
         </div>
         <div className='flex-1' >
            <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
             <div className='flex gap-1 pt-2 '>
              <img src={assets.star_icon} className='w-3 5'  alt="" />
              <img src={assets.star_icon} className='w-3 5'  alt="" />
              <img src={assets.star_icon} className='w-3 5'  alt="" />
              <img src={assets.star_icon} className='w-3 5'  alt="" />
              <img src={assets.star_dull_icon} className='w-3 5'  alt="" />
              <p className='pl-2' > (122)</p>
             </div>
             <p className='mt-5 font-medium text-3xl' >  {currency} {productData.price} </p>
             <p className='mt-5 text-gray-500 md:4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                <p>Select Size </p>
              <div className='flex  gap-2' >
              {productData.sizes.map((item ,index)=>(
                <button onClick={()=>{setSize(item)}} key={index} className={`px-4 py-3 bg-gray-100 ${item === size?'border border-orange-300':''}`} >{item}</button>
              ))}
              </div>
              </div>
             <button  onClick={()=>{addToCart(productData._id,size)}} className='bg-black text-white px-8 py-3 mt-10  text-sm active:bg-gray-700'> ADD TO CART</button> 
              <hr className='mt-8 sm:w-4/5'  />

              <div className='text-sm text-gray-500  mt-5  flex flex-col gap-1 '>
                <p>100% Original Product</p>
                <p> Cash on Delivery is available on this product</p>
                <p>Easy return and exchange policy within 7 days</p> 
              </div>
        </div>

      </div>
      {/* descrition section*/}

      <div className='mt-20'>

    <div className='flex'>
     <p className='border px-5 py-3  text-sm'> Description </p>
     <p className='border px-5 py-3 text-sm'> review (122)</p>
    </div>
    <div className='flex flex-col  gap-4 px-6 py-6 border text-sm text-gray-500'>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum veritatis provident aliquam doloremque nostrum voluptatum! Doloribus, laudantium iusto minus praesentium fugiat provident perferendis, molestiae tempora id voluptas magnam inventore.</p>
       <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ducimus vel aspernatur atque voluptatem quo optio, quam quidem, quos eveniet, iste minus eius. Dignissimos, ab! Veniam, vero tempora. Optio, velit.</p>
    </div>
      </div>


      {/* display related product */}
      <div className=''>
   <RelatedProducts category={productData.category} type={productData.subCategory} />
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product