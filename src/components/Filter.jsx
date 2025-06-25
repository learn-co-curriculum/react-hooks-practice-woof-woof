function Filter({ onGoodDogFilterClick, isFilteringGoodDogs }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={onGoodDogFilterClick}>
        Filter good dogs: {isFilteringGoodDogs ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Filter;
