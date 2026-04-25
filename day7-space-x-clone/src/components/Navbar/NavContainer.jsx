import Logo from "./Logo";
import Navlist from "./Navlist";
import Dropdown from "./Dropdown";

const NavContainer = () => {
  return (
    <div className="navbar">
      <Logo></Logo>
      <Navlist></Navlist>
      <Dropdown></Dropdown>
    </div>
  );
};
export default NavContainer;
