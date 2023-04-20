import React from "react";

const WeatherReport = ({ weatherData, units }) => {
  if (!weatherData) {
    return <div>No weatherData available</div>;
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
  } = weatherData;

  return (
    <div className="weather-report">
      <h2 className="big">{location}</h2>
      <h2 className="conditions">
        {conditions} | FEELS LIKE {feels_like}&deg;{units}
      </h2>
      <img src={icon} alt="" />

      <div className="temperature">
        <div>
          <p>CURRENT TEMPERATURE </p>
          <h2>
            {temp}&deg;{units}
          </h2>
        </div>
        <div>
          <p> MAXIMUM TEMPERATURE</p>
          <h2>
            {temp_max}&deg;{units}
          </h2>
        </div>
        <div>
          <p>MINIMUM TEMPERATURE</p>
          <h2>
            {temp_min}&deg;{units}
          </h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>WIND SPEED </p>
          <h2>{wind_speed}</h2>
        </div>
        <div>
          <p>WIND DIRECTION</p>
          <h2>{wind_direction}</h2>
        </div>
      </div>
      <div className="pressure">
        <div>
          <p>PRESSURE</p> <h2> {pressure}</h2>
        </div>
        <div>
          <p>HUMIDITY</p> <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
