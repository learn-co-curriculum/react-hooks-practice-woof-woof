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
  const toggleGoodDogStatus = (doggo) => {
    fetch(`http://localhost:3001/pups/${doggo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isGoodDog: !doggo.isGoodDog }),
    })
      .then((r) => r.json())
      .then((updatedDoggo) => {
        setDoggos((currentDoggos) =>
          currentDoggos.map((eachDoggo) =>
            eachDoggo.id === updatedDoggo.id ? updatedDoggo : eachDoggo,
          ),
        );

        if (doggoToShow.id === updatedDoggo.id) {
          setDoggoToShow(updatedDoggo);
        }
      });
  };
  return (
    <div className="App">
      <Filter />
      <DogContainer {...{ doggos, onDogClick }} />
      <DogProfile {...{ doggoToShow, toggleGoodDogStatus }} />
    </div>
  );
}

export default App;
