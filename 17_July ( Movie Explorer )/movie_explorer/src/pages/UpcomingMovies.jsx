import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import "./css/UpcomingMovies.css"

function UpcomingMovies() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData(pageNumber) {
        setLoading(true)          
        setError(null)            
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${pageNumber}`
            )
            setMovies(res.data.results)
            setTotalPages(res.data.total_pages)  
        } catch (err) {
            console.error("Failed to fetch movies:", err)
            setError("Failed to load data. Please try again.")
        } finally {
            setLoading(false)    
        }
    }

    useEffect(() => {
        fetchData(page)
        window.scrollTo({ top: 0, behavior: 'smooth' }) 
    }, [page])

    return (
        <div>
            <h1 className="text-center my-3">Upcoming Movies</h1>

            {loading && 
            <div className='loading'>
                <span className="loader"></span>
            </div>
            }
            {error && <p className="text-center text-danger">{error}</p>}

            <div className="row g-4 mx-4">
                {!loading && !error && movies.map((movie) => (
                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>



            <div className="d-flex justify-content-center align-items-center my-4 gap-2">
                <button
                    className="btn btn-secondary"
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    disabled={page === 1 || loading}
                >
                    Previous
                </button>

                <span>Page {page} of {totalPages}</span>

                <button
                    className="btn btn-primary"
                    onClick={() => setPage(prev => prev + 1)}
                    disabled={page === totalPages || loading}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default UpcomingMovies
