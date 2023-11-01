import "../../style/build/informations.css";
import Hote from "./Hote";
import Rating from "./Rating";
import Tag from "./TagList/Tag/Tag";
import DropdownItem from "../../components/DropdownItem/DropdownItem";
import Title from "./Title";
import datas from "../../datas/data.json";

function Informations({ logementId }) {
  const logements = Array.isArray(datas) ? datas : [];
  const logement = logements.find((logement) => logement.id === logementId);

  return (
    <section className="informations">
      <div className="informations__container1">
        <div className="informations__container1__general">
          <div className="informations__container1__general__title">
            <Title
              key={`string_${logement.id}`}
              title={logement.title}
              location={logement.location}
            />
          </div>

          <div className="informations__container1__general__taglist">
            {logement.tags.map((tag, tagIndex) => (
              <div
                className="informations__container1__general__taglist"
                key={`tagContainer_${logement.id}_${tagIndex}`}
              >
                <Tag key={`tag_${logement.id}_${tagIndex}`} tag={tag} />
              </div>
            ))}
          </div>
        </div>

        <div className="informations__container1__utiles">
          <div className="informations__container1__utiles__hote">
            <Hote
              key={`hote_${logement.id}`}
              name={logement.host.name}
              picture={logement.host.picture}
            />
          </div>
          <div className="informations__container1__utiles__rating">
            <Rating key={`rate_${logement.id}`} rating={logement.rating} />
            {/* ))} */}
          </div>
        </div>
      </div>

      <div className="informations__container2">
        <DropdownItem
          key={`description_${logement.id}`}
          title={"Description"}
          description={logement.description}
        />

        <DropdownItem
          key={`equipments_${logement.id}`}
          title={"Equipements"}
          description={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li className="equipments_list" key={index}>
                  {equipment}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}

export default Informations;
