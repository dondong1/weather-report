import React, { useState } from "react";
import debounce from "lodash.debounce";

// const SearchResults = ({ keyword, onLocationSelect }) => {
//   const [error, setError] = useState(null);

//   const selectLocation = debounce(async (city) => {
//     const url = `https://api.weatherserver.com/weather/cities/${city}`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (response.ok) {
//         setError(null);
//         onLocationSelect(data);
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   }, 500);

const SearchResults = ({ keyword, onLocationSelect }) => {
  return (
    <div className="search-results">
      {keyword &&
        keyword.map(({ city, name }) => (
          <div
            key={city}
            className="search-option"
            // onClick={() => selectLocation(city)}
          >
            {name}
          </div>
        ))}
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};

export default SearchResults;