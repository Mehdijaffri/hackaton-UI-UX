import Image from 'next/image';
import styles from '../style/page.module.css';

export default function HeroSection() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroText}>
        <h1>The furniture brand for the future, with timeless designs</h1>
        <button className={styles.ctaButton}>View collection</button>
        <p>
          A new era in eco-friendly furniture with Avion, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way
          to display things digitally using modern web technologies.
        </p>
      </div>
      <div className={styles.heroImage}>
        <Image src="/chair.jpeg" alt="Modern Chair" width={500} height={600} />
      </div>
    </main>
  );
}
