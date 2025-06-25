import React, { useEffect, useState } from "react";

const DogBar = ({ handleClick, isFiltered }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const query = isFiltered ? "?isGoodDog=true" : "/";

    fetch("http://localhost:3001/pups" + query)
      .then((r) => r.json())
      .then((data) => setDogs(data));
  }, [isFiltered]);

  return (
    <div id="dog-bar">
      {dogs.map((dog) => (
        <span key={dog.id} onClick={() => handleClick(dog)}>
          {dog.name}
        </span>
      ))}
    </div>
  );
};

export default DogBar;
