import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState({});

    function showWeather(response) {
        setWeather({
            temperature: response.data.min.temp,
            description: response.data.weather[0].description,
            precipitation: response.data.precipitation.value,
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


    return (
        <div className="Weather">
            <form onSubmit={handleSearch}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" onChange={updateCity} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"></input>
                    </div>
                </div>
            </form>
            <h1>{city}</h1>
            <ul>
                <li>Date and hours</li>
                <li>Description: {weather.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={weather.icon} alt={weather.description} />
                    <span className="temperature">{weather.temperature}</span>
                    <span className="unit">ºC</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: {weather.precipitation}mm</li>
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {weather.wind}kn/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}