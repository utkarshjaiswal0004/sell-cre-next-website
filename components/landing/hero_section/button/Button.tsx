import React from "react";
import styles from "./Button.module.css";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className={styles.button}>
      <div className={styles.buttonContent}>
        <span className={styles.buttonText}>{text}</span>
        <div className={styles.buttonIcon}>
          <FaArrowRight className={styles.buttonIconImage} />
        </div>
      </div>
    </button>
  );
};

export default Button;
