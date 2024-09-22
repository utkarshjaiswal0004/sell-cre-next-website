"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import NavLink from "./NavLink";
import TryFreeButton from "./TryFreeButton";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const navItems = ["Features", "Pricing", "Login"];

  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logoLink}>
        <Image
          loading="lazy"
          src="/images/logo/logo.svg"
          className={styles.logo}
          alt="Company logo"
          width={150}
          height={50}
          quality={100}
        />
      </Link>
      <nav className={styles.navigationContainer}>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <NavLink key={item} text={item} />
          ))}
          <TryFreeButton />
        </div>
        <div
          className={styles.hamburgerIcon}
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          <IoMenu size={24} color="black" />
        </div>
      </nav>

      {isDrawerOpen && (
        <div className={styles.drawerMenu}>
          <div
            className={styles.closeButton}
            onClick={() => setDrawerOpen(false)}
          >
            <MdClose size={24} />
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item}
              text={item}
              className={styles.drawerMenuNavLink}
            />
          ))}
          <TryFreeButton />
        </div>
      )}
    </header>
  );
};

export default Header;
