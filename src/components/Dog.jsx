function Dog({ doggo, onDogClick }) {
  return <span onClick={() => onDogClick(doggo)}>{doggo.name}</span>;
}

export default Dog;
