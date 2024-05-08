import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
