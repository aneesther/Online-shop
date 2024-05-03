import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'

function Product({id, productName, price, productImage}) {
  const {addToCart, cartItems} = useContext(ShopContext)


  const cartItemAmount = cartItems [id];
  return (
    <div className='product'>
      <img src={productImage} className='variety' alt='goods'/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addtocart' onClick={() => addToCart (id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  )

}
export default Product;