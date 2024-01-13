import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Services/API';
import { MoviesList } from 'components/MoviesGallery/MoviesGallery';


const Home = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    getTrendingMovies()
        .then(response => {
            const data = response.data;
       if (data && Array.isArray(data.results)) {
           setMovies(data.results);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }, []);
  return (
    <div>
      <Home />
          <MoviesList movies={movies} />
    </div>
  );
};
export default Home;