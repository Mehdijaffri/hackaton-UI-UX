import Image from 'next/image';
import styles from '../style/page.module.css';

export default function CeramicsSection() {
  return (
    <section className={styles.ceramicsSection}>
      <h2>New ceramics</h2>
      <div className={styles.ceramicsGrid}>
        {[
          { src: '/chair.jpeg', title: 'The Dandy Chair', price: '£250' },
          { src: '/vase1.jpeg', title: 'Rustic Vase Set', price: '£155' },
          { src: '/vase2.jpeg', title: 'The Silky Vase', price: '£125' },
          { src: '/lamp.jpeg', title: 'The Lucy Lamp', price: '£399' },
        ].map((item, index) => (
          <div key={index} className={styles.ceramicItem}>
            <Image src={item.src} alt={item.title} width={300} height={300} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button className={styles.viewCollectionButton}>View collection</button>
    </section>
  );
}
