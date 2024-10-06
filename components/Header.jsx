import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.headerText}>Exoplanet</h1>
        {/* <nav className={styles.navbar}>
          <p>Vision</p>
          <p>Programs</p>
          <p>Blog</p>
        </nav> */}
      </div>
      <div className={styles.textContainer}>
        <h2>What is an Exoplanet?</h2>
        <p>
          An exoplanet is a planet outside our solar system, with over 5,600
          confirmed so far. Most orbit other stars, but some, called rogue
          planets, float freely in space. These planets vary widely in size and
          conditions, from gas giants larger than Jupiter to rocky Earth-sized
          worlds. They can be extremely hot, freezing cold, or even orbit two
          stars at once. The first exoplanets were discovered in the early
          1990s, with 51 Pegasi b, a "hot Jupiter" 50 light-years away, making
          headlines in 1995. Since then, thousands more have been found.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
      <div className={styles.customShapeDividerBottom}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;