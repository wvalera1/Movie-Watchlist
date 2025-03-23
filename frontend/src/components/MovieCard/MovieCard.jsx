/* MovieCard component: Displays movie details including title, year it was released
and the poster. Used inside Watchlist and MovieSearch components */

import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie, onAdd, onRemove}) => {
  return (
    <div className='movie-card'>
        <h3>{movie.Title} ({movie.Year})</h3>
        <img src={movie.Poster} alt={movie.Title} className='movie-poster'/>
        {onAdd && <button onClick={() => onAdd(movie)}> + Add to Watchlist </button>}
        {onRemove && <button onClick={() => onRemove(movie.imdbID)}> Remove </button>}
    </div>
  )
}

export default MovieCard
