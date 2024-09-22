import React from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from "./OMCard.module.css";

interface OMCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonStyle: "primary" | "secondary";
}

const OMCard: React.FC<OMCardProps> = ({
  title,
  description,
  imageSrc,
  buttonStyle,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          className={styles.cardImage}
          layout="responsive"
          width={317}
          height={246}
          quality={100}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button
          className={`${styles.button} ${
            buttonStyle === "primary"
              ? styles.buttonPrimary
              : styles.buttonSecondary
          }`}
        >
          View Sample Template
        </button>
      </div>
    </article>
  );
};

export default OMCard;
