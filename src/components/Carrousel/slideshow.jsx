import React, { useState, useEffect } from "react";
import "../../style/build/carrousel.css";

function Slideshow({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [pictures]);

  return (
    <div className="carrousel-container">
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`Image ${index}`}
          className={index === currentImageIndex ? "active" : "inactive"}
        />
      ))}
    </div>
  );
}

export default Slideshow;
