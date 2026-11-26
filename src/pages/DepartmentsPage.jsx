import Footer from "../components/Footer";
import Header from "../components/Header";
import DepartmentsTabs from "../components/DepartmentsTabs";
import Departments from "../components/Departments";


const DepartmentsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        {/* PageTitle */}
        <PageTitle
          title="Departments"
          description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                       quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                       dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                       quaerat ipsum dolorem."
        />
        <DepartmentsTabs />
        <Departments />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default DepartmentsPage;