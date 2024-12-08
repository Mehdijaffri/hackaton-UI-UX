import styles from "../style/page.module.css";
import Footer from "../component/Footer";
import JoinClubSection from "../component/JoinClubSection";
import Navbar from "../component/Navbar";
import NavigationLinks from "../component/NavigationLinks";
import BrandSection from "../component/BrandSection";
import CeramicsSection from "../component/CeramicsSection";
import ProductDetail from "../component/ProductDetails";

export default function Productlistings() {
  return (
    <div className={styles.container}>
    <Navbar />
    <NavigationLinks />
    <ProductDetail />
    <CeramicsSection />
    <BrandSection />
    <JoinClubSection />
    <Footer />
  </div>
  );
}