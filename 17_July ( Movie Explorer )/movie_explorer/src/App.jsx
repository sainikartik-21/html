import {BrowserRouter, Routes, Route} from "react-router"
import UpcomingMovies from './pages/UpcomingMovies'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}/>
          <Route path="/movies/upcoming" element={<UpcomingMovies />}/>
          <Route path="/movies/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
