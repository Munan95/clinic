import Doctors from "../components/Doctors";
import DoctorsPageTitle from "../components/DoctorsPageTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DoctorsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <DoctorsPageTitle />
        <Doctors />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DoctorsPage;
