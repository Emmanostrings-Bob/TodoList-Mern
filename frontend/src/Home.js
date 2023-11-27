import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, []);
  return (
    <div className='home'>
        <h1>Todo List</h1>
        <AddTask />
        {
            todos.length === 0 ? 
            <div><h2>No Task</h2></div>
            :
            todos.map(todo => (
                <div className='todo'>
                    <div className='checkbox'>
                        <BsCircleFill className='icon'/>
                        <p>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon'/></span>
                    </div>

                </div>
                

            ))
        }
    </div>
  )
}

export default Home