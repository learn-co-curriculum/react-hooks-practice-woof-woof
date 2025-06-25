import Dog from "./Dog";

function DogContainer({ doggos, onDogClick }) {
  return (
    <div id="dog-bar">
      {doggos.map((doggo) => (
        <Dog {...{ doggo, onDogClick }} key={doggo.id} />
      ))}
    </div>
  );
}

export default DogContainer;
