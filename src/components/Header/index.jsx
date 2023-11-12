import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../style/build/header.css";

function Header() {
  return (
    <header>
      <div className="App-logo">
        <NavLink to="/kasa-app/" activeclassname="active" exact="true">
          {" "}
          <img src={logo} alt="logo kasa" />
        </NavLink>
      </div>

      <nav>
        <NavLink to="/kasa-app/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/apropos" activeclassname="active">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
