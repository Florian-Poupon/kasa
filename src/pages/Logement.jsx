import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";
import Error from "./Error";
import Slider from "../components/slider/Slider";
import Dropdown from "../components/dropdown/Dropdown";
import Rating from "../components/rating/Rating";

export default function Logement() {
  const { id } = useParams();
  const logement = Logements.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  const [prenom, ...nom] = logement.host.name.split(" ");

  return (
    <div className="logement-page">
      <Slider />
      <div className="logement__infos">
        {/* /left */}
        <div className="logement__infos__left">
          <div className="logement__infos__title-container">
            <h1 className="logement__infos__title">{logement.title}</h1>
            <p className="logement__infos__location">{logement.location}</p>
          </div>
          <div className="logement__infos__tags">
            {logement.tags.map((tag, idx) => (
              <button className="tag" key={idx}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        {/* /right */}
        <div className="logement__infos__right">
          <div className="logement__infos__host">
            {/* <p>{logement.host.name}</p> */}
            <p className="host-name">
              {prenom}
              <br />
              {nom.join(" ")}
            </p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating />
        </div>
      </div>
      {/* dropdowns */}
      <div className="logement__infos">
        <div className="logement__infos__left">
          <Dropdown className="logement__dropdown" title="Description">
            <div className="dropdown__inner">{logement.description}</div>
          </Dropdown>
        </div>
        <div className="logement__infos__right">
          <Dropdown title="Équipements">
            <div className="dropdown__inner">
              <ul>
                {logement.equipments.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
