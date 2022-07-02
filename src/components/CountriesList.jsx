import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <div className="scroll">
        <div className="list-group" style={{maxHeight: "90vh", overflow: "scroll"}}>
        {props.countries.map(country => {
            const { name, alpha2Code, alpha3Code } = country
            return (
              <Link key={alpha3Code} className="list-group-item list-group-item-action" to={`/${alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt='flag' />
                <p>{name.common}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CountriesList;