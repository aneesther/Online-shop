import React, { useContext } from 'react'
import "./cart.css"
import Navbar from '../components/Navbar'
import { PRODUCTS } from './Product'
import { ShopContext } from '../context/ShopContext'
import CartItem from './cart-item'

function Cart() {
  const {cartItems} = useContext(ShopContext)
  return (
    <div>
       <Navbar/>
       <div className='cart'>
        <div className='cartlist'>
          <h1 >Your Cart Items</h1>
        </div> 
        <div className='cart'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id]  !== 0) {
              return <CartItem  data ={product} />;
            }})
          };
        </div>



       </div>
    </div>
  )
}

export default Cart
