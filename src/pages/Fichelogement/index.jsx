import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Informations from "../../components/Informations";
import datas from "../../datas/data.json";
import { Navigate } from "react-router-dom";

function Fichelogement() {
  const { id } = useParams();
  const logement = datas.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="*" replace={true} />;
  }
  return (
    <div className="section_logement">
      <Carrousel logementId={id} />
      <Informations logementId={id} />
    </div>
  );
}

export default Fichelogement;
