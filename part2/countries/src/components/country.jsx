import React from 'react';
import PropTypes from 'prop-types';

function Country({ country }) {
  return (
    <p>{country.name.common}</p>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
