import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { LiStyle, UlStyle, WrapCardStyle } from "./MoviesList.styled";

const MoviesList = ({ films }) => {
    const location = useLocation();
    console.log('location MoviesList', location);
    
    return <UlStyle>
        {films.map(({ id, title, overview, poster_path }) =>
            <Link to={`${id}`} state={{ from: location }}>
                <LiStyle key={id}>
                    <img src={`http://image.tmdb.org/t/p/w154${poster_path}`} alt={title} width="154" height="231"/>
                    <WrapCardStyle>
                        <h3>{title}</h3>
                        <p>{overview}</p>
                    </WrapCardStyle>
                </LiStyle>
            </Link>
        )}
    </UlStyle>
};

MoviesList.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.node.isRequired,
        ).isRequired,
    ).isRequired,
};

export default MoviesList;