import React from "react";
import styles from "./WatchDemo.module.css";

interface watchDemo {
  imageSrc: string;
}

const WatchDemo: React.FC<watchDemo> = ({ imageSrc }) => {
  return (
    <div className={styles.watchDemo}>
      <img loading="lazy" src={imageSrc} alt={"play button"} />
      Watch Demo
    </div>
  );
};

export default WatchDemo;
