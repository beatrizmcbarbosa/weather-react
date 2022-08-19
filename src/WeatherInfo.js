import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (<div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li><FormattedDate date={props.data.date} /></li>
            <li>Description: {props.data.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix">
                    <div className="float-left">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} />
                    </div>
                    <div className="float-left">
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="unit">ºC</span>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind}kn/h</li>
                </ul>
            </div>
        </div>
    </div>)

}