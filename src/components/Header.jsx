import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const mainLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/departments", label: "Departments" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
];

const moreLinks = [
  { to: "/department-details", label: "Department Details" },
  { to: "/service-details", label: "Service Details" },
  { to: "/appointment", label: "Appointment" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "Frequently Asked Questions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
];

const socials = [
  { href: "https://x.com", name: "twitter", icon: "bi-twitter-x" },
  { href: "https://www.facebook.com", name: "facebook", icon: "bi-facebook" },
  { href: "https://www.instagram.com", name: "instagram", icon: "bi-instagram" },
  { href: "https://www.linkedin.com", name: "linkedin", icon: "bi-linkedin" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    handleScroll(); // set the correct state on first render
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The template CSS looks for this class on <body>
  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", mobileOpen);
    return () => document.body.classList.remove("mobile-nav-active");
  }, [mobileOpen]);

  // Close menus after navigating
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  return (
    <header id="header" className={`header fixed-top ${isScrolled ? "bg-white" : ""}`}>
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span><a href="tel:+1 5589 55488 55">+1 5589 55488 55</a></span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {socials.map(({ href, name, icon }) => (
              <a key={name} href={href} className={name} aria-label={name} target="_blank" rel="noopener noreferrer"> 
                <i className={`bi ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1 className="sitename">Clinic</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              {mainLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end}>{label}</NavLink>
                </li>
              ))}

              <li className="dropdown">
                <Link
                  to="#"
                  aria-expanded={moreOpen}
                  className={moreOpen ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setMoreOpen((open) => !open);
                  }}
                >
                  <span>More Pages</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </Link>
                <ul className={moreOpen ? "dropdown-active" : ""}>
                  {moreLinks.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink to={to}>{label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            <i
              className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? "bi-x" : "bi-list"}`}
              onClick={() => setMobileOpen((open) => !open)}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;