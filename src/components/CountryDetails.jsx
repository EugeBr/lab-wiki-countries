import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function CountryDetails(props) {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null)


  useEffect(() => {
    const allCountries = props.countries
    const detailsCountry = allCountries.filter((filteredCountry) => filteredCountry.alpha3Code === alpha3Code)
    setCountry(detailsCountry[0])
  }, [alpha3Code])

  if(!country){
    return(
      <p>Loading...</p>
    )
  }
  return (
    <div className="col-7">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" style={{ width: '300px' }} />
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area}km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  country.borders.map(border => {
                    return (
                      <li><Link to={`/${border}`}>{border}</Link></li>
                    )
                  })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails;