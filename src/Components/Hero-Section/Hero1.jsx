import React from 'react'
import img1 from "../Assets/Hero1.jpg"
import '../Hero-Section/hero1.css'

const Hero1 = () => {
  return (
    <>
    <div className="hero_page">
      <img src={img1} alt="hero-page" id='hero-img' />
      <div className="text">
        <h2>Lorem ipsum dolor sit, amet consectetur.</h2>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut autem id possimus! Minus quasi amet sapiente sequi laborum quas? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic!</h5>
      </div>
      
    </div>
    </>
  )
}

export default Hero1
