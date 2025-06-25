function DogProfile({ doggoToShow }) {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={doggoToShow.image} alt={doggoToShow.name} />
        <h2>{doggoToShow.name}</h2>
        {doggoToShow.id !== "" && (
          <button>{doggoToShow.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        )}
      </div>
    </div>
  );
}

export default DogProfile;
