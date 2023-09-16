import React from 'react';
import PropTypes from 'prop-types';
import { Item, List, StyledLink } from './MoviesListStyles';

import { BsFilm } from 'react-icons/bs';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>
            <BsFilm /> {movie.title}
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  Movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
