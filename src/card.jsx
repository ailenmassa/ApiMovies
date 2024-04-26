import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  return (
    <div className="card" style={{  backgroundColor:"black", width: '250px', margin: '10px', marginBottom: '20px' }}>
      <img src={movie.poster} alt={movie.title} style={{ width: '200px', marginBottom: '10px' }} />
      <h2>{movie.title}</h2>
      {showFullInfo && (
        <div>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.year}</p>
          <p>Duration: {movie.duration}</p>
          <p>Rate: {movie.rate}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      )}
      <button onClick={handleToggleInfo}>
        {showFullInfo ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};


function MovieList({ movies }) {
  return (
    <div className="d-flex flex-wrap">
      {movies.map(movie => (
        <MovieCard key={movie.id} title={movie.title} description={movie.description} image={movie.image} />
      ))}
    </div>
  );
}


export default MovieCard;


