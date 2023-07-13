import React from 'react';
import PropTypes from 'prop-types';

export default function Countries({ countries }) {
  const haveCountries = countries.length > 0;

  if (!haveCountries) {
    return (
      <p>No countries to display</p>
    );
  }

  return (
    <div>
      hello
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
};
