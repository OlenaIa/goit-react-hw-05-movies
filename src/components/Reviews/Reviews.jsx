import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews, onFetchError } from "services/api";
import { Loader } from "../Loader/Loader";

const endPoint = '/movie';


const Reviews = () => {
    const { movieId } = useParams();
    console.log('movieId in Reviews', movieId);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        }
        console.log('movieId in Reviews in FETCH', movieId);

        fetchMovieReviews(endPoint, movieId)
            .then(data => {
                console.log(data);
                setReviews(data.results);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [movieId]);

    return <>
        {loading && <Loader />}

        Reviews {movieId}
        {reviews.length !== 0 && reviews.map(review => <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
            <img src={`http://image.tmdb.org/t/p/w185${review.author_details.avatar_path}`} alt={review.author} width="100" />

        </li>)}
    </>
};

export default Reviews;