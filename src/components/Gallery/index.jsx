import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../style/build/gallery.css";
import CartL from "./CartLogement/CartL";
import datas from "../../datas/data.json";

function Gallery() {
  const logements = Array.isArray(datas) ? datas : [];
  const [visibleLogements, setVisibleLogements] = useState(6);
  const [showInitial, setShowInitial] = useState(false);

  const loadMore = () => {
    setVisibleLogements((prevCount) => prevCount + 6);
    if (visibleLogements + 6 >= logements.length) {
      setShowInitial(true);
    }
  };

  const resetToInitial = () => {
    setVisibleLogements(6);
    setShowInitial(false);
  };

  return (
    <section className="gallery">
      <div className="gallery__container">
        {logements.slice(0, visibleLogements).map((logement, index) => (
          <Link key={logement.id} to={`/fichelogement/${logement.id}`}>
            <CartL
              key={logement.id}
              imgsrc={logement.cover}
              title={logement.title}
            />{" "}
          </Link>
        ))}
      </div>
      <div className="gallery__button">
        {visibleLogements < logements.length && (
          <button className="seeMore" onClick={loadMore}>
            Voir plus
          </button>
        )}
        {showInitial && (
          <button className="seeLess" onClick={resetToInitial}>
            Voir moins
          </button>
        )}
      </div>
    </section>
  );
}
export default Gallery;
