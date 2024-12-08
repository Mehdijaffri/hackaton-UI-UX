import styles from "../style/page.module.css";
import Footer from "../component/Footer";
import JoinClubSection from "../component/JoinClubSection";
import Navbar from "../component/Navbar";
import NavigationLinks from "../component/NavigationLinks";
import BrandSection from "../component/BrandSection";
import CeramicsSection from "../component/CeramicsSection";
import HomeSection from "../component/HomeSection";
import TwoColumnSection from "../component/TwoColumnSection";
import NewsletterSection from "../component/NewsletterSection";

export default function About() {
  return (
    <div className={styles.container}>
    <Navbar />
    <NavigationLinks />
    <HomeSection />
    <BrandSection />
    <CeramicsSection />
    <JoinClubSection />
    <TwoColumnSection />
    <NewsletterSection />
    <Footer />
  </div>
  );
}