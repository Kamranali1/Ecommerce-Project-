import React, { useContext, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Collection from './pages/Collection.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import Placeorder from './pages/Placeorder.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Searchbar from './components/Searchbar.jsx'
import ShopContext from './context/ShopContext.jsx'
import { ToastContainer } from 'react-toastify'
import Verify from './pages/Verify.jsx'

const App = () => {
  return (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
       <ToastContainer />
       <Navbar />
        <Searchbar  />
       <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/contact' element={<Contact/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/collection' element={<Collection/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/orders' element={<Orders/>}> </Route>
        <Route path='/placeorders' element={<Placeorder />}> </Route>
        <Route path='/product/:productId' element={<Product/>}> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path='/verify' element={<Verify />} />
      </Routes>
         
       <Footer />   
      </div>
  )
}

export default App