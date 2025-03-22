const API_URL = "http://localhost:5000"; // Flask backend URL; change this if deploying

// Fetch movies from OMDB API via Flask
export const searchMovies = async (query) => {
    const response = await fetch(`${API_URL}/search?query=${query}`);
    return response.json();
};

// Get all movies in the watchlist
export const getWatchlist = async () => {
    const response = await fetch(`${API_URL}/watchlist`);
    return response.json();
};

// Add a movie to watchlist
export const addToWatchlist = async (movie) => {
    const response = await fetch(`${API_URL}/watchlist`, {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(movie),
    });

    return response.json();
};

// Remove a movie from watchlist
export const removeFromWatchlist = async (imdbID) => {
    const response = await fetch(`${API_URL}/watchlist`, {
        method: "DELETE",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({imdbID}),
    })

    return response.json(); 
};