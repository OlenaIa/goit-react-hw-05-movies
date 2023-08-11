import { Loader } from "components/Loader/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails, onFetchError } from "services/api";
import { AddListStyle, CardStyle, SectionStyle, StyledLink, WrapStyle } from "./Pages.styled";

const endPoint = '/movie';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    console.log('location MovieDetails', location);
    const backLinkRef = useRef(location.state?.from ?? '/movies');
    console.log('backLinkRef', backLinkRef);

    useEffect(() => {
        if (!movieId) {
            return;
        };

        fetchMovieDetails(endPoint, movieId)
            .then(data => {
                console.log(data);
                setMovie(data);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [movieId]);

    return <SectionStyle>
        <StyledLink to={backLinkRef.current}>{'<<<< BACK'}</StyledLink>
        <h2>Movie Details:</h2>
        {loading && <Loader />}
        {movie && <>
            <WrapStyle>
                <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} width="200" />
                <CardStyle>
                    <h3>{movie.original_title}</h3>
                    <p><b>Release date:</b> {movie.release_date}</p>
                    <p><b>Genres:</b> {movie.genres.map(genre => `${genre.name.toLowerCase()} | `)}</p>
                    <p><b>Ranking:</b> {movie.vote_average}</p>
                    <p><b>Overview:</b> {movie.overview}</p>
                </CardStyle>
            </WrapStyle>
            <h3>Additional information:</h3>
            <AddListStyle>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </AddListStyle>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
        }
    </SectionStyle>
};

export default MovieDetails;