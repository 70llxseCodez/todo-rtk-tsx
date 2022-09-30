import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useGetMyApiQuery } from '../../redux/api/myApi'
import TodoForm from './todos/TodoForm'
import TodoItem from './todos/TodoItem'
import './Home.css'

interface ITodo {
  id:string,
  title:string,
  completed: boolean
}

const HomePage = () => {
  const {data=[],isLoading} = useGetMyApiQuery()
  
  return (
    <div className="home">
    <div>
      <TodoForm/>
      {!isLoading?
        (data.map((item:ITodo) => {
          return <TodoItem key={item.id} {...item}/>
        })):
        <h1>Loading</h1>
      }
    </div>
    </div>
  )
}

export default HomePage