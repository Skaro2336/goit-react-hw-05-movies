import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Input, Button } from './SearchFormStyles';

const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    
    const query = e.target.elements.query.value;

    onSubmit(query);
    e.target.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter movie name" name="query" />
      <Button type="submit">Search</Button>
    </FormContainer>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovie;
