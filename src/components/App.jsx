import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Reviews } from "./Reviews";

export const App = () => {
  return (
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      
  );
};
