import React from 'react'
import IMG from '../Assets/left_right.jpg'
import './left_right.css'

const LeftImg = () => {
  return (
    <div className='left_img'>
      <img src={IMG} alt="nature" />
      <div className="img_text">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore autem molestias ipsam est perferendis qui nisi explicabo? Neque ratione cum aperiam magnam eaque explicabo quidem?</p>
      </div>
      
    </div>
  )
}

export default LeftImg
