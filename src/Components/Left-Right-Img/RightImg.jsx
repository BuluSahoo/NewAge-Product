import React from 'react'
import IMG from '../Assets/left_right.jpg'
import './left_right.css'

const RightImg = () => {
    return (
        <div className='right_img'>
            <div className="img_text">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore autem molestias ipsam est perferendis qui nisi explicabo? Neque ratione cum aperiam magnam eaque explicabo quidem?</p>
            </div>
            <img src={IMG} alt="nature" />
        </div>
    )
}

export default RightImg
