import React from "react";
import Logements from "../../data/logements.json";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <section className="cardsGrid">
      {Logements.map((logement) => (
        <Link to={`/logement/${logement.id}`}>
          <article
            className="card"
            key={logement.id}
            style={{
              backgroundImage: `url(${logement.cover})`,
            }}
          >
            <div className="card__overlay"></div>
            <div className="logement__infos">
              <h3>{logement.title}</h3>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}
