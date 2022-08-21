import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.city);

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        let apiKey = "031629f21faf86d633672c1b6ebeaf5a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios
            .get(apiUrl)
            .then(response => {
                const { coord, main, dt, weather, wind, name } = response.data;

                setWeatherData({
                    ready: true,
                    coordinates: coord,
                    temperature: main.temp,
                    date: new Date(dt * 1000),
                    description: weather[0].description,
                    humidity: main.humidity,
                    wind: wind.speed,
                    icon: weather[0].icon,
                    city: name
                });
            })
            .catch(error => {
                console.log("Error fetching data, ", error);
            });
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div >
        );
    } else {
        search();
        return "Loading...";
    }
}