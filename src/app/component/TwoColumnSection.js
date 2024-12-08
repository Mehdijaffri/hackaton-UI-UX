import styles from '../style/TwoColumnSection.module.css';
import Image from 'next/image';

const TwoColumnSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textColumn}>
        <h1 className={styles.heading}>It started with a small idea</h1>
        <p className={styles.subtext}>
          A global brand with local beginnings, our story began in a small studio in South London in early 2014
        </p>
        <button className={styles.button}>View collection</button>
      </div>
      <div className={styles.imageColumn}>
        <Image
          src="/room.jpeg"
          alt="Modern living room"
          className={styles.image}
          width={600} height={300}
        />
      </div>
    </section>
  );
};

export default TwoColumnSection;
