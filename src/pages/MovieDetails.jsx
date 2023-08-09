import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails, onFetchError } from "services/api";
const endPoint = '/movie';

const MovieDetails = () => {

    const { movieId } = useParams();
    console.log(movieId);
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (!movieId) {
            return;
        }
        console.log(movieId);

        fetchMovieDetails(endPoint, movieId)
            .then(data => {
                console.log(data);
                setMovie(data);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [movieId]);

    return <>
                {loading && <Loader/>}
        {movie && <>
            <h2>MovieDetails {movieId} - {movie.original_title}</h2>
<img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} width="200" />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
        </>}
        <ul>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
        </ul>
        <Outlet/>
    </>
};

export default MovieDetails;