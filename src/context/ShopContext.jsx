import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const ShopContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL

export const ShopContextProvider = (props) => {
   const currency = 'Rs'
   const deliveryfee = 100
   const [search, setSearch] = useState('')
   const [showSearch, setShowSearch] = useState(false)
   const [cartItems, setCartItems] = useState({})
   const [productlist, setProductlist] = useState([])
   const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')
   const getProduct = async () => {
      try {
         const response = await axios.get('http://localhost:4000/api/product/list')
         if (response.data.success) {
            setProductlist(response.data.product)
         } else {
            console.log(response.data.msg)
         }
      } catch (error) {
         console.log(error)
      }

   }

   const navigate = useNavigate()
   const addToCart = async (itemId, size) => {
      let cartData = structuredClone(cartItems)
      if (cartData[itemId]) {
         if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
         } else {
            cartData[itemId][size] = 1
         }
      } else {
         cartData[itemId] = {}
         cartData[itemId][size] = 1;
      }

      setCartItems(cartData)
  if(token){
     const result = await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
  }
   }

   const updateQuantity = async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems)
      cartData[itemId][size] = quantity
      setCartItems(cartData)
      const result = await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
     }

   const getCartAmount = () => {
      let totalAmount = 0
      for (const items in cartItems) {
         const productData = productlist.find((item) => item._id === items);
         for (const item in cartItems[items]) {
            try {
               if (cartItems[items][item] > 0) {
                  totalAmount += productData.price * cartItems[items][item]
               }
            } catch (error) {

            }
         }
      }
      return totalAmount
   }

   const getCartCount = () => {
      let totalCount = 0;
      for (const items in cartItems) {
         for (const item in cartItems[items]) {
            try {
               if (cartItems[items][item] > 0) {
                  totalCount += cartItems[items][item];
               }
            } catch (error) {

            }
        }
      }
      return totalCount;
   }

   const getCartItem = async () => {
      try {
         let response = await axios.post(backendUrl +'/api/cart/get',{},{headers:{token}})
                    if (response.data.success) {
            setCartItems(response.data.cartData)
         } else {
            console.log(response.data.msg)
         }
      } catch (error) {
         console.log(error)
      }

   }


   useEffect(() => {
      getProduct()
   }, [])

   useEffect(() => {
   if(token){
      getCartItem()
   }
   },[token])


   const value = {
      products, currency, deliveryfee, backendUrl,
      search, setSearch, productlist, showSearch, setShowSearch, cartItems, addToCart,
      getCartCount, updateQuantity, getCartAmount, navigate, setToken, token, setCartItems
   }



   return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
   )
}



export default ShopContext