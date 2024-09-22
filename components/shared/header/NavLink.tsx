import React from "react";
import { MdLockOutline } from "react-icons/md";
import styles from "./Header.module.css";

interface NavLinkProps {
  text: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, className }) => {
  if (text.toLowerCase() === "login") {
    return (
      <div className={` ${className || ""} ${styles.loginButton}`}>
        {" "}
        <MdLockOutline />
        <span>Login</span>
      </div>
    );
  }

  return <div className={className}>{text}</div>;
  {
    /* Apply className to normal links */
  }
};

export default NavLink;
