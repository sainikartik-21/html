import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';

function CreateAndPost() {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/posts", formData);
        console.log("Data Submitted", formData)
        setFormData({
        title: "",
        description: "",
        dueDate: ""
        });
        navigate("/")
    };

  return (
    <>
    <h1 className='mb-4'>Create Task:</h1>
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
                <label htmlFor="dueDate">Due Date:</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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

export default CreateAndPost