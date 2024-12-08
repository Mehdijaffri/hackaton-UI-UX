import Image from 'next/image';
import styles from '../style/page.module.css';

export default function PopularProducts() {
  return (
    <section className={styles.ceramicsSection}>
    <h2>Our popular products</h2>
    <div className={styles.popularGrid}>
      <div className={styles.ceramicItem}>
        <Image src="/sofa.jpeg" alt="The Poplar suede sofa" width={600} height={300} className={styles.img} />
        <h3>The Poplar suede sofa</h3>
        <p>£980</p>
      </div>
      <div className={styles.ceramicItem}>
        <Image src="/chair.jpeg" alt="The Dandy Chair" width={300} height={300} />
        <h3>The Dandy chair</h3>
        <p>£250</p>
      </div>
      <div className={styles.ceramicItem}>
        <Image src="/chair1.jpeg" alt="The Dandy chair" width={300} height={300} />
        <h3>The Dandy chair</h3>
        <p>£250</p>
      </div>
    </div>
    <button className={styles.viewCollectionButton}>View collection</button>
  </section>
  );
}
