import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = "Our PROGRAM" title = "What We Offer"/>
        <Programs/>
        <About/>
        <Title subTitle = "Gallery" title = "Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Studens Say"/>
        <Testimonial/>
      </div>
    
      
    </div>
  )
}

export default App