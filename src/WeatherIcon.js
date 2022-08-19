import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTYLY_CLOUDY_DAY",
        "02n": "PARTYLY_CLOUDY_NIGHT",
        "03d": "PARTYLY_CLOUDY_DAY",
        "03n": "PARTYLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    }
    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="black"
            size={props.size}
            animate={true}
        />);
}