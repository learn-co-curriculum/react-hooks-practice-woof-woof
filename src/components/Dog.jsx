function Dog({ doggo, toggleProfileVisibility }) {
  return <span onClick={toggleProfileVisibility}>{doggo.name}</span>;
}

export default Dog;
