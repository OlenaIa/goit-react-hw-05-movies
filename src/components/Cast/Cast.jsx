import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, onFetchError } from "services/api";

const endPoint = '/movie';

const Cast = () => {
    const { movieId } = useParams();
    console.log('movieId in CAST', movieId);
    const [loading, setLoading] = useState(true);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        }
    console.log('movieId in CAST in FETCH', movieId);

        fetchMovieCast(endPoint, movieId)
            .then(data => {
                console.log(data);
                setCast(data.cast);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [movieId]);

    return <>
            {loading && <Loader/>}

        CAST {movieId}
        {cast.length !== 0 && cast.map(actor => <li key={actor.id}>
            <p>{actor.name}</p>
            <img src={`http://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} width="200" />

        </li>)}
    </>
};

export default Cast;