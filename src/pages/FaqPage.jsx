import Faq from "../components/Faq";
import FaqPageTitle from "../components/FaqPageTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FaqPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <FaqPageTitle />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default FaqPage;