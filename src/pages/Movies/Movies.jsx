import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Api/Api';
import SearchMovie from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList';

import LoadingSpinner from 'components/Loader/Loader';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async query => {
      setLoading(true);

      try {
        const results = await searchMoviesByName(query);

        setMovies(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
        setLoading(false);
      }
    };

    fetchMovies(query);
  }, [query]);

  const handleSearchChange = async query => {
    setSearchParams({ query });
  };

  return (
    <>
      <h2>Search movies</h2>
      <SearchMovie onSearch={handleSearchChange} />
      {loading ? <LoadingSpinner /> : <MoviesList movies={movies} />}
    </>
  );
};

export default MovieList;
