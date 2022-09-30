import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useAppDispatch } from '../../hook/hook'
import { useUpdateComplateMutation } from '../../redux/api/myApi'
import { doDelete } from '../../redux/slices/crossedSlice'
import './Crossed.css'


interface IDone {
      id:string,
      title:string,
      completed:boolean
  }

const CrossedItem = ({id,title,completed}:IDone) => {
  const [updateComplate] = useUpdateComplateMutation() 
    const dispatch = useAppDispatch()

    const deleteDone = (id:string) => {
        dispatch(doDelete(id))
        const thisObj = {
            id,
            title,
            completed: false
        }
        updateComplate(thisObj)
    }
  return (
    <div style={{display:'flex'}}>
        <h3 style={{marginRight:'15px'}}>{title}</h3>
        <Button color="error" onClick={() => deleteDone(id)}>delete</Button>
    </div>
  )
}

export default CrossedItem