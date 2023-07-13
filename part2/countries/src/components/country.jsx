import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Country({ country }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  if (!expanded) {
    return (
      <p>
        <h2>{country.name.common}</h2>
        <button onClick={handleClick} type="button">show</button>
      </p>
    );
  }

  return (
    <p>
      <h2>{country.name.common}</h2>
      <button onClick={handleClick} type="button">hide</button>
      <div>
        <p>
          <strong>Flag: </strong>
          <span>{country.flag}</span>
        </p>
        <p>
          <strong>Capital City: </strong>
          {country.capital[0]}
        </p>
        <p>
          population
          {country.population}
        </p>
      </div>
    </p>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
