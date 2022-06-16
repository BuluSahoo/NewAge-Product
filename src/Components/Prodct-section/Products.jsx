import React from 'react'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'
import Product5 from './Product5'
import Product6 from './Product6'


const Products = () => {
  return (
    <>
    <div className="header">
        <h1>Shop Home Bars</h1>
        <h4>Choose from a variety of differnt style to suit your home</h4>
    </div>

    <div className='product-section'>
      <Product1/>
      <Product2/>
      <Product3/>
      <Product4/>
      <Product5/>
      <Product6/>
    </div>
    </>
  )
}

export default Products
