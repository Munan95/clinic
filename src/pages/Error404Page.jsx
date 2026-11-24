import Header from "../components/Header";
import Footer from "../components/Footer";
import Error404PageTitle from "../components/Error404PageTitle";
import Error404 from "../components/Error404";

const Error404Page = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <Error404PageTitle />
        <Error404 />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default Error404Page;