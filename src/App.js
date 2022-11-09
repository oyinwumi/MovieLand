import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import './App.css';
import  SearchIcon from "./search.svg";

// a7dd13d0
// http://www.omdbapi.com/?i=tt3896198&apikey=a7dd13d0
const API_URL = 'http://www.omdbapi.com?apikey=a7dd13d0';
// const movie = {
//   "Title" : "Amazing Spiderman Syndrome",
//   "Year" : "2012",
//   "imdbId" : "tt25586634",
//   "Type" : "movie",
//   "Poster" : "N/A"
// }
const App = () => {
  const [movies , setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState("");

    const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL} &s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
   }

   useEffect(() =>{
searchMovies('movie')
   }, []);
  return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
           <input  value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
            />
            <img src={SearchIcon} alt="search"  onClick={() => searchMovies(searchTerm)}
            />
        </div>

         {
          movies?.length > 0 ?(
            <div className="container">
             {movies.map((movie) =>(
                <MovieCard  movie={movie} />
             ))}
       </div>
          ) : (
            <div className="empty">
               <h2>No movies found</h2>
            </div>
          )
         }


    </div>
  );
}

export default App;
