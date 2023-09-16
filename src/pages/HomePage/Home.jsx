import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'Api/Api';
import MoviesList from 'components/MoviesList';
import LoadingSpinner from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchTrendMovies();
        setTrendMovies(movies);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>Error loading data</p>
      ) : (
        <MoviesList trendMovies={trendMovies} />
      )}
    </>
  );
};

export default Home;
