import "../../style/build/rating.css";
import starActive from "../../assets/star-active-3.svg";
import starInactive from "../../assets/Vector.svg";

function Rating({ rating }) {
  if (rating >= 0 && rating <= 5) {
    const ratingValue = parseInt(rating); // Convertir la valeur "rating" en nombre entier
    const starsActive = Array(ratingValue).fill(null); // Créer un tableau d'étoiles actives
    const starsInactive = Array(5 - ratingValue).fill(null); // Créer un tableau d'étoiles inactives

    return (
      <div className="container">
        <div className="container__staractive">
          {starsActive.map((_, index) => (
            <img
              key={`star_active_${index}`}
              src={starActive}
              alt="étoile active note"
            ></img>
          ))}
        </div>
        <div className="container__starinactive">
          {starsInactive.map((_, index) => (
            <img
              key={`star_inactive_${index}`}
              src={starInactive}
              alt="étoile inactive note"
            ></img>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <p> note</p>
      </div>
    );
  }
}

export default Rating;
