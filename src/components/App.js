import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import DogBar from "./DogBar";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [goodDogsOnly, setGoodDogsOnly] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then(setDogs);
  }, []);

  function onUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogs(updatedDogs);
  }

  function handleToggleFilter() {
    setGoodDogsOnly((goodDogsOnly) => !goodDogsOnly);
  }

  const selectedDog = dogs.find((dog) => dog.id === selectedDogId);

  let displayDogs = dogs;
  if (goodDogsOnly) {
    displayDogs = displayDogs.filter((dog) => dog.isGoodDog);
  }

  return (
    <div className="App">
      <Filter goodDogsOnly={goodDogsOnly} onFilterClick={handleToggleFilter} />
      <DogBar dogs={displayDogs} onClickDog={setSelectedDogId} />
      <Detail dog={selectedDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
