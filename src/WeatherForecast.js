import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function search() {
        const apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`; axios
            .get(apiUrl)
            .then(response => {
                setForecastData(response.data.daily);
                setLoaded(true);
            });
        //         .catch (error => {
        //         console.log("Error fetching data, ", error);
        //     });
    }

    if (loaded) {
        return (
            <div className="WeatherForecast" >
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecastData[0]} />
                    </div>
                </div>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}