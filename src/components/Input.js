import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import SearchResults from "./SearchResults";

const Input = (props) => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  useEffect(() => {
    searchLocation(keyword);
  }, [keyword]);

  const searchLocation = debounce(async (keyword) => {
    try {
      setSearchResultsVisible(false);
      const response = await fetch(
        `https://api.weatherserver.com/weather/cities/${keyword}`
      );
      const data = await response.json();
      if (response.ok) {
        setSearchResultsVisible(true);
        setResults(data.results);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }, 500);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
    setSearchResultsVisible(false);
  };

  const handleCitySelection = (id) => {
    props.onCitySelection(id);
    setSearchResultsVisible(false);
  };

  return (
    <div>
      <span className="input-box">
        <span className="label">LOCATION</span>
        <input
          type="text"
          value={keyword}
          name="keyword"
          placeholder="Enter city name"
          onChange={handleInputChange}
        />
      </span>

      {searchResultsVisible && (
        <SearchResults
          results={results}
          handleCitySelection={handleCitySelection}
        />
      )}
    </div>
  );
};

Input.propTypes = {
  onCitySelection: PropTypes.func.isRequired,
};

export default Input;
