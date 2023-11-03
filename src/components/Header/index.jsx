import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../style/build/header.css";

function Header() {
  return (
    <header>
      <div className="App-logo">
        <NavLink exact to="/" activeClassName="active">
          <img src={logo} alt="logo kasa" />
        </NavLink>
      </div>

      <nav>
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/apropos" activeClassName="active">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
