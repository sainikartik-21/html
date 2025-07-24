import React from 'react'
import { useNavigate } from 'react-router'
import './css/Home.css'

function Home() {
    let navigate = useNavigate()

    function handleMovies(){
        navigate('/movies/upcoming')
    }
    function handleSearch(){
        navigate('/movies/search')
    }

  return (
    <div className='hero'>
        <div className='container'>
            <h2>Welcome to Movie Mania</h2>
            <p>Welcome to Movie Mania, your ultimate destination to explore and discover upcoming movies! Stay ahead of the buzz with exclusive previews, release dates, and search for your most anticipated films — all in one place.</p>
            <div>
                <button onClick={handleMovies}>Upcoming Movies</button>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Home