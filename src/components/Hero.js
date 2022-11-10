import React from "react";
import { styles } from "../style";

const Hero = () => {
  return (
    <div className={styles.marginBanner}>
      <h1 className={styles.heading1}>
        With us, you can shop online & help <br />{" "}
        <span>save your high street at the same time</span>
      </h1>
    </div>
  );
};

export default Hero;
