# Flask app for managing a simple movie watchlist.
# Provides routes for handling retrieval of saved all saved movies,
# removal of movies, and addition of movies.

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import requests
import os

app = Flask(__name__)
CORS(app)  # Allow React frontend to connect

# Configure SQLite database
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(BASE_DIR, "watchlist.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Make Movie model
class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    imdbID = db.Column(db.String(20), unique=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.String(10), nullable=False)
    poster = db.Column(db.String(200), nullable=False)

# Initialize database
with app.app_context():
    db.create_all()

API_KEY = "" # Get this from https://www.omdbapi.com/

# Movie Search Route
# Handles GET requests to search for movies in the OMDB API
@app.route("/search", methods=["GET"])
def search_movies():
    query = request.args.get("query")
    if not query:
        return jsonify({"error": "Missing query parameter"}), 400
    
    response = requests.get(f"http://www.omdbapi.com/?s={query}&apikey={API_KEY}")
    data = response.json()

    if data.get("Response") == "True":
        return jsonify({"Search": data["Search"]})
    else:
        return jsonify({"Search": []})  # Return an empty list if no results

# Watchlist Route
# Handles GET requests to fetch the user's current watchlist
@app.route("/watchlist", methods=["GET"])
def get_watchlist():
    watchlist = Movie.query.all()
    return jsonify([
        {"imdbID": movie.imdbID, "Title": movie.title, "Year": movie.year, "Poster": movie.poster}
        for movie in watchlist
    ])

# Add Movie Route
# Handles POST requests to add new movies to the user's current watchlist
@app.route("/watchlist", methods=["POST"])
def add_to_watchlist():
    data = request.json
    if not data or "imdbID" not in data:
        return jsonify({"error": "Invalid movie data"}), 400

    # Check if movie already exists in the database
    existing_movie = Movie.query.filter_by(imdbID=data["imdbID"]).first()
    if existing_movie:
        return jsonify({"message": "Movie already in watchlist"}), 200

    new_movie = Movie(
        imdbID=data["imdbID"],
        title=data["Title"],
        year=data["Year"],
        poster=data["Poster"]
    )

    db.session.add(new_movie)
    db.session.commit()

    return jsonify({"message": "Movie added to watchlist"}), 201

# Remove Movie Route
# Handles DELETE requets to remove movies from the user's current watchlist
@app.route("/watchlist", methods=["DELETE"])
def remove_from_watchlist():
    movie_id = request.json.get("imdbID")
    movie = Movie.query.filter_by(imdbID=movie_id).first()

    if not movie:
        return jsonify({"error": "Movie not found"}), 404
    
    db.session.delete(movie)
    db.session.commit()

    return jsonify({"message": "Movie removed from watchlist"}), 200 


# Main Entry Point
# Starts the Flask server on localhost (`127.0.0.1`) and port `5000`
# Debug mode enabled
if __name__ == "__main__":
    app.run(debug=True)
