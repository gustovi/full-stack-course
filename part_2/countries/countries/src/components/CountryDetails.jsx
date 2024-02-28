import Weather from "./Weather.jsx";

const CountryDetails = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.name.common}/>
            <Weather capital={country.capital} lat={country.latlng[0]} lon={country.latlng[1]}/>
        </div>
    )
}

export default CountryDetails