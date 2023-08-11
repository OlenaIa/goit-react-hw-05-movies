import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import Searchbar from "components/Search/Search";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies, onFetchError, paramsForNotify } from "services/api";
import { SectionStyle } from "./Pages.styled";
const endPoint = '/search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? "";
  console.log('START searchQuery', searchQuery);
  
  useEffect(() => {
    if (searchQuery === '') {
      return;
    };
    if (films.length > 0) {
      return;
    }

    setLoading(true);
    fetchSearchMovies(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
    
  }, [films, searchQuery]);
  
  // useEffect(() => {
  //   console.log("Mounting phase: same when componentDidMount runs");
  //   setSearchParams({});
  //   setFilms([]);
  //   return () => {
  //     console.log("Unmounting phase: same when componentWillUnmount runs");
  //   }
  // }, []);

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
      setSearchParams({});
      setFilms([]);
      return;
    };

    if (searchValue === searchQuery) {
      Notify.info('Enter new request, please!', paramsForNotify);
      return;
    };

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return <div>
    <Searchbar onSubmitSearchBar={onSubmitSearchBar} />
    <SectionStyle>
      {loading && <Loader />}
      <MoviesList films={films} />
    </SectionStyle>
  </div>
};

export default Movies;