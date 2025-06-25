import React, { useState } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [selectedDog, setSelectedDog] = useState({});

  return (
    <div className="App">
      <Filter />
      <DogBar handleClick={setSelectedDog} />
      <DogInfo selectedDog={selectedDog} />
    </div>
  );
}

export default App;
