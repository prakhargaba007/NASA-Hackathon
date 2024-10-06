"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./DiscoveryOfExoplanets.module.css";
import Discoveryofexoplanets from "../assets/Discovery-of-exoplanets.jpg";

function DiscoveryOfExoplanets() {
  const [windowWidth, setWindowWidth] = useState(0);

  // Update the window width
  useEffect(() => {
    // Function to update the width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width when the component mounts
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.d1}>
        <h1>Discovery of Exoplanets</h1>
        {windowWidth < 480 && (
          <Image src={Discoveryofexoplanets} className={classes.image} />
        )}
        <div>
          <p style={{ fontSize: 22 }}>
            The first exoplanets were discovered in the early 1990s, but the
            first exoplanet to burst upon the world stage was 51 Pegasi b, a
            “hot Jupiter” orbiting a Sun-like star 50 light-years away. The
            watershed year was 1995. Since then we’ve discovered thousands more.
          </p>
          <p style={{ fontSize: 22 }}>
            Size and mass play a crucial role in determining planet types. There
            are also varieties within the size/mass classifications. Scientists
            also have noted what seems to be a strange gap in planet sizes. It’s
            been dubbed the “radius valley,” or the Fulton gap, after Benjamin
            Fulton, lead author on a paper describing it. Data from NASA’s
            Kepler spacecraft showed that planets of a certain size-range are
            rare – those between 1.5 and 2 times the size (diameter) of Earth,
            which would place them among the super-Earths. It’s possible that
            this represents a critical size in planet formation: Planets that
            reach this size quickly attract thick atmospheres of hydrogen and
            helium gas, and balloon up into gaseous planets, while planets
            smaller than this limit are not large enough to hold such an
            atmosphere and remain primarily rocky, terrestrial bodies. On the
            other hand, the smaller planets that orbit close to their stars
            could be the cores of Neptune-like worlds that had their atmospheres
            stripped away.
          </p>
        </div>
      </div>
      {windowWidth >= 480 && (
        <Image src={Discoveryofexoplanets} className={classes.image} />
      )}
    </div>
  );
}

export default DiscoveryOfExoplanets;
