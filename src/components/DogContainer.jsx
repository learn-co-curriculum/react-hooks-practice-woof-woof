import Dog from "./Dog";

function DogContainer({ doggos, toggleProfileVisibility }) {
  return (
    <div id="dog-bar">
      {doggos.map((doggo) => (
        <Dog {...{ doggo, toggleProfileVisibility }} key={doggo.id} />
      ))}
    </div>
  );
}

export default DogContainer;
