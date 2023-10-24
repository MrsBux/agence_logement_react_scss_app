import React from "react";
import "../../style/build/cartl.css";

function CartL({ imgsrc, title }) {
  return (
    <div className="cartL">
      <div className="container">
        <img src={imgsrc} alt="logement" className="cartL__img"></img>
      </div>
      <div className="cartL__titre">
        <h3> {title}</h3>
      </div>
    </div>
  );
}

export default CartL;
