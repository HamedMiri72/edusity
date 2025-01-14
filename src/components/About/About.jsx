import React from 'react'
import "./About.css"
import about from "../../assets/about.png"
import play from "../../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about} alt="" className='about-img'/>
            <img src={play} alt="" className='play-icon'/>

        </div>

        <div className="about-rigth">

            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Our university is dedicated to shaping the future by providing world-class education that empowers students to become innovative thinkers, capable leaders, and responsible global citizens.</p>
            <p>With a diverse and inclusive environment, we foster creativity, critical thinking, and collaboration, ensuring that our graduates are prepared to face the challenges of tomorrow's world with confidence and expertise.</p>
            <p>Through cutting-edge programs, hands-on experiences, and a commitment to lifelong learning, we strive to inspire our students to make a meaningful impact in their communities and beyond, contributing to a better, more sustainable future for all.</p>

        </div>

    </div>
  )
}

export default About