import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addask } from '../Utlis/tudoSlice.js'
import TodoList from './TodoList.jsx'

const Tudo = () => {
    const[input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleClick = () => {
        if(!input.trim()){
            return
        }
        dispatch(addask(input.trim()))
        setInput("")
    }
  return (
    <div>
      <div className='m-20 w-1/2'>
        <input 
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
        className='h-10 w-40 border outline-none font-bold px-5' type="text" />
        <button 
        onClick={handleClick}
        className='bg-blue-700 font-bold text-white px-10 py-2 rounded-xl ml-5'>Add Task</button>
      </div>
      <TodoList />
    </div>
  )
}

export default Tudo
