import { useEffect, useState } from 'react';
import { getMovies } from './api/getMovies';
import MovieCard from './card';
import './App.css';


function App() {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    getMovies()
    .then((res) => res.json())
    .then((data) => setMovies(data));
  }, []);

  return (
    <> 
     <div style={{backgroundColor:"green" }} >
    <div style={{paddingTop:"50px"}}>
      <h1>Movie List</h1>
      </div>
      <div style={{display: "flex", flexWrap: "wrap", gap: "10px", marginLeft:"100px",}}>
    
      {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
    
    </div>
  </div>

    
    </>
  )
}
export default App

