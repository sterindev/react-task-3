import MovieCard from "./MovieCard"

function MovieList({movies}) {

    return (
        <div className="movie-list">
            {movies.map((movie) => (

                <MovieCard Key ={movie.imdbID} movie ={movie} />
            ))}
            </div>
        )
    
}

export default MovieList