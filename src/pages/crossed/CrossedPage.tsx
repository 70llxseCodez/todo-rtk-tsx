import React, { FC } from 'react'
import { useAppSelector } from '../../hook/hook'
import CrossedItem from './CrossedItem'
import './Crossed.css'



interface IDone {
    id:string,
    title:string,
    completed:boolean
}

const CrossedPage:FC = () => {
  const {crossed} = useAppSelector(state => state.crossed)

  return (
    <div className='done'>
    <div>
      {crossed.length ? 
        (crossed.map((item:IDone,index) => {
          return <CrossedItem key={index} {...item}/>
        })):
        (<h2>you haven't done todo</h2>)
      }
    </div>
    </div>
  )
}

export default CrossedPage