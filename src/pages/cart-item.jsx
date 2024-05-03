import React, { useContext } from 'react'
import "./cart.css"
import { ShopContext } from '../context/ShopContext';

const CartItem = (props) => {
const {id, productName, price, productImage} = props.data;
const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);


  return (
    <div className='cartitem'>
       <img src={productImage} className='pic'/>
       <div className='descrip'>
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)} className='btn'> - </button>
          <input value={cartItems [id]} />
          <button onClick={() => addToCart(id)} className='btn'> + </button>
        </div>
       </div>
    </div>
  )
}

export default CartItem
