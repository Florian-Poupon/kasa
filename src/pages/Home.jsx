import React from "react";
import Logements from "../data/logements.json";
import Section_header from "../components/section_header/Section_header";
import Card from "../components/card/Card";

function Home() {
  return (
    <section className="home">
      <Section_header titre="Chez vous, partout et ailleurs" image="home" />
      <div>
        <Card />
      </div>
    </section>
  );
}

export default Home;
