import React from "react";
import Banner from "../components/banner/Banner";
import Dropdown from "../components/dropdown/Dropdown";
import AboutData from "../data/about.json";

function About() {
  return (
    <div>
      <Banner titre="" image="about" />
      <section className="valors-container">
        {AboutData.map((about, index) => (
          <div className="valors-container__valor" key={index}>
            <Dropdown title={about.title}>
              <div className="dropdown__inner">{about.description}</div>
            </Dropdown>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;
