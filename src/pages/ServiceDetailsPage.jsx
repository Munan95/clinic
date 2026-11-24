import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceDetails from "../components/ServiceDetails";
import ServiceDetailsPageTitle from "../components/ServiceDetailsPageTitle";

const ServiceDetailsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <ServiceDetailsPageTitle />
        <ServiceDetails />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;