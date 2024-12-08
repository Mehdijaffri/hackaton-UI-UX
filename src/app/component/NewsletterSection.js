import styles from '../style/NewsletterSection.module.css';

const NewsletterSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Join the club and get the benefits</h1>
        <p className={styles.subtext}>
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more
        </p>
        <div className={styles.features}>
          <span>✅ Exclusive offers</span>
          <span>✅ Free events</span>
          <span>✅ Large discounts</span>
        </div>
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

export default NewsletterSection;
