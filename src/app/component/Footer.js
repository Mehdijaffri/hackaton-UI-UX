import styles from '../style/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.heading} >Menu</h4>
          <ul className={styles.unorderlist}>
            <li className={styles.li}>New arrivals</li>
            <li className={styles.li}>Best sellers</li>
            <li className={styles.li}>Recently viewed</li>
            <li className={styles.li}>Popular this week</li>
            <li className={styles.li}>All products</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Categories</h4>
          <ul className={styles.unorderlist}>
            <li className={styles.li}>Crockery</li>
            <li className={styles.li}>Furniture</li>
            <li className={styles.li}>Homeware</li>
            <li className={styles.li}>Plant pots</li>
            <li className={styles.li}>Chairs</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Our company</h4>
          <ul className={styles.unorderlist}>
            <li className={styles.li}>About us</li>
            <li className={styles.li}>Vacancies</li>
            <li className={styles.li}>Contact us</li>
            <li className={styles.li}>Privacy</li>
            <li className={styles.li}>Returns policy</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Join our mailing list</h4>
          <div className={styles.subscribe}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.input}
            />
            <button className={styles.button}>Sign up</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright 2022 Avion LTD</p>
        <div className={styles.socials}>
          <span>🌐</span> <span>🔗</span> <span>📘</span> <span>📷</span>{' '}
          <span>📞</span> <span>🐦</span> <span>📌</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
