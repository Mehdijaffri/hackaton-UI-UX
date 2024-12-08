import Image from 'next/image';
import styles from '../style/ProductDetail.module.css';

const ProductDetail = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/dandy-chair.jpeg"
          alt="The Dandy Chair"
          className={styles.image}
          height={300}
          width={300}
        />
      </div>
      <div className={styles.detailsContainer}>
        <h1 className={styles.title}>The Dandy Chair</h1>
        <p className={styles.price}>£250</p>

        <div className={styles.section}>
          <h2>Description</h2>
          <p>
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul>
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Dimensions</h2>
          <div className={styles.dimensions}>
            <div>
              <strong>Height</strong>
              <p>110cm</p>
            </div>
            <div>
              <strong>Width</strong>
              <p>75cm</p>
            </div>
            <div>
              <strong>Depth</strong>
              <p>50cm</p>
            </div>
          </div>
        </div>

        <div className={styles.cartActions}>
          <label className={styles.amountLabel}>
            Amount:
            <div className={styles.amountControls}>
              <button>-</button>
              <input type="number" min="1" defaultValue="1" />
              <button>+</button>
            </div>
          </label>
          <button className={styles.addToCartButton}>Add to cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
