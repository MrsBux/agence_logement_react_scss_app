import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Informations from "../../components/Informations";
import datas from "../../datas/data.json";

function Fichelogement() {
  const { id } = useParams();
  const logement = datas.find((logement) => logement.id === id);
  const pictures = logement.pictures;
  const navigate = useNavigate();

  if (!logement) {
    navigate("/*");
    return null;
  }
  return (
    <main>
      <div className="section_logement">
        <Carrousel logementId={id} logement={logement} pictures={pictures} />
        <Informations logementId={id} />
      </div>
    </main>
  );
}

export default Fichelogement;
