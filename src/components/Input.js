import React, { useState } from "react";
import debounce from "lodash.debounce";
import SearchResults from "./SearchResults";

const Input = (props) => {
  const [cityId, setCity] = useState("");
  const [data, setData] = useState([]);

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
    if (value.trim().length >= 3) {
      selectLocation(value.trim());
    }
  };

  const selectLocation = debounce(async (cityId) => {
    const url = `https://api.weatherserver.com/weather/cities/${cityId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("This is the search result data: ", data);
    setData(data);
  }, 500);

  return (
    <div>
      <span className="input-box">
        <span className="label">LOCATION</span>
        <input
          type="text"
          value={cityId}
          name="cityId"
          onChange={(e) => handleCityChange(e)}
          placeholder=" "
        />
      </span>
      <SearchResults data={data} />
    </div>
  );
};

export default Input;