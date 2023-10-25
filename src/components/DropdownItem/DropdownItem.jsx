import { useState } from "react";
import "../../style/build/dropdownitem.css";

function DropdownItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="item">
      <div className="item__block item__block__opened">
        <h3 className="item__block__title"> {title} title </h3>
        <button
          className="item__block__button"
          onClick={() => setIsOpen(false)}
        >
          {" "}
          ^{" "}
        </button>
      </div>
      <div className="item__txt">
        <p className="item__txt__description"> {description} description </p>
      </div>{" "}
    </div>
  ) : (
    <div className="item">
      <div className="item__block ">
        <h3 className="item__block__title"> {title} title </h3>
        <button className="item__block__button" onClick={() => setIsOpen(true)}>
          ^
        </button>
      </div>
    </div>
  );
}
export default DropdownItem;
