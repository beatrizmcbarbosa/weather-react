import React, { useState } from "react";
import './Weather.css';
import axios from "axios";


export default function Weather() {
    let [city, setCity] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState({});

    function showWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.min.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleSearch(event) {
        event.preventDefault();
        let apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSearch}>
            <input type="search" placeholder="Enter a city" onChange={updateCity} />
            <button type="Submit">Search</button>
        </form>
    );

    if (loaded) {
        return (
            <div>
                {form}
                <ul>
                    <li>Temperature: {weather.temperature}ºC</li>
                    <li>Description: {weather.description}</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind}kn/h</li>
                    <li>
                        <img src={weather.icon} alt={weather.description} />
                    </li>
                </ul>
            </div>
        );
    } else {
        return form;
    }
}