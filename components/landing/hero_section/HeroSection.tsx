import React from "react";
import styles from "./HeroSection.module.css";
import Button from "./button/Button";
import WatchDemo from "./watch_demo/WatchDemo";
const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.boldText}>Sell CRE Faster </span>with OMs &
            Ads created in <span className={styles.boldText}>minutes</span>
          </h1>
          <p className={styles.heroDescription}>
            Create beautiful Commercial Real Estate Offering Memorandums, Flyers
            & Ads in minutes with our AI powered platform
          </p>
          <div className={styles.ctaContainer}>
            <Button text="Try for free" />
            <WatchDemo imageSrc="/images/hero/play.svg" />
          </div>
        </div>
        <nav className={styles.headerMenu}>
          <img
            loading="lazy"
            src="/images/hero/hero.png"
            alt="Header menu options"
            className={styles.headerMenuImage}
          />
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
