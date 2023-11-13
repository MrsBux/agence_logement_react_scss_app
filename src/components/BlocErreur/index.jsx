import { Link } from "react-router-dom";
import "../../style/build/blocerreur.css";

function BlocError() {
  return (
    <main>
      <div className="error">
        <p className="error__code"> 404 </p>
        <p className="error__txt">
          {" "}
          Oups! La page que vous demandez n'existe pas.{" "}
        </p>
        <Link to="/kasa-app/" className="error__link">
          {" "}
          Retourner sur la page d'accueil{" "}
        </Link>
      </div>
    </main>
  );
}

export default BlocError;
