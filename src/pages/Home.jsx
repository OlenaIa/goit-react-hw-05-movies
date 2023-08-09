import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { fetchMovies, onFetchError } from "services/api";

const endPoint = "/trending/movie/day";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        if (films.length > 0) {
            return;
        }
        fetchMovies(endPoint)
            .then(data => {
                console.log(data.results);
                setFilms(data.results);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [films]);

    return <>
        <h2>Movies in trend</h2>
        {loading && <Loader/>}
        <MoviesList films={films}/>

</>
};

export default Home;