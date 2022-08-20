import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    // if coordinates change, set loaded to false - re-run
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function search() {
        const apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios
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
                    {forecastData.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}