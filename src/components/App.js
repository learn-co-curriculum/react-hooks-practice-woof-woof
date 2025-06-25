import Filter from "./Filter";
import DogContainer from "./DogContainer";
import DogProfile from "./DogProfile";
import { useEffect, useState } from "react";
function App() {
  const blankDoggo = {
    id: "",
    name: "",
    isGoodDog: "",
    image: "",
  };
  const [doggos, setDoggos] = useState([]);
  const [doggoToShow, setDoggoToShow] = useState(blankDoggo);
  const onDogClick = (doggo) => {
    setDoggoToShow(doggo);
  };
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then(setDoggos);
  }, []);
  return (
    <div className="App">
      <Filter />
      <DogContainer {...{ doggos, onDogClick }} />
      <DogProfile {...{ doggoToShow }} />
    </div>
  );
}

export default App;
