import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Api/Api';
import SearchForm from 'components/SearchForm';
import ProductList from 'components/MoviesList';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams] = useSearchParams();

  const movieName = searchParams.get('query') || '';

  const updateQueryString = newQuery => {
    searchParams.set('query', newQuery);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setIsLoading(true);
        const movies = await searchMoviesByName(movieName);
        setSearchResult(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    search();
  }, [movieName, searchParams]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchForm initialValue={movieName} onSearch={updateQueryString} />
      {isLoading ? (
        <p>Loading...</p>
      ) : searchResult.length === 0 && movieName ? (
        <h2> Nothing found</h2>
      ) : (
        <ProductList products={searchResult} />
      )}
    </div>
  );
};

export default Movies;
