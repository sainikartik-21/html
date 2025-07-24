import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Task from "./pages/Task"
import ViewTask from "./pages/ViewTask"
import CreateAndPost from "./pages/CreateAndPost"
import UpdatePost from "./pages/UpdatePost"
import './App.css'
import CreateAndUpdate from "./pages/CreateAndUpdate"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Task />}/>
          <Route path="/Create_and_Update" element={<CreateAndUpdate />}>
            <Route path="new" element={<CreateAndPost />}/>
            <Route path="update/:id" element={<UpdatePost />}/>
          </Route>
          <Route path="/viewtask" element={<ViewTask />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
