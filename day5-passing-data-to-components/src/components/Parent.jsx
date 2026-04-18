import Child from "./Child";

function Parent() {
  let userData = {
    userName: "Abhishek",
    age: 24,
    team: "Sun Risers Hyderabad",
    format: "IPL t20",
  };

  let arrOfFruits = ["Orange", "Guava", "PineApple", "Coconut", "Banana"];
  return (
    <div>
      <h1>I am Parent component</h1>
      <Child
        name="Shanu"
        age={100}
        isMarried={true}
        kids={null}
        assets={undefined}
        data={userData}
        fruits={arrOfFruits}
      ></Child>
      {/* <Child age={100}></Child> */}
    </div>
  );
}
export default Parent;
