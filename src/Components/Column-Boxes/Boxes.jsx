import React from 'react'
import box1 from '../Assets/box1.jpg'
import box2 from '../Assets/box2.jpg'
import './boxes.css'


const Boxes = () => {
    return (
        <div className='box_container'>
            <div className="box1">
                <img src={box1} alt="box1" />
                <div className="box_text">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, animi fugiat! Neque, nihil! Minima obcaecati at nam, porro dolorum deleniti impedit voluptatibus possimus ea saepe sint quasi quidem dolores adipisci quaerat iste est, labore delectus id maiores. Doloribus, corrupti eaque?</p>
                </div>
            </div>
            <div className="box1">
                <img src={box2} alt="box1" />
                <div className="box_text">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, animi fugiat! Neque, nihil! Minima obcaecati at nam, porro dolorum deleniti impedit voluptatibus possimus ea saepe sint quasi quidem dolores adipisci quaerat iste est, labore delectus id maiores. Doloribus, corrupti eaque?</p>
                </div>
            </div>
        </div>
    )
}

export default Boxes
