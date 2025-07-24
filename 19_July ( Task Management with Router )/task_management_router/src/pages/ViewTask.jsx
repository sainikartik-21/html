import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

function ViewTask() {
    const [task, setTask] = useState([])
    let navigate = useNavigate();

    async function fetchData(){
        let res =  await axios.get("http://localhost:3000/posts")
        setTask(res.data)
    }

    async function handleDelete(id){
        let res = await axios.delete(`http://localhost:3000/posts/${id}`)
        fetchData();
    }

    function Edit(id){
        navigate(`/Create_and_Update/update/${id}`)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
        <div className="container my-4">
            <h1 className="mb-4">Task List</h1>
            <div className="row g-3">
            {task.map((task) => (
                <div key={task.id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{task.title}</h5>
                        <p className="card-text">{task.description}</p>
                        <p><strong>Due Date:</strong> {task.dueDate}</p>
                        <button className="btn btn-danger btn-sm" onClick={() => Edit(task.id)}>Edit</button>
                        <button className="btn btn-danger btn-sm mx-2" onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
          
    </>
  )
}


export default ViewTask