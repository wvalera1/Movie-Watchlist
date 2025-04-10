/* App component: Root component of the Movie Watchlist app. 
Fetches user's watchlist from the backend
Renders MovieSearch and Watchlist components
Updates watchlist state when movies are added/removed. 
*/

import React, { useState, useEffect } from 'react'
import { getWatchlist } from './api/api'
import MovieSearch from './components/MovieSearch/MovieSearch'
import Watchlist from './components/Watchlist/Watchlist'
import Footer from './components/Footer/Footer'
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
      <Footer />
    </div>
  )
}

export default App
