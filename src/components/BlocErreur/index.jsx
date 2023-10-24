import { Link } from "react-router-dom";
import "../../style/build/blocerreur.css";

function BlocError() {
  return (
    <div className="container_error">
      <p className="code_error"> 404 </p>
      <p className="txt_error"> Oups 🙈 Cette page n'existe pas </p>
      <Link to="/" className="lien_error">
        {" "}
        Retourner sur la page d'accueil{" "}
      </Link>
    </div>
  );
}

export default BlocError;
