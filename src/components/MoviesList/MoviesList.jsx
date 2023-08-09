import { Link } from "react-router-dom";

const MoviesList = ({ films }) => {
    return <ul>
        {films.map(({ id, title, overview, poster_path }) =>
            <Link key={id} to={`${id}`}>{id}
                <li>
                    <img src={`http://image.tmdb.org/t/p/w342${poster_path}`} alt={title} width="200" />
                    <h3>{title}</h3>
                    <p>{overview}</p>
                </li></Link>
        )}
    </ul>
};

export default MoviesList;