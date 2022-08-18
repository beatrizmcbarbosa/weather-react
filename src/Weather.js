import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { Audio } from 'react-loader-spinner';


export default function Weather() {
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState({});

    function updateCity(event) {
        setCity(event.target.value);
    }

    function showWeather(response) {
        setWeather({
            temperature: response.data.min.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleResponse(event) {
        event.preventDefault();
        let apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
    }

    return (
        <div className="Weather">
            <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
            <h2>Weather App</h2>
            <form onSubmit={handleResponse}>
                <input type="search" placeholder="Enter a city" onChange={updateCity} />
                <input type="submit" value="Search" />
            </form>
            <div>
                <p>
                    <ul>
                        <li>Temperature: {weather.temperature}ºC</li>
                        <li>Description: {weather.description}</li>
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {weather.wind}kn/h</li>
                        <li>
                            <img src={weather.icon} alt={weather.description} />
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}