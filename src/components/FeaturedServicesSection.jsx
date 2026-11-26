import { Link } from "react-router-dom";

const sidebar = [
  {
    id: "dermatology",
    icon: "bi-capsule",
    title: "Dermatology Clinic",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: "surgery",
    icon: "bi-bandaid",
    title: "Surgery Center",
    text: "Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan id imperdiet et porttitor at sem.",
  },
  {
    id: "diagnostics",
    icon: "bi-activity",
    title: "Diagnostics Lab",
    text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui cras ultricies ligula sed magna.",
  },
];

const specialties = [
  { title: "Maternal Care", text: "Expert pregnancy & delivery support", img: "/assets/img/health/maternal-2.webp" },
  { title: "Vaccination", text: "Complete immunization programs", img: "/assets/img/health/vaccination-3.webp" },
  { title: "Emergency Care", text: "24/7 critical care services", img: "/assets/img/health/emergency-1.webp" },
  { title: "Advanced Technology", text: "State-of-the-art medical equipment", img: "/assets/img/health/facilities-6.webp" },
];

const FeaturedServicesSection = () => {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-0">
          <div className="col-lg-8" data-aos="fade-right" data-aos-delay={200}>
            <div className="featured-service-main">
              <div className="service-image-wrapper">
                <img
                  src="/assets/img/health/consultation-4.webp"
                  alt="Premier Healthcare Services"
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="service-overlay">
                  <div className="service-badge">
                    <i className="bi bi-heart-pulse" aria-hidden="true" />
                    <span>Emergency Care</span>
                  </div>
                </div>
              </div>
              <div className="service-details">
                <h2>Comprehensive Healthcare Excellence</h2>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae donec velit neque.
                </p>
                <Link to="/services" className="main-cta">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-left" data-aos-delay={300}>
            <div className="services-sidebar">
              {sidebar.map((s, i) => (
                <div className="service-item" key={s.id} data-aos="fade-up" data-aos-delay={400 + i * 100}>
                  <div className="service-icon-wrapper">
                    <i className={`bi ${s.icon}`} aria-hidden="true" />
                  </div>
                  <div className="service-info">
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                    <Link
                      to={`/service-details?service=${s.id}`}
                      className="service-link"
                      aria-label={`Learn more about ${s.title}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="specialties-grid" data-aos="fade-up" data-aos-delay={300}>
          <div className="row align-items-center">
            {specialties.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.title}>
                <div className="specialty-card">
                  <div className="specialty-image">
                    <img src={s.img} alt="" className="img-fluid" loading="lazy" />
                  </div>
                  <div className="specialty-content">
                    <h5>{s.title}</h5>
                    <span>{s.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;