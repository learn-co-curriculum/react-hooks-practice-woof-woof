import React, { useState } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [selectedDog, setSelectedDog] = useState({});
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="App">
      <Filter isFiltered={isFiltered} setIsFiltered={setIsFiltered} />
      <DogBar handleClick={setSelectedDog} isFiltered={isFiltered} />
      <DogInfo selectedDog={selectedDog} />
    </div>
  );
}

export default App;
