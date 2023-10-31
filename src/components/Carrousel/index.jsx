import React, { useState } from "react";
import "../../style/build/carrousel.css";
import datas from "../../datas/data.json";
import leftArrow from "../../assets/VectorP.svg";
import rightArrow from "../../assets/Vector2.svg";

function Carrousel({ logementId }) {
  const logements = Array.isArray(datas) ? datas : [];
  const logement = logements.find((logement) => logement.id === logementId);
  const pictures = logement.pictures;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  if (!logement) {
    return (
      <div>
        <p>Logement non trouvé pour l'ID : {logementId}</p>
      </div>
    );
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  //   }, 3000); // Change d'image toutes les 5 secondes

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [pictures]);

  return (
    <div className="carroussel">
      <img
        className="carroussel__arrow carroussel__arrow__prev"
        src={leftArrow}
        alt="precedant"
        onClick={previousImage}
      ></img>
      <img
        className="carroussel__arrow carroussel__arrow__next"
        src={rightArrow}
        alt="suivant"
        onClick={nextImage}
      ></img>
      <img
        className="carroussel__cover"
        src={pictures[currentImageIndex]}
        alt="logement"
      ></img>
    </div>
  );
}

export default Carrousel;
