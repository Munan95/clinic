import DepartmentDetails from "../components/DepartmentDetails";
import DepartmentDetailsPageTitle from "../components/DepartmentDetailsPageTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";


const DepartmentDetailsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <DepartmentDetailsPageTitle />
        <DepartmentDetails />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default DepartmentDetailsPage;