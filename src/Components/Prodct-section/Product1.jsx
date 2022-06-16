import { useEffect, useState } from "react"
import React from 'react'
import prd from '../Assets/product.webp'
import '../Prodct-section/product.css'

const Product1 = () => {
    const [products, setProducts] = useState([])

    const url = "https://shopnewage.com/collections/home-bar/products/home-bar-display-cabinet-21-61005.json"
    // const url = "https://shopnewage.com/collections/garage-cabinetry/products/bold-series-36-in-wall-cabinet-50015.json"


    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data.product)
        // console.log(data.product)
    }

    useEffect(() => {
        getData()
    },[])


    return (
        <>
            <div className='product_container'>
                {/* <img src={products.image.src} alt={products.title} />  */}

                {/* above code is giving error when l use 'products.image.src' so below I use hardcore image which 
                I get through the same 'products.image.src' link */}

                <img src={prd} alt={products.title} />

                <div className="rest">
                    <span>$628.39</span>
                    <h3>{products.title}</h3>
                    <button className="pro-btn">BUY NOW</button>
                </div>

            </div>
        </>
    )
}

export default Product1
