import Filter from "./Filter";
import DogContainer from "./DogContainer";
import DogProfile from "./DogProfile";
import { useEffect, useState } from "react";
function App() {
  const [doggos, setDoggos] = useState([]);
  const [isProfileHidden, setIsProfileHidden] = useState(true);
  const toggleProfileVisibility = () => {
    setIsProfileHidden(!isProfileHidden);
  };
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then(setDoggos);
  }, []);
  return (
    <div className="App">
      <Filter />
      <DogContainer {...{ doggos, toggleProfileVisibility }} />
      <DogProfile {...{ toggleProfileVisibility }} />
    </div>
  );
}

export default App;
