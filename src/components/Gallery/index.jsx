import { Link } from "react-router-dom";

import "../../style/build/gallery.css";
import CartL from "./CartLogement/CartL";
import datas from "../../datas/data.json";

function Gallery() {
  const logements = Array.isArray(datas) ? datas : [];
  const firstSixLogements = logements.slice(0, 6);

  return (
    <section className="gallery">
      <div className="gallery__container">
        {firstSixLogements.map((logement, index) => (
          <Link key={logement.id} to={`/fichelogement/${logement.id}`}>
            <CartL
              key={logement.id}
              imgsrc={logement.cover}
              title={logement.title}
            />{" "}
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Gallery;
