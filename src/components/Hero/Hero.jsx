import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anmol Pandey</h1>
        <p className={styles.description}>
        Currently studying at Delhi Technological University, I’m a full-stack developer with a passion for problem-solving. I've completed over 500 coding challenges and specialize in building responsive, high-performance web applications that elevate user experience.
        </p>
        <a href="mailto:anmolpandey23012004@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};