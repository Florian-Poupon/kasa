import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";
import Error from "./Error";
import Slider from "../components/slider/Slider";

export default function Logement() {
  const { id } = useParams();
  const logement = Logements.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <>
      <Slider />
      {/* <h1>{logement.title}</h1>
      <p>{logement.description}</p> */}
    </>
  );
}
