import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestProduct from '../components/LatestProduct.jsx'
import BestSeller from '../components/BestSeller.jsx'
import Ourpolicy from '../components/Ourpolicy.jsx'
import NewsLetter from '../components/NewsLetter.jsx'

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