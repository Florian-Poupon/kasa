import React from "react";
import Logements from "../../data/logements.json";
export default function Card() {
  return (
    <section className="cardsGrid">
      {Logements.map((logement) => (
        <article className="card" key={logement.id}>
          <div className="logement__infos">
            <h3>{logement.title}</h3>
          </div>
        </article>
      ))}
    </section>
  );
}
