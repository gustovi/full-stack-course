import {useEffect, useState} from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const Weather = ({capital, lat, lon}) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const weatherSource = `https://api.openweathermap.org/data/2.5/onecall?lang=en&lat=${lat}&lon=${lon}&appid=${apiKey}`
            const response = await axios.get(weatherSource);
            setWeather(response.data);
        };
        fetchData();
    }, [lat, lon]);

    return weather &&
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature {Math.round(weather.current.temp - 273.15)} Celcius</p>
            <p>Wind {Math.round(weather.current.wind_speed)} m/s</p>
            <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} alt={weather.current.weather[0].description} title={weather.current.weather[0].description}/>
        </div>

}

export default Weather