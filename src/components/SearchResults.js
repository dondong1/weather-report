import React from "react";
import PropTypes from "prop-types";

function SearchResults(props) {
  const { results = [], handleCitySelection } = props;

  if (results.length === 0) {
    return null; // Don't render anything if there are no results
  }

  return (
    <div className="search-results">
      {results.map((city) => (
        <div
          className="search-option"
          key={city.id}
          onClick={() => handleCitySelection(city.id)}
        >
          {city.name}
        </div>
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  handleCitySelection: PropTypes.func.isRequired,
};

export default SearchResults;

