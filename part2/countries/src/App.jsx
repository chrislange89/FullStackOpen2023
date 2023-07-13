import React, { useState, useEffect } from 'react';

import Country from './components/country';
import Search from './components/search';

import countryService from './services/countries';

import './App.styles.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const sortedCountries = countries.sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });

  function filteredCountries() {
    return sortedCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(search.toLowerCase());
    });
  }

  const getCountries = () => {
    countryService
      .getAll()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get countries on page load
  useEffect(getCountries, []);

  function countriesToDisplay() {
    if (countries.length > 0) {
      return (
        filteredCountries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
          />
        ))
      );
    }

    return (
      <p>No countries to display</p>
    );
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Search
        value={search}
        handleSearch={handleSearch}
      />
      <h1>Countries</h1>
      <div>
        {
          (countries.length > 0)
            ? countriesToDisplay()
            : <p>Loading...</p>
        }
      </div>
    </div>
  );
}

export default App;
