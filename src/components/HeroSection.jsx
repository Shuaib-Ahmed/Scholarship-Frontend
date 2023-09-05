import React from "react";
import styles from "./styles/hero.module.css";

import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className={`container ${styles.heroContainer}`}>
      <div className={styles.left}>
        <h2>
          Free <span>scholarship</span> for every bright student
        </h2>
        <p>
          We believe that education is the key to unlocking a brighter future.
          We are here to support you in your pursuit of knowledge and help you
          access the financial resources you need to achieve your academic
          goals. Start exploring our website today and take the first step
          toward a successful and fulfilling educational journey!
        </p>
        <button className="secondaryBtn">
          <FaSearch /> scholarship
        </button>
      </div>
      <div className={styles.right}>
        <img src="image/hero_section.jpg" alt="hero" />
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
