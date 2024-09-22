import React from "react";
import styles from "./PropertyTypes.module.css";
import PropertyCard from "./property_card/PropertyCard";

const propertyTypes = [
  {
    iconSrc: "/images/property/retail.svg",
    type: "Retail",
  },
  {
    iconSrc: "/images/property/home.svg",
    type: "Multi-family",
  },
  {
    iconSrc: "/images/property/office.svg",
    type: "Office",
  },
  {
    iconSrc: "/images/property/land.svg",
    type: "Land",
  },
  {
    iconSrc: "/images/property/industry.svg",
    type: "Industrial",
  },
  {
    iconSrc: "/images/property/hotel.svg",
    type: "Hotel",
  },
];

const PropertyTypes: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.subtitle}>Create OMs and Ads For</h2>
        <h1 className={styles.title}>Various Real Estate Property Types</h1>
      </header>
      <div className={styles.propertyGrid}>
        {propertyTypes.map((property, index) => (
          <PropertyCard
            key={index}
            iconSrc={property.iconSrc}
            propertyType={property.type}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
