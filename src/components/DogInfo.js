import React, { useState, useEffect } from "react";

const DogInfo = ({ selectedDog }) => {
  const { id, name, isGoodDog, image } = selectedDog;
  const [goodOrBad, setGoodOrBad] = useState("");

  useEffect(() => {
    setGoodOrBad(isGoodDog);
  }, [selectedDog]);

  const toggleGoodOrBad = () => {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ isGoodDog: !isGoodDog }),
    })
      .then((r) => r.json())
      .then(() => setGoodOrBad(!goodOrBad));
  };

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      {id ? (
        <div id="dog-info">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <button onClick={toggleGoodOrBad}>
            {goodOrBad ? "Good Dog!" : "Bad Dog!"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DogInfo;
