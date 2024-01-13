
import React from 'react';
import { Routes, Route } from 'react-router-dom';     //Navigate
import {Layout} from './Layout/Layout';
import Home from 'Pages/Home';
// import Movies from 'Pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from './components/Cast';
// import Reviews from './components/Reviews';



export const App = () => {
  return (
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/movies" element={<Movies />} /> */}
            {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
            {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
     </Layout>
         
  );
};
