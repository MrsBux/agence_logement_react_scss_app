import React, { useState } from "react";
import "../../style/build/carrousel.css";
import leftArrow from "../../assets/VectorP.svg";
import rightArrow from "../../assets/Vector2.svg";

function Carrousel({ logementId, logement, pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const compteur = () => {
    return `${currentImageIndex + 1}/${pictures.length}`;
  };

  return (
    <div className="carroussel">
      {logementId === "cb02d69b" ? (
        <img
          className="carroussel__cover"
          src={pictures[currentImageIndex]}
          alt="logement"
        />
      ) : (
        <>
          <img
            className="carroussel__arrow carroussel__arrow__prev"
            src={leftArrow}
            alt="precedant"
            onClick={previousImage}
          />
          <img
            className="carroussel__arrow carroussel__arrow__next"
            src={rightArrow}
            alt="suivant"
            onClick={nextImage}
          />
          <img
            className="carroussel__cover"
            src={pictures[currentImageIndex]}
            alt="logement"
          />

          <div className="carroussel__counter">{compteur()}</div>
        </>
      )}
    </div>
  );
}

export default Carrousel;
