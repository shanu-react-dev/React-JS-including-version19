import ComponentData from "./components/ComponentData";
import FirstPage from "./components/FirstPage";
import NavContainer from "./components/Navbar/NavContainer";
import "./style.css";

function App() {
  return (
    <div>
      <div className="firstPage">
        <NavContainer></NavContainer>
        <FirstPage></FirstPage>
      </div>
      <ComponentData></ComponentData>
    </div>
  );
}
export default App;
