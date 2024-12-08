import styles from '../style/page.module.css';
import Link from 'next/link';

export default function NavigationLinks() {
  return (
    <nav className={styles.navLinks}>
      <Link href="/">Plant pots</Link>
      <Link href="about">Ceramics</Link>
      <Link href="product">Crockery</Link>
      <Link href="productListing">Tables</Link>
      <Link href="cart">Chairs</Link>
      <Link href="listing">Tableware</Link>
      <Link href="#">Cutlery</Link>
    </nav>
  );
}
