import styles from '../style/ProductListing.module.css';

const ProductListing = () => {
  const products =[
    {
      id: 1,
      name: 'The Dandy Chair',
      price: 250,
      image: '/dandy-chair.jpeg',
    },
    {
      id: 2,
      name: 'Rustic Vase Set',
      price: 155,
      image: '/vase1.jpeg',
    },
    {
      id: 3,
      name: 'The Silky Vase',
      price: 125,
      image: '/vase2.jpeg',
    },
    {
      id: 4,
      name: 'The Lucy Lamp',
      price: 399,
      image: '/lamp.jpeg',
    },
    {
        id: 5,
        name: 'The Dandy Chair',
        price: 250,
        image: '/dandy-chair.jpeg',
      },
      {
        id: 6,
        name: 'Rustic Vase Set',
        price: 155,
        image: '/vase1.jpeg',
      },
      {
        id: 7,
        name: 'The Silky Vase',
        price: 125,
        image: '/vase2.jpeg',
      },
      {
        id: 8,
        name: 'The Lucy Lamp',
        price: 399,
        image: '/lamp.jpeg',
      },
      {
        id: 9,
        name: 'The Dandy Chair',
        price: 250,
        image: '/dandy-chair.jpeg',
      },
      {
        id: 10,
        name: 'Rustic Vase Set',
        price: 155,
        image: '/vase1.jpeg',
      },
      {
        id: 11,
        name: 'The Silky Vase',
        price: 125,
        image: '/vase2.jpeg',
      },
      {
        id: 12,
        name: 'The Lucy Lamp',
        price: 399,
        image: '/lamp.jpeg',
      },
  ];

  return (
    <section className={styles.productSection}>
      <header className={styles.header}>
        <h1>All products</h1>
        <div className={styles.filters}>
          <select className={styles.filter}>
            <option>Category</option>
          </select>
          <select className={styles.filter}>
            <option>Product type</option>
          </select>
          <select className={styles.filter}>
            <option>Price</option>
          </select>
          <select className={styles.filter}>
            <option>Brand</option>
          </select>
          <select className={styles.filter}>
            <option>Sorting by</option>
          </select>
        </div>
      </header>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>£{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
