import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            </p>
        </div>
    </div>
  )
}

export default About