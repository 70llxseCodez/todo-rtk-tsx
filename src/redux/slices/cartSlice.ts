import { combineReducers, createSlice } from "@reduxjs/toolkit"; 


type IToCart = {
    id:string,
    title:string
}
type ICart = {
    cart: IToCart[]
}

const initialState:ICart = {
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state,action){
            const findedCart = state.cart.find(obj => obj.id === action.payload.id)
            if(findedCart){
                state.cart = state.cart.filter(obj => obj.id !== action.payload)
            }else{
                state.cart.push(action.payload)
            }
        },
        deleteCart(state,action){
            state.cart = state.cart.filter(obj => obj.id !== action.payload)
        }
    }

})

export const {deleteCart,addCart} = cartSlice.actions;
export default cartSlice.reducer

