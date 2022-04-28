import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg from '../components/HeroImg/HeroImg'
import Navbar from '../components/Navbar/Navbar'
import TrainingSection from '../components/Training/Training'

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading='TRAINING.' text='Pre-Flight & In-Flight Training.'/>
      <TrainingSection />
      <Footer />
    </div>
  )
}

export default Training