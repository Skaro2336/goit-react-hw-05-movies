import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Input, Button } from './SearchFormStyles';

const SearchMovie = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        autoFocus
        type="text"
        placeholder="Enter movie name"
        name="query"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button type="submit">Search</Button>
    </FormContainer>
  );
};

SearchMovie.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchMovie;
