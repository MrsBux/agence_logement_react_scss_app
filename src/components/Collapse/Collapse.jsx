import { useState } from "react";
import "../../style/build/collapse.css";
import arrowup from "../../assets/arrow_up.svg";
import arrowback from "../../assets/arrow_back.svg";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="item">
      <div className={`item__block ${isOpen ? "item__block__opened" : ""}`}>
        <h3 className="item__block__title"> {title} </h3>

        <button
          className="item__block__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? arrowback : arrowup}
            alt={isOpen ? "bouton fermeture" : "bouton ouverture"}
            className="item__block__button__img"
          ></img>
        </button>
      </div>
      <div className={`item__txt ${isOpen ? "item__txt__open" : ""}`}>
        {/* <div className="item__txt__jointure"> :</div> */}
        <p className="item__txt__description"> {description} </p>
      </div>{" "}
    </div>
  );
}

export default Collapse;
