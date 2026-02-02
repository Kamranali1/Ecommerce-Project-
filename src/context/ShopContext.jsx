import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
const ShopContext = createContext();

export const ShopContextProvider = (props) => {
   const currency = 'Rs'
   const deliveryfee = 100
   const [search, setSearch] = useState('')
   const [showSearch, setShowSearch] = useState(false)
   const [cartItems, setCartItems] = useState({})
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
   }

   const updateQuantity = async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems)
      cartData[itemId][size] = quantity
      setCartItems(cartData)
   }

   const getCartAmount = () => {
      let totalAmount = 0
      for (const items in cartItems) {
         const productData = products.find((item) => item._id === items);
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

   useEffect(() => {
      console.log(cartItems)
   })


   const value = {
      products, currency, deliveryfee,
      search, setSearch, showSearch, setShowSearch, cartItems, addToCart,
      getCartCount, updateQuantity,getCartAmount,navigate
   }


   return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
   )
}



export default ShopContext