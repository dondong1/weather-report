import React from "react";

const SearchResult = ({ data }) => {
  return (
      <div className="search-result">
        {Array.isArray(data) && data.map((item) => (
          <button className="search-option" key={item.id} onClick={() => item.id}>
            {item.name}
          </button>
        ))}
      </div>
  );
};

export default SearchResult;