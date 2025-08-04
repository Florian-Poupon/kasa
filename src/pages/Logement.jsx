import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";
import Error from "./Error";

export default function Logement() {
  const { id } = useParams();
  const logement = Logements.find((item) => item.id === id);

  if (!logement) {
    // Afficher la page d'erreur si le logement n'existe pas
    return <Error />;
  }

  return (
    <>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Ajoute ici les autres infos (images, etc.) */}
    </>
  );
}
