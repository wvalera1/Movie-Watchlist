import React, { useState, useEffect } from 'react'
import { getWatchlist } from './api/api'
import MovieSearch from './components/MovieSearch'
import Watchlist from './components/Watchlist'
import './App.css'

function App() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    const movies = await getWatchlist();
    setWatchlist(movies);
  };

  return (
    <div>
      <h1>Movie Watchlist</h1>
      <MovieSearch refreshWatchlist={fetchWatchlist} />
      <Watchlist watchlist={watchlist} refreshWatchlist={fetchWatchlist} />
    </div>
  )
}

export default App
