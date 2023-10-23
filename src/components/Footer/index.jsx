import logoF from "../../assets/logo-footer.png";
import "../../style/build/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoF} alt="logo-kasa-white"></img>
      <p> © 2020 Kasa. All rights reserved </p>
    </footer>
  );
}
export default Footer;
