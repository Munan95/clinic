import AppointmentPageTitle from "../components/AppointmentPageTitle";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppointmentPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <AppointmentPageTitle />
        <Appointment />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default AppointmentPage;