import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Country({ country }) {
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
    <p className="country">
      <h2>{country.name.common}</h2>
      <button onClick={handleClick} type="button">hide</button>
      <div>
        <p>
          {`Capital: ${country.capital}`}
        </p>
        <p>
          {`Area: ${country.area} km^2`}
        </p>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="flag" width="200" />
        <h3>Weather</h3>
      </div>
    </p>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
};
