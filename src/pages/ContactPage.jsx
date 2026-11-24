import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageTitle from "../components/ContactPageTitle";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <ContactPageTitle />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default ContactPage;