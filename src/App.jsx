import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailsPage from "./pages/DepartmentDetailsPage";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import AppointmentPage from "./pages/AppointmentPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FaqPage from "./pages/FaqPage";
import GalleryPage from "./pages/GalleryPage";
import TermsPage from "./pages/TermsPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Whether animation should happen only once while scrolling down
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/departments' Component={DepartmentsPage} />
        <Route path='/department-details' Component={DepartmentDetailsPage} />
        <Route path='/services' Component={ServicesPage} />
        <Route path='/service-details' Component={ServiceDetailsPage} />
        <Route path='/doctors' Component={DoctorsPage} />
        <Route path='/appointment' Component={AppointmentPage} />
        <Route path='/testimonials' Component={TestimonialsPage} />
        <Route path='/testimonials' Component={FaqPage} />
        <Route path='/testimonials' Component={GalleryPage} />
        <Route path='/terms' Component={TermsPage} />
      </Routes>
    </Router>
  );
}

export default App;
