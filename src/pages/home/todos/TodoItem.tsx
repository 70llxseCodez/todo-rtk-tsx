import { Button } from '@mui/material'
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../hook/hook'
import { useRemoveTodoMutation, useUpdateComplateMutation, useUpdateMyApiMutation } from '../../../redux/api/myApi'
import { addCart } from '../../../redux/slices/cartSlice'
import { add, doDelete } from '../../../redux/slices/crossedSlice'
import './styleTodo.css'

interface IProps {
    id:string,
    title:string,
    completed: boolean
}


const TodoItem = ({id,completed,title}:IProps) => {
  const [updateMyApi,{isLoading}] = useUpdateMyApiMutation()
  const [newValue, newSetValue] = useState('')
  const [showInput,setShowInput] = useState(false)
  const notClickedRef = useRef<HTMLInputElement>(null)
  const [updateComplate] = useUpdateComplateMutation() 
  const dispatch = useAppDispatch()
  const [removeTodo] = useRemoveTodoMutation()

  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    newSetValue(e.target.value)
  }
  const show = () => {
    setShowInput(!showInput)
        if(newValue && showInput){
      updateMyApi({
        id,
        title:newValue,
        completed,
      })
    }
  }
  const withEnter = (e:KeyboardEvent<HTMLElement>) => {
    if(e.key === 'Enter'){
      show()
    }
  }
  const done = () => {
    const toAcrossed = {
      id,
      title,
      completed
    }
    if(!completed){
      dispatch(add(toAcrossed))
    }else if(completed){
      dispatch(doDelete(id))
    }
    const todoCom = {
      id,
      title,
      completed : completed = !completed
    }
    updateComplate(todoCom)
  }
  
  const remove = (id:string) => {
    removeTodo(id)
  }
  const addToCart = () => {
    const cart = {
      id,
      title,
    }
    dispatch(addCart(cart))
  }
  useEffect(() => {
    const handleClickedOut = (event:any) => {
     if(!event.path.includes(notClickedRef.current)){
      setShowInput(false)
     }
    }
    document.body.addEventListener('click',handleClickedOut)

    return () => {
     document.body.removeEventListener('click',handleClickedOut)
    }
 },[])



   return (
    <div>
        <div className='item' onKeyDown={withEnter} ref={notClickedRef}  style={{display:'flex'}}>
            {showInput ?
              <input type="text" onChange={handleChange} value={newValue}/>:
              (<h3 className={completed ? 'crossed' : ''} onClick={done}>{title}</h3>)
            }
            <Button color="secondary" onClick={show}>edit</Button>
            <Button variant="outlined" color="success" onClick={addToCart}>cart</Button>
            <Button variant="outlined" color="error" onClick={() => remove(id)}>delete</Button>
        </div>
    </div>
  )
}

export default TodoItem