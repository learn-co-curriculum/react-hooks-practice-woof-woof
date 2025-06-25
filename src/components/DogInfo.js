import React from "react";

const DogInfo = ({ selectedDog }) => {
  const { id, name, isGoodDog, image } = selectedDog;

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      {id ? (
        <div id="dog-info">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <button>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
      ) : null}
    </div>
  );
};

export default DogInfo;
