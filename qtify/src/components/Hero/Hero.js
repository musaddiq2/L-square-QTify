import React from "react";
import styles from "./Hero.module.css";
import HeadphoneImage from "../../assets/hero-image.png"
const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img
            src={HeadphoneImage}
            width={212}
            alt="hero-section-headphone"
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
