import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../style/build/header.css";

function Header() {
  return (
    <header>
      <div className="App-logo">
        <img src={logo} alt="logo kasa"></img>
      </div>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos"> A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
