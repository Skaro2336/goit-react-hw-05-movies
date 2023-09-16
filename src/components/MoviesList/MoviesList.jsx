import React, { useEffect, useState } from 'react';
import { ProductListContainer, ProductItem } from './MoviesListStyles';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'Api/Api';

const MoviesList = () => {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMoviesData = async () => {
      try {
        const response = await fetchTrendMovies();
        setTrendMovies(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrendMoviesData();
  }, []);

  if (!trendMovies || trendMovies.length === 0) {
    return <p>No trend movies found.</p>;
  }

  return (
    <ProductListContainer>
      {trendMovies.map(movie => (
        <ProductItem
          key={movie.id}
          state={{ from: location }}
          to={`/movies/${movie.id}`}
        >
          {movie.title}
        </ProductItem>
      ))}
    </ProductListContainer>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
