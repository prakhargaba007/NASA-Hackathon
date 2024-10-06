import React from "react";
import styles from "./ExoplanetComparison.module.css";
import PlanetCard from "./PlanetCard";
import Image from "next/image";
import Neptune_exoplanet from "../assets/Neptune_exoplanet.jpg";
import Super_earth from "../assets/Super_earth.jpg";
import Terrestrial_exoplanet from "../assets/Terrestrial_exoplanet.jpg";
import gient_gas from "../assets/gient_gas.jpg";
import jupiter from "../assets/Hot-Jupiter-Exoplanet-Concept-Art.webp";

function ExoplanetComparison() {
  const planetList = [
    {
      id: 1,
      title: "Neptunian",
      desc: "They likely have a mixture of interior compositions, but all will have hydrogen and helium-dominated outer atmospheres and rocky cores. We’re also discovering planets smaller than Neptune and bigger than Earth.",
      img: Neptune_exoplanet,
    },
    {
      id: 2,
      title: "Super-Earths",
      desc: "Super-Earths are typically terrestrial planets that may or may not have atmospheres. They are more massive than Earth, but lighter than Neptune.",
      img: Super_earth,
    },
    {
      id: 3,
      title: "Terrestrial exoplanet",
      desc: "Terrestrial planets are Earth sized and smaller, composed of rock, silicate, water or carbon. Further investigation determined that some of them possess  signs of habitability.",
      img: Terrestrial_exoplanet,
    },
    {
      id: 4,
      title: "Gaint gas exoplanet",
      desc: "A gas giant is a large planet mostly composed of helium or hydrogen. These planets don’t have hard surfaces and instead have swirling gases above a solid core.",
      img: gient_gas,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.main}>
          <div>
            <h1 style={{ marginBottom: 5, fontSize: 40 }}>
              Exo-Planet v/s Planet
            </h1>
            <p style={{ fontSize: 18 }}>
              Planets in our solar system are different from exoplanets (planets
              orbiting other stars) primarily because exoplanets exhibit a much
              wider variety of sizes, compositions, and orbital patterns
              compared to the planets within our solar system, with many
              exoplanets being significantly closer to their stars and having
              more eccentric orbits, while our solar system planets tend to have
              more predictable, near-circular orbits and a more balanced
              distribution of planet types; most known exoplanets are either
              "hot Jupiters" (large gas giants very close to their stars) or
              smaller rocky planets, whereas our solar system has a mix of rocky
              inner planets and gas giants further out.
            </p>
          </div>
          <div>
            <h2 style={{ marginBottom: 5, fontSize: 30 }}>Types of Planet</h2>
            <p style={{ fontSize: 17 }}>
              Each planet type varies in interior and exterior appearance
              depending on composition. Gas giants are planets the size of
              Saturn or Jupiter, the largest planet in our solar system, or
              much, much larger. ​ More variety is hidden within these broad
              categories. Hot Jupiters, for instance, were among the first
              planet types found – gas giants orbiting so closely to their stars
              that their temperatures soar into the thousands of degrees
              (Fahrenheit or Celsius).
            </p>
          </div>
        </div>
        <div className={styles.main2}>
          <div className={styles.main21}>
            <PlanetCard planetList={planetList[0]} />
            <PlanetCard planetList={planetList[1]} />
          </div>
          <div className={styles.main22}>
            <PlanetCard planetList={planetList[2]} />
            <PlanetCard planetList={planetList[3]} />
          </div>
        </div>
      </div>
      <div className={styles.undiscoverdMysteries}>
        <Image src={jupiter} alt="Neptunian planet" className={styles.image} />
        <div>
          <h1>Undiscoverd Mysteries</h1>
          <div>
            <p>Here are some mysteries about exoplanets: </p>
            <ul>
              <li>
                <h4>The "hot Neptunian desert"The "hot Neptunian desert"</h4>
                <p>
                  Astronomers are puzzled by the lack of Neptune-sized planets
                  that orbit their stars in less than four days. This is known
                  as the "hot Neptunian desert".{" "}
                </p>
              </li>
              <li>
                <h4>Leaking atmospheres</h4>
                <p>
                  Exoplanets are constantly exposed to radiation and particles
                  from their stars. This can cause their atmospheres to leak,
                  especially for planets that orbit close to their star.
                </p>
              </li>
              <li>
                <h4>Super-Earths</h4>
                <p>
                  These planets are larger than Earth but smaller than Neptune.
                  Astronomers are eager to learn more about them.
                </p>
              </li>
              <li>
                <h4>"Cotton candy" planets</h4>
                <p>
                  These are a rare type of young exoplanet with a density
                  similar to cotton candy. NASA's Hubble Space Telescope has
                  provided clues about the chemistry of two of these planets in
                  the Kepler 51 system.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExoplanetComparison;
