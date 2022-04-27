import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg from '../components/HeroImg/HeroImg'
import Navbar from '../components/Navbar/Navbar'
import PricingCards from '../components/Pricing/Pricing'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImg heading='PRICING.' text='Choose your trip.'/>
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing