import "../../style/build/informations.css";
import Hote from "./Hote";
import Rating from "./Rating";
import Tag from "./TagList/Tag/Tag";
import DropDownInfos from "./DropDownInfos";
import Title from "./Title";
import datas from "../../datas/data.json";

function Informations() {
  const logements = Array.isArray(datas) ? datas : [];
  const logementsessai = logements.slice(0, 1);
  return (
    <section className="informations">
      <div className="informations__container1">
        <div className="informations__container1__general">
          <div className="informations__container1__general__title">
            {logementsessai.map((logement, index) => (
              <Title
                key={`string_${logement.id}`}
                title={logement.title}
                location={logement.location}
              />
            ))}
          </div>
          <div className="informations__container1__general__taglist">
            {logementsessai.map((logement, index) => (
              <div
                className="informations__container1__general__taglist"
                key={`tagContainer_${logement.id}`}
              >
                {logement.tags.map((tag, tagIndex) => (
                  <Tag key={`tag_${logement.id}_${tagIndex}`} tag={tag} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="informations__container1__utiles">
          <div className="informations__utiles__hote">
            <Hote />
          </div>
          <div className="informations__utiles__rating">
            <Rating />{" "}
          </div>
        </div>
      </div>
      <div className="informations__container2">
        <DropDownInfos />
      </div>
    </section>
  );
}

export default Informations;
