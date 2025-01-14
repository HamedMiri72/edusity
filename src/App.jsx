import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle = "Our PROGRAM" title = "What We Offer"/>
        <Programs/>
      </div>
      
    </div>
  )
}

export default App