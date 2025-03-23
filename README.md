# Movie-Watchlist

Overview: A simple movie watchlist web application built with **Vite + React** for the frontend and **Flask** for the backend. This web application utilizes the **OMDb API** to allow users to search for movies and manage a personal watchlist.

## Features
- Search for movies using the OMDb API
- Add and remove movies from a personal watchlist
- User data is retained using an SQLite database
- Real-time updates between the frontend and backend

## Tech Stack
- Frontend: Vite + React, CSS
- Backend: Flask, Flask-CORS, Flask-SQLAlchemy
- Database: SQLite
- API: [OMDb API](https://www.omdbapi.com/)

## Project Structure

``` sh
Movie-Watchlist/
│── backend/                            # Backend (Flask) 
│   ├── app.py                          # Main Flask application  
│   ├── watchlist.db                    # SQLite database (auto-generated)  
│   ├── requirements.txt                # Python dependencies   
│── frontend/                           # Frontend (Vite + React)  
│   ├── src/  
│   │   ├── components/                 # React components
│   │   │   ├── Footer/                 # Footer components
│   │   │   │   ├── Footer.jsx          # Footer component logic
│   │   │   │   ├── Footer.css          # Footer style sheet
│   │   │   ├── MovieCard/              # Movie card components
│   │   │   │   ├── MovieCard.jsx       # Movie card component logic
│   │   │   │   ├── MovieCard.css       # Movie card style sheet
│   │   │   ├── MovieSearch/            # Movie search components
│   │   │   │   ├── MovieSearch.jsx     # Movie search component logic
│   │   │   │   ├── MovieSearch.css     # Movie earch style sheet
│   │   │   ├── Watchlist/              # Movie watchlist components
│   │   │   │   ├── Watchlist.jsx       # Movie watchlist compnent logic
│   │   │   │   ├── Watchlist.css       # Movie watchlist style sheet
│   │   ├── api/                        # API functions 
│   │   │   ├── api.js                  # Handles API requests between frontend and backend
│   │   ├── App.jsx                     # Main React component  
│   │   ├── App.css                     # Main style sheet
│   │   ├── index.css                   # General style sheet
│   │   ├── main.jsx                    # Entry point for React app
│   │   ├── assets/                     # Static assets (images, logos, etc)
│   │   │   ├── clapboard.svg           # Website SVG logo
│   │   │   ├── theater.svg             
│   ├── public/  
│   ├── package.json                    # Frontend dependencies  
│── README.md  
│── .gitignore  

```

## Installation and Setup

1. Clone the repository

**Command-Line Interface (CLI):**
``` sh
git clone https://github.com/wvalera1/Movie-Watchlist
cd Movie-Watchlist
```

**Github Desktop:**
- File >> Clone repository >> URL >> https://github.com/wvalera1/Movie-Watchlist >> Clone

2. Set up the backend (Flask)
``` sh
cd backend
python -m venv .venv                 # Create a virtual environment
source venv/bin/activate             # Mac/Linux activate
.venv\Scripts\activate               # Windows activate

pip install -r requirements.txt     # Install dependencies

python app.py                       # Run the Flask server
```

3. Set up the frontend (React)
``` sh
cd frontend
npm install                         # Install dependencies
npm run dev                         # Run the React server
```

The React app should now be running on `http://localhost:5173`, and Flask API on `http://127.0.0.1:5000`.

## API Key
Store your OMDb API key in a **.env** file in the backend directory:
``` sh
API_KEY = your_api_key_here
```

## Usage
- Search for movies by entering a title in the search bar.
- Click **"Add to Watchlist"** to save a movie to your watchlist.
- View your saved movies in the **Watchlist** section.
- Click **"Remove"** to delete a movie from your watchlist.