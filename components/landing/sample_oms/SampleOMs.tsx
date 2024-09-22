import React from "react";
import styles from "./SampleOMs.module.css";
import OMCard from "./om_card/OMCard";

interface OMData {
  title: string;
  description: string;
  imageSrc: string;
  buttonStyle: "primary" | "secondary";
}

const omData: OMData[] = [
  {
    title: "Retail OM",
    description: "strip centers, street retail, vehicle related, and more.",
    imageSrc: "/images/sample_oms/retail.png",
    buttonStyle: "primary",
  },
  {
    title: "Multi-Family OM",
    description: "garden, low-rise, mid-rise, high-rise.",
    imageSrc: "/images/sample_oms/family.png",
    buttonStyle: "secondary",
  },
  {
    title: "Office OM",
    description: "all classes of office buildings, loft/creative, medical.",
    imageSrc: "/images/sample_oms/office.png",
    buttonStyle: "secondary",
  },
];

const SampleOMs: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 className={styles.header}>
            Sample OMs created with our platform
          </h2>
        </header>
        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}>
            {omData.map((om, index) => (
              <OMCard key={index} {...om} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleOMs;
