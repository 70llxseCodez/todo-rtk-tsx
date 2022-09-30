import React from 'react'
import { useAppDispatch } from '../../hook/hook'
import { deleteCart } from '../../redux/slices/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import { Button } from '@mui/material'


interface IProps {
    id:string,
    title:string
}


const CartItem = ({id,title}:IProps) => {
    const dispatch = useAppDispatch()
    const removeOnCart = (id:string) => {
        dispatch(deleteCart(id))
    }
  return (
    <div style={{display:'flex'}}>
        <h3 style={{marginRight:'10px'}}>{title}</h3>
        <Button color="error" onClick={() => removeOnCart(id)}>delete</Button>
    </div>
  )
}

export default CartItem