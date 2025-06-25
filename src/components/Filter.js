import React from "react";

const Filter = ({ isFiltered, setIsFiltered }) => {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={() => setIsFiltered(!isFiltered)}>
        Filter good dogs: {isFiltered ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Filter;
