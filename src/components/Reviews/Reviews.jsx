import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews, onFetchError } from "services/api";
import { Loader } from "../Loader/Loader";
import { LiReviewStyle, UlReviewStyle } from "./Reviews.styled";

const endPoint = '/movie';

const Reviews = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        };

        fetchMovieReviews(endPoint, movieId)
            .then(data => {
                setReviews(data.results);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [movieId]);

    return <>
        <h3>Reviews:</h3>
        {loading && <Loader />}
        {reviews.length !== 0 ?
            <UlReviewStyle>
                {reviews.map(({ id, author, content }) =>
                    <LiReviewStyle key={id}>
                        <p><b>Author:</b> {author}</p>
                        <p>{content}</p>
                    </LiReviewStyle>)}
            </UlReviewStyle> :
            <p>Sorry! We don't have any reviews for this movie</p>}
    </>
};

export default Reviews;