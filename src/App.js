import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./components/Input";
import SetUnits from "./components/SetUnits";
import WeatherReport from "./components/WeatherReport";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: "1277333",
      units: "C",
      weatherData: null,
      citiesData: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount = () => {
    this.getWeather(this.state.cityId, this.state.units);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.cityId !== prevState.cityId ||
      this.state.units !== prevState.units
    ) {
      this.getWeather(this.state.cityId, this.state.units);
    }
  };

  handleUnitsChange = (units) => {
    this.setState({
      units,
    });
  };

  handleCitySelection = (cityId) => {
    this.setState({
      cityId,
    });
  };

  getWeather = async (cityId, units) => {
    try {
      const response = await fetch(
        `https://api.weatherserver.com/weather/current/${cityId}/${units}`
      );
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      const weatherData = await response.json();
      this.setState({ weatherData, isLoading: false, error: null });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  render() {
    const { units, weatherData, isLoading, error } = this.state;
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <Input onCitySelection={this.handleCitySelection} />
        <SetUnits value={units} onSet={this.handleUnitsChange} />
        {isLoading && <div className="is-loading">Loading weather data...</div>}
        {error && <div className="error-panel">{error}</div>}
        {weatherData && (
          <WeatherReport weatherData={weatherData} units={units} />
        )}
      </div>
    );
  }
}
App.propTypes = {
  cityId: PropTypes.string,
  units: PropTypes.string,
  weatherData: PropTypes.shape({
    location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    wind_direction: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  }),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default App;
