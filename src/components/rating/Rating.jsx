import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../../data/logements.json";

const max_stars = 5;

const Rating = () => {
  const { id } = useParams();
  const logement = Logements.find((item) => item.id === id);

  if (!logement) return null;

  const rating = Math.max(0, Math.min(max_stars, logement.rating));

  return (
    <div className="rating" aria-label={`Note : ${rating} sur 5 étoiles`}>
      {[...Array(max_stars)].map((_, i) => (
        <img
          key={i}
          src={i < rating ? "/src/assets/images/icons/star_red.svg" : "/src/assets/images/icons/star_grey.svg"}
          alt={i < rating ? "étoile pleine" : "étoile vide"}
          className="rating__star"
        />
      ))}
    </div>
  );
};

export default Rating;
