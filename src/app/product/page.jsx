import styles from "../style/page.module.css";
import AboutSection from "../component/AboutSection";
import Footer from "../component/Footer";
import JoinClubSection from "../component/JoinClubSection";
import Navbar from "../component/Navbar";
import NavigationLinks from "../component/NavigationLinks";
import HeroSection from "../component/HeroSection";
import BrandSection from "../component/BrandSection";
import CeramicsSection from "../component/CeramicsSection";
import PopularProducts from "../component/PopularProducts";
import HomeSection from "../component/HomeSection";
import TwoColumnSection from "../component/TwoColumnSection";
import NewsletterSection from "../component/NewsletterSection";
import ProductDetail from "../component/ProductDetails";
import CartSection from "../component/CartSection";
import ProductListing from "../component/ProductListing";

export default function ProductDetails() {
  return (
    <div className={styles.container}>
    <Navbar />
    <NavigationLinks />
    <TwoColumnSection />
    <AboutSection />
    <BrandSection />
    {/* <CartSection />
    <ProductDetail />
    <ProductListing />
    <HomeSection />
    <HeroSection />
    <CeramicsSection />
    <PopularProducts /> */}
    <JoinClubSection />
    {/* <NewsletterSection /> */}
    <Footer />
  </div>
  );
}