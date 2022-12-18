import "../../styles/components/navbar/stylesNavBar.css";
import logo from "../../assets/images/logo.svg";

export const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav_header">
        <div className="nav_container_logo">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};
