import React from 'react'
import "./shop.css"
import Navbar from '../components/Navbar'
import { PRODUCTS } from './Product'
import Product from '../components/Product'


function Shop() {
  return (
    <div>
      <Navbar/>
      <div className='shop'>
        <div className='shoptitle'>
            <h1>Welcome to Kenesty Online Shop</h1>
        </div>
        <div className='products'>{PRODUCTS.map((product) => {
          return(
            <Product
            id = {product.id}
            productName ={product.productName}
            price ={product.price}
            productImage={product.productImage}
            />
          )
        })} 
        </div>
      </div>
    </div>
  )
}

export default Shop
