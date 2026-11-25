import { Link } from "react-router-dom";

const services = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "fas fa-heartbeat",
    img: "/assets/img/health/cardiology-2.webp",
    text: "Comprehensive heart care with advanced diagnostic tools and treatment options for cardiovascular conditions.",
    features: ["ECG Testing", "Heart Surgery"],
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "fas fa-brain",
    img: "/assets/img/health/neurology-3.webp",
    text: "Expert neurological care for brain and nervous system disorders with state-of-the-art imaging technology.",
    features: ["MRI Scans", "Stroke Care"],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "fas fa-bone",
    img: "/assets/img/health/orthopedics-1.webp",
    text: "Specialized bone and joint treatment including sports medicine and reconstructive surgery procedures.",
    features: ["Joint Replacement", "Sports Medicine"],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "fas fa-child",
    img: "/assets/img/health/pediatrics-4.webp",
    text: "Dedicated healthcare for children from infancy through adolescence with specialized treatment protocols.",
    features: ["Well-Child Visits", "Immunizations"],
  },
  {
    id: "emergency",
    name: "Emergency Care",
    icon: "fas fa-ambulance",
    img: "/assets/img/health/emergency-2.webp",
    text: "24/7 emergency medical services with rapid response teams and critical care capabilities.",
    features: ["Trauma Center", "Critical Care"],
  },
  {
    id: "laboratory",
    name: "Laboratory Testing",
    icon: "fas fa-microscope",
    img: "/assets/img/health/laboratory-3.webp",
    text: "Advanced diagnostic laboratory services with comprehensive testing panels and rapid result delivery.",
    features: ["Blood Tests", "Pathology"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200 + (i % 3) * 50}
            >
              <div className="service-item">
                <div className="service-image">
                  <img src={s.img} alt={`${s.name} Services`} className="img-fluid" />
                  <div className="service-overlay">
                    <i className={s.icon} aria-hidden="true" />
                  </div>
                </div>
                <div className="service-content">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <div className="service-features">
                    {s.features.map((f) => (
                      <span className="feature-item" key={f}>
                        <i className="fas fa-check" aria-hidden="true" /> {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/service-details?service=${s.id}`}
                    className="service-btn"
                    aria-label={`Learn more about ${s.name}`}
                  >
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;