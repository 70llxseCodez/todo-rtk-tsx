import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    id: string,
    title: string,
    completed: boolean
}

type TodoState = {
    crossed : Todo[]
}


const initialState:TodoState = {
    crossed: []
}

const crossedSlice = createSlice({
    name:'crossed',
    initialState,
    reducers:{
        add(state,action){
            const findItem = state.crossed.find(obj => obj.id === action.payload.id)
                if(findItem){
                    state.crossed.filter(obj => obj.id !== action.payload)
                }else{
                    state.crossed.push(action.payload)
                }
        },
        doDelete(state,action){
            state.crossed = state.crossed.filter(obj => obj.id !== action.payload)
        }
    }
})

export const {add,doDelete} = crossedSlice.actions
export default crossedSlice.reducer
