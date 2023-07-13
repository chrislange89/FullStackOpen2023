import React, { useState, useEffect } from 'react';

import Countries from './components/countries';
import Search from './components/search';
import countryService from './services/countries';

import './App.styles.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const sortedCountries = countries.sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });

  const filteredCountries = sortedCountries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(search.toLowerCase());
  });

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

  return (
    <>
      <Search
        value={search}
        handleSearch={handleSearch}
      />
      <h1>Countries</h1>
      <Countries countries={filteredCountries} />
    </>
  );
}

export default App;
