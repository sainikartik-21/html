import "../App.css"


function MovieCard({movie}) {
  return (
    <>
        <div className="card shadow-lg rounded-4 border-0 overflow-hidden" style={{ maxWidth: '400px' }}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} style={{ height: '300px', objectFit: 'cover' }} />
            
            <div className="card-body bg-light">
                <h5 className="card-title fw-bold">{movie.title}</h5>
                <p className="mb-1 text-muted"><strong>{movie.release_date}</strong></p>
                <p className="mb-1 text-muted"><strong>{movie.original_language}</strong></p>
                <p className="mb-2 text-muted"><strong>⭐ {movie.vote_average}</strong></p>
                
                <p className="card-text text-truncate-3">{movie.overview?.slice(0, 110)}...</p>
                
                <a href="#" className="btn btn-primary btn-sm mt-2">Read More</a>
            </div>
        </div>
    </>
  )
}

export default MovieCard