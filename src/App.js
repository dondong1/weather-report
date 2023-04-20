import React, { Component } from "react";
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
      isLoading: true,
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
    const { cityId, units, weatherData, isLoading, error } = this.state;
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <Input cityId={cityId} />
        <SetUnits value={units} onSet={this.handleUnitsChange} />
        {isLoading && <div>Loading weather data...</div>}
        {error && <div>{error}</div>}
        {weatherData && (
          <WeatherReport weatherData={weatherData} units={units} />
        )}
      </div>
    );
  }
}

export default App;
