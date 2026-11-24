import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import ServicesPageTitle from "../components/ServicesPageTitle";

const ServicesPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <ServicesPageTitle />
        <Services />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;