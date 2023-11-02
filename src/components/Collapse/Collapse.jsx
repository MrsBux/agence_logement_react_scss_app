import { useState } from "react";
import "../../style/build/collapse.css";
import arrowup from "../../assets/arrow_up.svg";
import arrowback from "../../assets/arrow_back.svg";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="item">
      <div className="item__block item__block__opened">
        <h3 className="item__block__title"> {title} </h3>

        <button
          className="item__block__button"
          onClick={() => setIsOpen(false)}
        >
          {" "}
          <img
            src={arrowup}
            alt="bouton ouverture"
            className="item__block__button__img"
          ></img>{" "}
        </button>
      </div>
      <div className="item__txt">
        <p className="item__txt__description"> {description} </p>
      </div>{" "}
    </div>
  ) : (
    <div className="item">
      <div className="item__block ">
        <h3 className="item__block__title"> {title} </h3>

        <button className="item__block__button" onClick={() => setIsOpen(true)}>
          <img
            src={arrowback}
            alt="bouton fermeture"
            className="item__block__button__img"
          ></img>{" "}
        </button>
      </div>
    </div>
  );
}
export default Collapse;
