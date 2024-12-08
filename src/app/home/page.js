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

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar />
    <NavigationLinks />
    <HeroSection />
    <BrandSection />
    <CeramicsSection />
    <PopularProducts />
    <JoinClubSection />
    <AboutSection />
    <Footer />
  </div>
  );
}