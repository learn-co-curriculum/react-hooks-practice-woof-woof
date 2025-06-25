import React, { useEffect, useState } from "react";

const DogBar = ({ handleClick }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((data) => setDogs(data));
  }, []);

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
