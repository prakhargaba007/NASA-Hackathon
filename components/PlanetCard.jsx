import React from "react";
import styles from "./PlanetCard.module.css";
import Image from "next/image";
import planetImg from "../assets/186772-3840x2160-desktop-4k-planet-background.jpg";

const PlanetCard = (planetList) => {
  return (
    <div className={styles.card}>
      <Image
        src={planetList.planetList.img}
        alt={planetList.planetList.title}
        className={styles.image}
      />
      <h3 className={styles.title}>{planetList.planetList.title}</h3>
      <p className={styles.description} style={{ fontSize: 17 }}>
        {planetList.planetList.desc}
      </p>
    </div>
  );
};

export default PlanetCard;
