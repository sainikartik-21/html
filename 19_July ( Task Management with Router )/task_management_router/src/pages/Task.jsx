import axios from 'axios'
import { useEffect, useState } from 'react'
import "./css/Task.css"

function Task() {
    const [task, setTask] = useState([])

    async function getData(){
        let res = await axios.get("http://localhost:3000/posts")
        console.log(res.data)
        setTask(res.data)
    }

    useEffect(()=>{
        getData();
    }, [])

  return (
    <div className='hero'>
        <div className='describtion'>
            <h1>Welcome to <em>Task Manager</em></h1>
            <span>Manage your tasks efficiently with this simple system.</span>
        </div>
        <div className='task-container'>
            <span>Recent Task</span>
            <div className='task-box'>
                {task.map((task, i) => (
                    <div className='task' key={i}>
                        <h5 className="card-title">{task.title}</h5>
                        <p className="card-text">{task.description}</p>
                        <p><strong>Due Date:</strong> {task.dueDate}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Task