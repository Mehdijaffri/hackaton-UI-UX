"use client";
import { useState } from 'react';
import styles from '../style/page.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on icon click
  const toggleMenu = () => {
    console.log("pre", isMenuOpen);
    
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>Avion</div>

      {/* Hamburger Menu Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      {isMenuOpen &&(
        <nav className={styles.navLinks1}>
        <Link href="/">Plant pots</Link>
        <Link href="about">Ceramics</Link>
        <Link href="product">Crockery</Link>
        <Link href="productListing">Tables</Link>
        <Link href="cart">Chairs</Link>
        <Link href="listing">Tableware</Link>
        <Link href="#">Cutlery</Link>
      </nav>
      )}
      

      {/* Icons */}
      <div className={styles.navIcons}>
        <span className={styles.searchIcon}>🔍</span>
        <span className={styles.cartIcon}>🛒</span>
        <span className={styles.userIcon}>👤</span>
      </div>
    </header>
  );
}

