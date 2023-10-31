import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Informations from "../../components/Informations";
import datas from "../../datas/data.json";

function Fichelogement() {
  const { id } = useParams();
  const logement = datas.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé.</div>;
  }
  return (
    <div className="section_logement">
      <Carrousel logementId={id} />
      <Informations logementId={id} />
    </div>
  );
}

export default Fichelogement;
