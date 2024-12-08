import styles from '../style/CartSection.module.css';

const CartSection = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Graystone vase',
      description: 'A timeless ceramic vase with a tri color grey glaze.',
      price: 85,
      quantity: 1,
      image: '/vase2.jpeg',
    },
    {
      id: 2,
      name: 'Basic white vase',
      description: 'Beautiful and simple, this is one for the classics.',
      price: 125,
      quantity: 1,
      image: '/plant.jpeg',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className={styles.cartContainer}>
      <h1 className={styles.heading}>Your shopping cart</h1>
      <div className={styles.cartTable}>
        <div className={styles.tableHeader}>
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartRow}>
            <div className={styles.productDetails}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div>
                <h2 className={styles.productName}>{item.name}</h2>
                <p className={styles.productDescription}>{item.description}</p>
                <p className={styles.productPrice}>£{item.price}</p>
              </div>
            </div>
            <div className={styles.quantityControls}>
              <button className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>{item.quantity}</span>
              <button className={styles.quantityButton}>+</button>
            </div>
            <div className={styles.totalPrice}>£{item.price * item.quantity}</div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <p className={styles.subtotal}>
          Subtotal <span>£{subtotal}</span>
        </p>
        <p className={styles.shippingNotice}>
          Taxes and shipping are calculated at checkout
        </p>
        <button className={styles.checkoutButton}>Go to checkout</button>
      </div>
    </section>
  );
};

export default CartSection;
