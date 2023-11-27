
import React, { useState } from 'react'
import axios from 'axios'
const AddTask = () => {
    const [hovered, setHovered] = useState(false)
    const [task, setTask] = useState()
    
    const handleAdd = () => {
      axios.post('http://localhost:8000/add', {task: task}).then(result => console.log(result))
      .catch(err => console.log(err))
    }

    const buttonStyles = {
        color: hovered ? 'red' : 'white',
        background: hovered ? 'green' : 'black',
        transition: 'color 0.3s'
    }
    
  return (
    <div className='create_form'>
        <input type='text' name='id' placeholder='Enter a new task here' onChange={(e) => setTask(e.target.value)}/>
        <button style={buttonStyles}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={handleAdd}
        >
            Enter
        </button>
    </div>
  )
}

export default AddTask