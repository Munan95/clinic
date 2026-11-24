import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivacyPageTitle from "../components/PrivacyPageTitle";
import Privacy from "../components/Privacy";

const PrivacyPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <PrivacyPageTitle />
        <Privacy />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default PrivacyPage;