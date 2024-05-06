import React, { useContext } from 'react'
import "./cart.css"
import Navbar from '../components/Navbar'
import { PRODUCTS } from './Product'
import { ShopContext } from '../context/ShopContext'
import CartItem from './cart-item'
import { useNavigate } from 'react-router-dom'




function Cart() {
  const {cartItems, getTotalcartAmount, checkout} = useContext(ShopContext)
  const totalAmount = getTotalcartAmount ()

  const navigate =useNavigate()
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
          }
        </div>

        {totalAmount > 0 ? (

        <div className='checkout'>
          <p className='sub-set'>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate ("/")}>Continue Shopping</button>

          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }} 
          > 
            {" "}
            checkout {" "}
          </button>
        </div>
        ):  (<h1> Your Cart Is Empty</h1>
      )}
       </div>
    </div>
  )
}

export default Cart
