import React from 'react';


const CountryCard = ({ countries }) => {
  if (!countries || countries.length === 0) {
    return <div>No countries available</div>;
  }

  return (
    <div className="countryCardContainer">
      {countries.map(country => (
        <div key={country.cca3} className="countryCard">
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <p>{country.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
