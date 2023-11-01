import React from "react";
import "../../../style/build/cartl.css";

function CartL({ imgsrc, title }) {
  return (
    <div className="cartL">
      <div className="cartL__container">
        <div className="cartL__container__lay">
          <img
            src={imgsrc}
            alt="logement"
            className="cartL__container__lay__img"
          ></img>

          <div className="cartL__container__lay__gradient-overlay"></div>
        </div>{" "}
        <div className="cartL__container__title">
          <h3> {title}</h3>
        </div>
      </div>
    </div>
  );
}

export default CartL;
