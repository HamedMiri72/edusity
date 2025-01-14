import React from 'react'
import darkArrow from "../../../assets/dark-arrow.png"
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero container'>

        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>We ensure better education for a better world means that through providing quality education, we aim to create a positive impact on individuals and society, empowering people to build a brighter, more sustainable future for everyone.</p>
            <button className='btn'>Explore More <img src={darkArrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero