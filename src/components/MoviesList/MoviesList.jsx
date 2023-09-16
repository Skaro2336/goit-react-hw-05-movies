import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductListContainer,
  TrendingHeading,
  Item,
  List,
  StyledLink,
} from './MoviesListStyles';

import { BsFilm } from 'react-icons/bs';

const MoviesList = ({ trendMovies }) => {
  return (
    <ProductListContainer>
      <TrendingHeading>Trending Movies</TrendingHeading>
      <List>
        {trendMovies.map(trendMovie => (
          <Item key={trendMovie.id}>
            <StyledLink to={`/movies/${trendMovie.id}`}>
              <BsFilm /> {trendMovie.title}
            </StyledLink>
          </Item>
        ))}
      </List>
    </ProductListContainer>
  );
};

MoviesList.propTypes = {
  trendMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
