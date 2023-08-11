import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { fetchMovies, onFetchError } from "services/api";
import { SectionStyle } from "./Pages.styled";

const endPoint = "/trending/movie/day";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        if (films.length > 0) {
            return;
        };
        fetchMovies(endPoint)
            .then(data => {
                setFilms(data.results);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [films]);

    return <SectionStyle>
        <h2>Movies in trend</h2>
        {loading && <Loader />}
        <MoviesList films={films} />
    </SectionStyle>
};

export default Home;