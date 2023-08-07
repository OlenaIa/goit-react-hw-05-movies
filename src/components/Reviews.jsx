import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const Reviews = () => {
    const { movieId } = useParams();

    useEffect(() => {
// fetch
    }, [])

    return <>
        Reviews {movieId}
    </>
}