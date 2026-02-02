import React from 'react'
import Hero from '../components/Hero'
import LatestProduct from '../components/LatestProduct'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (<>    
   <div>
    <Hero />
    <LatestProduct/>
    <BestSeller/>
    <Ourpolicy/>
    <NewsLetter/>
   </div>
  </>
  )
}

export default Home