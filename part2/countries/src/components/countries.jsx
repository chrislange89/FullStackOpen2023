import React from 'react';
import PropTypes from 'prop-types';

import Country from './country';

export default function Countries({ countries }) {
  const haveCountries = countries.length > 0;

  if (!haveCountries) {
    return (
      <p>No countries to display</p>
    );
  }

  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.cca3}
          country={country}
        />
      ))}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
};
