import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        {/* PageTitle */}
        <PageTitle />

        {/* AboutSection */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutPage;
