import React from 'react'
import { removeFromWatchlist } from '../api/api'
import MovieCard from './MovieCard'
import './Watchlist.css'

const Watchlist = ({ watchlist, refreshWatchlist }) => {
    const handleRemove = async (id) => {
        await removeFromWatchlist(id);
        refreshWatchlist(); // Update watchlist instantly
    }

    return (
        <div>
            <h2>My Watchlist</h2>
            <div className='movies-container'> 
                {watchlist.length > 0 ? (
                    watchlist.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            onRemove={() => handleRemove(movie.imdbID)}
                        />
                    ))
                ) : ( 
                    <p>No movies in your watchlist yet.</p>
                )}
            </div>
        </div>
    )
}

export default Watchlist
