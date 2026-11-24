import Header from "../components/Header";
import Footer from "../components/Footer";
import TermsPageTitle from "../components/TermsPageTitle";
import Terms from "../components/Terms";

const TermsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <TermsPageTitle />
        <Terms />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default TermsPage;