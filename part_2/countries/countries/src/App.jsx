import {useEffect, useState} from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails.jsx";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountries, setSearchCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);


    const allCountriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

    useEffect(() => {
        const fetchData = async () => setCountries(await fetchCountries())
        fetchData()
    }, []);

    const fetchCountries = async () => {
        const response = await axios.get(allCountriesUrl)
        return response.data
    }

    const handleCountryChange = (event) => {
        const searchInput = event.target.value
        setSelectedCountry(null)
        setSearchCountries(countries.filter(country => searchInput !== '' && country.name.common.toLowerCase().includes(searchInput.toLowerCase())))
    }

    const showCountryDetails = (country) => {
        setSelectedCountry(country)
    }


    const displayResults = () => {

        if (selectedCountry || searchCountries.length === 1) {
            const country = selectedCountry || searchCountries[0];
            return <CountryDetails country={country}/>
        } else if (searchCountries.length <= 10) {
            return <ul>
                {searchCountries.map(country =>
                    <li key={country.cca3}>
                        {country.name.common}
                        <button onClick={() => showCountryDetails(country)}>show</button>
                    </li>
                )}
            </ul>
        } else {
            return <div>Too many matches, specify another filter</div>
        }
    }

    return (
        <div>
            find countries:
            <input
                onChange={handleCountryChange}
                placeholder="search  countries"
                type="text"
                name="search"
                disabled={countries.length === 0}
            />
            {displayResults()}
        </div>
    )
}

export default App