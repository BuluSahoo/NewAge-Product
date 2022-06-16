import { useState, useEffect } from "react"
import React from 'react'
import prd from '../Assets/product4.webp'
import '../Prodct-section/product.css'

const Product4 = () => {
    const [products, setProducts] = useState([])

    const url = "https://shopnewage.com/collections/garage-cabinetry/products/bold-series-9-piece-cabinet-set-50406.json"

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
        <div key={products.id} className='product_container'>

            <img src={prd} alt={products.title} />

            <div className="rest">
                <span>$820.76</span>
                <h3>{products.title}</h3>
                <button className="pro-btn">BUY NOW</button>
            </div> 

        </div>
        </>
    )
}

export default Product4
