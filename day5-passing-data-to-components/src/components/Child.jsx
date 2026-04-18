function Child({
  name = "Dummy Data",
  age,
  isMarried,
  kids,
  assets,
  data,
  fruits,
}) {
  console.log(data);
  console.log(fruits);
  //   console.log(props);
  //   let { name, age, isMarried, kids, assets } = props;
  return (
    <div>
      <h1>Hii this is Child Component</h1>
      <h1>My name is : {name}</h1>
      <h1>My age is: {age}</h1>
      <h1>Marital Status: {isMarried === true ? "Married" : "Unmarried"}</h1>
      <h1>Kids: {kids === null ? "No kids" : kids}</h1>
      <h1>Assets: {assets === undefined ? "No Idea" : assets}</h1>
      <hr />
      <h1>Abhishek Sharma Details</h1>
      <h3>
        <mark>{data.userName}</mark>
      </h3>
      <h2>Age: {data.age}</h2>
      <h2>Team: {data.team}</h2>
      <h2>Format: {data.format}</h2>

      <hr />
      <h1>Fruits</h1>

      <ol>
        {fruits.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ol>
    </div>
  );
}
export default Child;
