import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import PageTitle from "../components/PageTitle";

const ServicesPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        {/* PageTitle */}
        <PageTitle
          title="Services"
          description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
                    odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
                    debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
                    ipsum dolorem."
        />
        <Services />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;