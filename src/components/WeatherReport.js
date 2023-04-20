// WeatherReport Component
import React from "react";

const WeatherReport = ({ data}) => {
  if (!data) {
    return <div>No data available</div>;
  }
  const {
    location,
    icon,
    conditions,
    temp,
    temp_max,
    temp_min,
    feels_like,
    wind_speed,
    wind_direction,
    pressure,
    humidity,
  } = data;

  return (
    <div className="weather-report">
      <h2 className="big">{data.location}</h2>
      <h2 className="conditions">{data.feels_like}</h2>  
      <img
        src={`https://api.weatherserver.com/icons/${data.icon}.png`}
        alt={data.conditions}
      />
      
      <div className="temperature">
        <div>
          <p>CURRENT TEMPERATURE </p>
          <h2>
            {data.temp}&deg;{data.units}
          </h2>
        </div>
        <div>
          <p> MAXIMUM TEMPERATURE</p>
          <h2>
            {data.temp_max}&deg;{data.units}
          </h2>
        </div>
        <div>
          <p>MINIMUM TEMPERATURE</p>
          <h2>
            {data.temp_min}&deg;{data.units}
          </h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>WIND SPEED </p>
          <h2>{data.wind_speed}</h2>
        </div>
        <div>
          <p>WIND DIRECTION</p>
          <h2>{data.wind_direction}</h2>
        </div>
      </div>
      <div className="pressure">
        <div>
          <p>PRESSURE</p> <h2> {data.pressure}</h2>
        </div>
        <div>
          <p>HUMIDITY</p> <h2>{data.humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;

