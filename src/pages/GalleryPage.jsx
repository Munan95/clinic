import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryPageTitle from "../components/GalleryPageTitle";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <GalleryPageTitle />
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default GalleryPage;