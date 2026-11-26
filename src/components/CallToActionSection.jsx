import { Link } from "react-router-dom";

const EMERGENCY_PHONE = { display: "(555) 123-4567", href: "tel:+15551234567" }; // move to a shared file

const features = [
  {
    icon: "bi-shield-check",
    title: "Advanced Technology",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: "bi-clock",
    title: "24/7 Availability",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
  },
  {
    icon: "bi-people",
    title: "Expert Team",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
  },
];

const CallToActionSection = () => {
  return (
    <section id="call-to-action" className="call-to-action section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content-wrapper" data-aos="fade-up" data-aos-delay={200}>
                <h2>Excellence in Medical Care, Every Day</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="cta-wrapper">
                  <Link to="/appointment" className="primary-cta">
                    <span>Schedule Consultation</span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                  <Link to="/services" className="secondary-cta">
                    <span>Explore Services</span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container" data-aos="fade-left" data-aos-delay={300}>
                <img
                  src="/assets/img/health/facilities-9.webp" // swap for a different photo
                  alt="Doctors and nurses in our modern clinic"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="row g-0">
            {features.map((f, i) => (
              <div className="col-lg-4" key={f.title}>
                <div className="feature-block" data-aos="fade-up" data-aos-delay={200 + i * 100}>
                  <div className="feature-icon">
                    <i className={`bi ${f.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-block">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-content" data-aos="fade-up" data-aos-delay={200}>
                <h2>Need Immediate Medical Assistance?</h2>
                <p>
                  Our emergency response team is available around the clock to
                  provide immediate medical support when you need it most.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-actions" data-aos="fade-up" data-aos-delay={300}>
                <a href={EMERGENCY_PHONE.href} className="emergency-call">
                  <i className="bi bi-telephone" aria-hidden="true" />
                  <span>{EMERGENCY_PHONE.display}</span>
                </a>
                <Link to="/contact" className="contact-link">
                  Find Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;