import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios
        .get(apiUrl)
        .then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                    <WeatherIcon code="01d"
                        alt="clear"
                        size={35} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">
                            19º
                        </span>
                        <span className="WeatherForecast-temperature-min">
                            10º
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}