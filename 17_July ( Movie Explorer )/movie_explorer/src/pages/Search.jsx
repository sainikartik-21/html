import { useState } from 'react';
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { FaSearch } from 'react-icons/fa';
import "./css/Search.css";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    async function fetchData(search) {
        if (!search) return;
        try {
            let res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: '4e44d9029b1270a757cddc766a1bcb63',
                    language: 'en-US',
                    query: search,
                    page: 1
                }
            });
            setMovies(res.data.results);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(searchTerm.trim());
        setSearchTerm("");
    };

    return (
        <>
            <form className="search-container" onSubmit={handleSubmit}>
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Type Something"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    Search
                </button>
            </form>

            <div className="row g-4 mx-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;
