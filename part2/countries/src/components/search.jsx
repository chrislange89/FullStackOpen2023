import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ search, handleSearch }) {
  return (
    <div>
      <label htmlFor="search-input">
        Search:
        <input
          name="search-input"
          value={search}
          onChange={handleSearch}
          type="text"
          id="search-input"
          aria-label="Search input"
        />
      </label>
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
