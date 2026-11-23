import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailsPage from "./pages/DepartmentDetailsPage";

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
      </Routes>
    </Router>
  );
}

export default App;
