import styles from "../style/page.module.css";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NavigationLinks from "../component/NavigationLinks";
import CartSection from "../component/CartSection";

export default function About() {
  return (
    <div className={styles.container}>
    <Navbar />
    <NavigationLinks />
    <CartSection />
    <Footer />
  </div>
  );
}