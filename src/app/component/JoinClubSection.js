import styles from '../style/JoinClubSection.module.css';

const JoinClubSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join the club and get the benefits</h2>
        <p className={styles.subtitle}>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="your@email.com"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinClubSection;
