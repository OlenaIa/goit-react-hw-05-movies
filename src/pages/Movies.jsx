import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import Searchbar from "components/Search/Search";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { fetchSearchMovies, onFetchError, paramsForNotify } from "services/api";
const endPoint = '/search/movie';

const Movies = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        console.log('search', search);
        if (search === '') {
            return;
        };
        if (films.length > 0) {
            return;
        }

        setLoading(true);
        fetchSearchMovies(endPoint, search)
            .then(data => {
                console.log(data.results);
                setFilms(data.results);
            })
            .catch(onFetchError)
            .finally(() => setLoading(false));
    }, [films, search]);

    const onSubmitSearchBar = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');;
    
    if (searchValue === '') {
      Notify.info('Enter your request, please!', paramsForNotify);
      return;
    };

    if (searchValue === search) {
      Notify.info('Enter new request, please!', paramsForNotify);
      return;
    };

        setSearch(searchValue);
        setFilms([]);
  };

    return <div>
        <Searchbar onSubmitSearchBar={onSubmitSearchBar} />
        {loading && <Loader/>}
        <MoviesList films={films}/>
</div>
};

export default Movies;