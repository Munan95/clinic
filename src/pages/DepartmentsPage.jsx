import Footer from "../components/Footer";
import Header from "../components/Header";
import DepartmentsPageTitle from "../components/DepartmentsPageTitle";
import DepartmentsTabs from "../components/DepartmentsTabs";
import Departments from "../components/Departments";


const DepartmentsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <DepartmentsPageTitle />
        <DepartmentsTabs />
        <Departments />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default DepartmentsPage;