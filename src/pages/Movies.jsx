import { useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {

    useEffect(() => {
// fetch
    }, [])

    return <div>
        Movies
        {[1, 2, 3, 4, 5, 6].map(movie => <Link key={movie} to={`${movie}`}>{movie}</Link>)}
</div>
};

export default Movies;