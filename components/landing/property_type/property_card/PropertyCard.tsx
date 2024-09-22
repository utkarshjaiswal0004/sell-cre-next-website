import React from "react";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  iconSrc: string;
  propertyType: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  iconSrc,
  propertyType,
}) => {
  return (
    <article className={styles.propertyCard}>
      <div className={styles.iconWrapper}>
        <img
          loading="lazy"
          src={iconSrc}
          alt={propertyType}
          className={styles.icon}
        />
        <h3 className={styles.propertyType}>{propertyType}</h3>
      </div>
    </article>
  );
};

export default PropertyCard;
