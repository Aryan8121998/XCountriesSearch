import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryCard from './CountryCard';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <CountryCard countries={filteredCountries} />
    </div>
  );
};

export default App;
