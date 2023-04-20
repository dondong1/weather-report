import React, { Component } from "react";
import Input from "./components/Input";
import SetUnits from "./components/SetUnits";
import WeatherReport from "./components/WeatherReport";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: "London",
      units: "C",
    };
  }

  componentDidMount = () => {
    this.getWeather(this.props.cityId, this.units);
    console.log("Did Mount: ", this.units)
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.cityId !== prevProps.cityId ||
      this.props.units !== prevProps.units
    ) {
      this.getWeather();
      console.log("Did Update: ", this.getWeather())
    }
  };

  handleUnitsChange = (units) => {
    this.setState({
      units,
    });
    console.log("Unit changed: ", units)
  };


  getWeather = async () => {
    const { cityId, units } = this.state;
    const data = await fetch(`https://api.weatherserver.com/weather/current/:${cityId}/:${units}`)
      // .then((res) => res.json())
      // .then((data) => console.log(data));
      const jsondata = await data.json();
      console.log(jsondata)
    // console.log("getWeather should return data: ", data)
    this.setState({data: data});
    console.log("getWeather should update data: ", data)
  }

  render() {
    const { cityId, units, data } = this.state;
    return (
      <div className="weather-app" isLoading="true">
        <h1>WeatherWatch</h1>
        <Input cityId={cityId}/>
        <SetUnits value={units} onSet={this.handleUnitsChange} />
        <WeatherReport data={data} units={units}/>
      </div>
    );
  }
}

export default App;
