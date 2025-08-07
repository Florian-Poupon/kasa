import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Logements from "../../data/logements.json";

export default function Slider() {
  const { id } = useParams();
  const logement = Logements.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  const [index, setIndex] = useState(0);
  const pictures = logement.pictures;
  const prevSlide = () => setIndex(index === 0 ? pictures.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === pictures.length - 1 ? 0 : index + 1);

  return (
    <div className="slider">
      {pictures.length > 1 && (
        <div className="slider__navigation">
          <button onClick={prevSlide}>
            <img src="/src/assets/images/icons/arrow_left.svg" alt="arrow left" />
          </button>
          <button onClick={nextSlide}>
            <img src="/src/assets/images/icons/arrow_right.svg" alt="arrow right" />
          </button>
        </div>
          <div className="slider__counter">
            {index + 1} / {pictures.length}
          </div>
      )}
      <img src={pictures[index]} alt={logement.title} className="slider__image" />
    </div>
  );
}
