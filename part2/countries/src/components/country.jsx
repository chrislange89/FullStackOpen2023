import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getWeather from '../services/weather';

export default function Country({ country }) {
  const [expanded, setExpanded] = useState(false);
  const [weather, setWeather] = useState(null);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    async function getCityWeather() {
      const latitude = country.latlng[0];
      const longitude = country.latlng[1];
      try {
        const weatherData = await getWeather(latitude, longitude);
        setWeather(weatherData);
      } catch (error) {
        console.log(error);
      }
    }
    if (expanded) {
      getCityWeather();
    }
  }, [expanded]);

  if (!expanded) {
    return (
      <p>
        <h2>{country.name.common}</h2>
        <button onClick={handleClick} type="button">show</button>
      </p>
    );
  }

  const weatherData = () => {
    if (weather !== null) {
      return (
        <p>
          <b>Temperature:</b>
          {` ${weather.main.temp} Celcius`}
        </p>
      );
    }

    return (
      <p>
        Loading...
      </p>
    );
  };

  return (
    <div className="country">
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
        {weatherData()}
      </div>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
};
