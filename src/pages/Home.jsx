import React from "react";
import Logements from "../data/logements.json";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";

function Home() {
  return (
    <section className="home">
      <Banner titre="Chez vous, partout et ailleurs" image="home" />
      <div>
        <Card />
      </div>
    </section>
  );
}

export default Home;
