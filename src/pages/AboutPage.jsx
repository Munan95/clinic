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
        <PageTitle
          title="About"
          description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem."
        />

        {/* AboutSection */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutPage;