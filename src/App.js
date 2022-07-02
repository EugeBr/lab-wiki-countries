import React, { useState } from 'react';
import './App.css';
import countryData from "./countries.json";
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList";
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountry] = useState([...countryData])
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="allCountries">
          <CountriesList countries={countries}/>
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
