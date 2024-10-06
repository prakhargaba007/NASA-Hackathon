import React from "react";
import styles from "./Exoplanet.module.css";

const Exoplanet = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1>How do we find Exoplanets?</h1>
        <p>
          The successes of discovering exoplanets in recent decades seem to be
          telling us that the galaxy is teeming with trillions of exoplanets,
          but finding them isn't easy. Planets are typically billions of times
          fainter than the stars they orbit, and they are incredibly distant.
          The challenges of observing extrasolar planets stem from four basic
          facts: Planets don't produce any light of their own, except when
          they're recently formed (i.e. young). They are an enormous distance
          from us. They are lost in the blinding glare of their parent stars.
          Their sizes and masses are typically much, much smaller than that of
          the stars they orbit. It's pretty rare for astronomers to see an
          exoplanet through their telescopes the way you might see Mars through
          a telescope from Earth. That's called direct imaging, and only a
          handful of exoplanets have been found this way (and these tend to be
          young gas giant planets orbiting very far from their stars). Most
          exoplanets are found through indirect methods: measuring the dimming
          of a star that happens to have a planet pass in front of it, or
          monitoring the spectrum of a star for the tell-tale signs of a planet
          pulling on its star and causing its light to subtly Doppler shift.
          NASA's Kepler Space Telescope finds thousands of planets.
        </p>
      </div>
    </div>
  );
};

export default Exoplanet;
