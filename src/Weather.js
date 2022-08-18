import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';


export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
    }
    let apiKey = "7721f2269b88ab04c77bb88ab864eaa3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

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
            <h2>Hello from Weather</h2>
        </div>
    );
}