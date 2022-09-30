import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, FormHTMLAttributes, useState } from 'react'
import { useAddMyApiMutation } from '../../../redux/api/myApi'


interface INTodo{
    id:string,
    title:string,
    completed:boolean
}

const TodoForm = () => {
    const [valueOftitile,setValueOfTitle] = useState('')
    const [addMyApi,{isError}] = useAddMyApiMutation()

    const onHandleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValueOfTitle(e.target.value)
    }
    const onHandleAdd = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const objForTodo:INTodo = {
            id:Date.now().toString(),
            title: valueOftitile,
            completed: false
        }
       
        if(valueOftitile){
          await addMyApi(objForTodo).unwrap()
          setValueOfTitle('')
        }else{
            alert('something enter input')
        }
    }



  return (
    
    <div>
        <form onSubmit={onHandleAdd}>
            <TextField size='medium'  id="standard-basic" label="Enter your todolist" variant="standard"  className='input' type="text" onChange={onHandleChange}/>
            <Button className='button' size='large'  type='submit'>add</Button>
        </form>
    </div>
  )
}

export default TodoForm