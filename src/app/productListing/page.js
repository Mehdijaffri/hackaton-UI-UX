import styles from "../style/page.module.css";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NavigationLinks from "../component/NavigationLinks";
import ProductListing from "../component/ProductListing";

export default function Product() {
  return (
    <div className={styles.container}>
    <Navbar />
    <NavigationLinks />
    <ProductListing />
    <Footer />
  </div>
  );
}