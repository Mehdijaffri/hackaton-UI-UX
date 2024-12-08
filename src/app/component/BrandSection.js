import styles from '../style/page.module.css';

export default function BrandSection() {
  const features = [
    { icon: '🚚', title: 'Next day as standard', description: 'Order before 3pm and get your order the next day as standard.' },
    { icon: '✔️', title: 'Made by true artisans', description: 'Handmade crafted goods made with real passion and craftsmanship.' },
    { icon: '💳', title: 'Unbeatable prices', description: 'For our materials and quality, you won’t find better prices anywhere.' },
    { icon: '🌱', title: 'Recycled packaging', description: 'We use 100% recycled packaging to ensure our footprint is manageable.' },
  ];

  return (
    <section className={styles.brandSection}>
      <h2>What makes our brand different</h2>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <span className={styles.icon}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
