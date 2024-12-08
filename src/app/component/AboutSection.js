import styles from '../style/AboutSection.module.css';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>From a studio in London to a global brand with over 400 outlets</h1>
        <p className={styles.para}>
          When we started Avion, the idea was simple. Make high quality furniture
          affordable and available for the mass market.
        </p>
        <p className={styles.para}>
          Handmade, and lovingly crafted furniture and homewares is what we live,
          breathe and design so our Chelsea boutique becomes the hotbed for the
          London interior design community.
        </p>
        <button className={styles.button}>Get in touch</button>
      </div>
      <div className={styles.imageContainer}>
      </div>
    </div>
  );
};

export default AboutSection;