import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      id='header'
      className={`header fixed-top ${isScrolled ? "bg-white" : ""}`}
    >
      <div className='topbar d-flex align-items-center dark-background'>
        <div className='container d-flex justify-content-center justify-content-md-between'>
          <div className='contact-info d-flex align-items-center'>
            <i className='bi bi-envelope d-flex align-items-center'>
              <a href='mailto:contact@example.com'>contact@example.com</a>
            </i>
            <i className='bi bi-phone d-flex align-items-center ms-4'>
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div className='social-links d-none d-md-flex align-items-center'>
            <a href='#!' className='twitter'>
              <i className='bi bi-twitter-x' />
            </a>
            <a href='#!' className='facebook'>
              <i className='bi bi-facebook' />
            </a>
            <a href='#!' className='instagram'>
              <i className='bi bi-instagram' />
            </a>
            <a href='#!' className='linkedin'>
              <i className='bi bi-linkedin' />
            </a>
          </div>
        </div>
      </div>
      {/* End Top Bar */}
      <div className='branding d-flex align-items-cente'>
        <div className='container position-relative d-flex align-items-center justify-content-between'>
          <Link to='/' className='logo d-flex align-items-center'>
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.webp" alt=""> */}
            <h1 className='sitename'>Clinic</h1>
          </Link>
          <nav id='navmenu' className='navmenu'>
            <ul>
              <li>
                <Link to='/' className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/departments'>Departments</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/doctors'>Doctors</Link>
              </li>
              <li className='dropdown'>
                <a href='#'>
                  <span>More Pages</span>{" "}
                  <i className='bi bi-chevron-down toggle-dropdown' />
                </a>
                <ul>
                  <li>
                    <Link to='/department-details'>Department Details</Link>
                  </li>
                  <li>
                    <Link to='/service-details'>Service Details</Link>
                  </li>
                  <li>
                    <Link to='/appointment'>Appointment</Link>
                  </li>
                  <li>
                    <Link to='/testimonials'>Testimonials</Link>
                  </li>
                  <li>
                    <a href='faq.html'>Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href='gallery.html'>Gallery</a>
                  </li>
                  <li>
                    <a href='terms.html'>Terms</a>
                  </li>
                  <li>
                    <a href='privacy.html'>Privacy</a>
                  </li>
                  <li>
                    <a href='404.html'>404</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='#'>
                  <span>Dropdown</span>{" "}
                  <i className='bi bi-chevron-down toggle-dropdown' />
                </a>
                <ul>
                  <li>
                    <a href='#'>Dropdown 1</a>
                  </li>
                  <li className='dropdown'>
                    <a href='#'>
                      <span>Deep Dropdown</span>{" "}
                      <i className='bi bi-chevron-down toggle-dropdown' />
                    </a>
                    <ul>
                      <li>
                        <a href='#'>Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href='#'>Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href='#'>Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href='#'>Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href='#'>Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>Dropdown 2</a>
                  </li>
                  <li>
                    <a href='#'>Dropdown 3</a>
                  </li>
                  <li>
                    <a href='#'>Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
            <i className='mobile-nav-toggle d-xl-none bi bi-list' />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
