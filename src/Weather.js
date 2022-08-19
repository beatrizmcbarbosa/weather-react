import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            precipitation: response.data.precipitation.value,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function search() {
        let apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100"></input>
                        </div>
                    </div>
                </form>
                <h1>{props.city}</h1>
                <ul>
                    <li>Date and hours</li>
                    <li>Description: {weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={weatherData.icon} alt={weatherData.description} />
                        <span className="temperature">{weatherData.temperature}</span>
                        <span className="unit">ºC</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: {weatherData.precipitation}mm</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}kn/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        search();
        return "Loading";
    }
}