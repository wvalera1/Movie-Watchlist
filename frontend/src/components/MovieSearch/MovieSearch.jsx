import React, { useState } from 'react'
import { searchMovies, addToWatchlist } from '../../api/api'
import MovieCard from '../MovieCard/MovieCard'
import './MovieSearch.css'

const MovieSearch = ({ refreshWatchlist }) => {
    const [ query, setQuery ] = useState("");
    const [ movies, setMovies ] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;
        const data = await searchMovies(query);
        setMovies(data.Search || []);
    };

    const handleAddToWatchlist = async (movie) => {
        await addToWatchlist(movie);
        refreshWatchlist(); // Update watchlist instantly 
    };

    return (
        <div>
            <h2>SEARCH MOVIES</h2>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    placeholder='Search for a movie...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className='movies-container'>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onAdd={handleAddToWatchlist}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieSearch
