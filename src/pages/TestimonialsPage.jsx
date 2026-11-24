import Footer from "../components/Footer";
import Header from "../components/Header";
import TestimonialsPageTitle from "../components/TestimonialsPageTitle";
import FeaturedTestimonials from "../components/FeaturedTestimonials";
import Testimonials from "../components/Testimonials";

const TestimonialsPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main className='main'>
        <TestimonialsPageTitle />
        <FeaturedTestimonials />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
};

export default TestimonialsPage;