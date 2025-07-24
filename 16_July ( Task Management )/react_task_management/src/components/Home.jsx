import { useState, useEffect } from 'react'
import axios from "axios"

function Home() {
    const [task, setTask] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editTaskId, setEditTaskId] = useState(null)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "",
        status: ""
    });

    async function fetchData(){
        let res =  await axios.get("http://localhost:3000/posts")
        // console.log(res.data)
        setTask(res.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isEditing){
            await axios.put(`http://localhost:3000/posts/${editTaskId}`,formData)
            console.log("Task Updated", formData)
            setEditTaskId(null)
            setIsEditing(false)
        }else{
            await axios.post("http://localhost:3000/posts", formData);
            console.log("Data Submitted", formData)
        }
        
        setFormData({
        title: "",
        description: "",
        priority: "",
        status: "",
        });
        fetchData();
    };

    const handleEdit = (task) => {
        setIsEditing(true)
        setEditTaskId(task.id)
        setFormData({
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status
        })
    }

    async function handleDelete(id){
        let res = await axios.delete(`http://localhost:3000/posts/${id}`)
        fetchData();
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
        <div className="container my-4">
            <h1 className="mb-4">Task List</h1>
            <div className="row g-3">
            {task.map((task, i) => (
                <div key={task.id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <p><strong>Priority:</strong> {task.priority}</p>
                    <p><strong>Status:</strong> {task.status}</p>
                    <button className="btn btn-danger btn-sm" onClick={() => handleEdit(task)}>Edit</button>
                    <button className="btn btn-danger btn-sm mx-2" onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        
        <h1 className='mb-4'>Create Task / Update Task :</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={styles.field}>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={styles.field}>
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div style={styles.field}>
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                {
                    isEditing? "Confirm" : "Submit"
                }
            </button>
        </form>    
    </>
  )
}

const styles = {
  form: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "0.3rem",
  },
  input: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  textarea: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    resize: "vertical",
  },
  select: {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    alignSelf: "flex-start"
  }
};


export default Home