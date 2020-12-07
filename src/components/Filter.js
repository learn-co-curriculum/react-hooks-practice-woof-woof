import React from "react";

function Filter({ onFilterClick, goodDogsOnly }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={onFilterClick}>
        Filter good dogs: {goodDogsOnly ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Filter;
