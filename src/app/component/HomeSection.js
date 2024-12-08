import styles from '../style/HomeSection.module.css';

const HomeSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className={styles.subtext}>Shop the new Spring 2022 collection today</p>
        <button className={styles.button}>View collection</button>
      </div>
    </section>
  );
};

export default HomeSection;
