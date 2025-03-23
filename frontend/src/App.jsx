import React, { useState, useEffect } from 'react'
import { getWatchlist } from './api/api'
import MovieSearch from './components/MovieSearch/MovieSearch'
import Watchlist from './components/Watchlist/Watchlist'
import theaterIcon from './assets/theater.svg'
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
      <img src={theaterIcon} alt="" draggable='false' className='theater-icon' />
      <h1>MOVIE WATCHLIST</h1>
      <MovieSearch refreshWatchlist={fetchWatchlist} />
      <Watchlist watchlist={watchlist} refreshWatchlist={fetchWatchlist} />
    </div>
  )
}

export default App
