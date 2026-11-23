import CallToActionSection from "../components/CallToActionSection";
import FeaturedDepartmentsSection from "../components/FeaturedDepartmentsSection";
import FeaturedServicesSection from "../components/FeaturedServicesSection";
import FindADoctorSection from "../components/FindADoctorSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HomeAboutSection from "../components/HomeAboutSection";

const HomePage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        {/* HeroSection */}
        <HeroSection />

        {/* HomeAboutSection */}
        <HomeAboutSection />

        {/* FeaturedDepartmentsSection */}
        <FeaturedDepartmentsSection />

        {/* FeaturedServicesSection */}
        <FeaturedServicesSection />

        {/* FindADoctorSection */}
        <FindADoctorSection />

        {/* CallToActionSection */}
        <CallToActionSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
