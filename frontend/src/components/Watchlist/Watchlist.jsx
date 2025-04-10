/* Watchlist component: Displays a list of movies that the user has saved to their watchlist.
Fetches data from the backend database (watchlist.db) and displays each movie using the MovieCard component.
*/

import React from 'react'
import { removeFromWatchlist } from '../../api/api'
import MovieCard from '../MovieCard/MovieCard'
import './Watchlist.css'

const Watchlist = ({ watchlist, refreshWatchlist }) => {
    const handleRemove = async (id) => {
        await removeFromWatchlist(id);
        refreshWatchlist(); // Update watchlist instantly
    }

    return (
        <div>
            <h2>MY WATCHLIST</h2>
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
