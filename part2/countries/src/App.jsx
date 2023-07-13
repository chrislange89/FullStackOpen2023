import { useState, useEffect } from 'react';

import Country from './components/country';
import Search from './components/search';

import countryService from './services/countries';

import './App.styles.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const sortedCountries = countries.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else if (a.name.common > b.name.common) {
      return 1;
    } else {
      return 0;
    }
  })

  const filteredCountries = sortedCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  })
  
  const getCountries = () => {
    countryService
    .getAll()
    .then((data) => {
      setCountries(data);
    })
  }

  // get countries on page load
  useEffect(getCountries, []);

  function countriesToDisplay() {
    if (countries.length > 0) {
      return (
        filteredCountries.map((country) => {
          return (
            <Country key={country.cca3} country={country} />
          )
        })
      )
    } else {
      return (
        <p>No countries to display</p>
      )
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search 
        value={search} 
        handleSearch={handleSearch} 
      />
      <h1>Countries</h1>
      <div>
        {
          countries.length > 0 ? 
          countriesToDisplay() : 
          <p>Loading...</p>
        }
      </div>
    </div>
  )
}

export default App;
