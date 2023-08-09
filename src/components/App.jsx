import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews";

export const App = () => {
  return (
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
        </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      
  );
};
