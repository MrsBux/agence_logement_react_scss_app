import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Carrousel from "../../components/Carrousel";
import Informations from "../../components/Informations";
import BlocErreur from "../../components/BlocErreur";
import datas from "../../datas/data.json";

function Fichelogement() {
  const { id } = useParams();
  const logement = datas.find((logement) => logement.id === id);
  const pictures = logement?.pictures; // Utilisation de l'opérateur de coalescence nullish (?)
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    return (
      <main>
        {" "}
        <BlocErreur />;{" "}
      </main>
    );
  }

  return (
    <main>
      <div className="section_logement">
        <Carrousel pictures={pictures} />
        <Informations logementId={id} />
      </div>
    </main>
  );
}

export default Fichelogement;
