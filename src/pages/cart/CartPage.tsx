import React from 'react'
import { useAppSelector } from '../../hook/hook'
import CartItem from './CartItem'
import './Cart.css'

interface IToCart {
    id:string,
    title:string
}


const CartPage = () => {
  const {cart} = useAppSelector(state => state.cart)
  return (
    <div className='cart'>
      <div>
        {!cart.length ?
          (<h2>no cart</h2>)
         :
         cart.map((item:IToCart) => {
          return <CartItem {...item} key={item.id}/>
        })
        }
      </div>
    </div>
  )
}

export default CartPage