import Appointmnet from "../components/Appointmnet";
import AppointmnetPageTitle from "../components/AppointmnetPageTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppointmentPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <AppointmnetPageTitle />
        <Appointmnet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default AppointmentPage;