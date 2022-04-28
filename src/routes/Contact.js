import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg from '../components/HeroImg/HeroImg'
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading='CONTACT.' text='Contact GLX Travel'/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact