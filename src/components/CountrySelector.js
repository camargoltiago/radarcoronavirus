import React from 'react';
import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState('BRA');
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro. Tente novamente!</p>;
  if (!countries) return <p>Ocorreu um erro. Tente novamente!</p>;

  let oldStructure = {
    countries: {},
    iso3: {}
  };

  for (let country of countries.countries) {
    oldStructure.countries[country.name] = country.iso2;
    oldStructure.iso3[country.iso2] = country.iso3;
  }

  return (
    <div>
      <h2>País Atual: {selectedCountry}</h2>

      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(oldStructure.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === oldStructure.iso3[code]}
            key={code}
            value={oldStructure.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
