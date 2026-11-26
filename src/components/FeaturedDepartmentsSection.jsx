import { Link } from "react-router-dom";

const EMERGENCY_PHONE = { display: "(555) 123-4567", href: "tel:+15551234567" }; // move to a shared file

const featured = [
  {
    id: "cardiology",
    label: "Specialized Care",
    title: "Cardiovascular Medicine",
    linkText: "Explore Cardiology",
    text: "Advanced diagnostic imaging and interventional procedures for comprehensive heart health management with personalized treatment protocols.",
    features: ["24/7 Emergency Cardiac Care", "Minimally Invasive Procedures"],
    img: "/assets/img/health/cardiology-1.webp",
    icon: "bi-heart-pulse",
    delay: 100,
  },
  {
    id: "neurology",
    label: "Expert Care",
    title: "Neurological Sciences",
    linkText: "Explore Neurology",
    text: "Cutting-edge neuroimaging and neurosurgical expertise for complex brain and spinal cord conditions with innovative treatment approaches.",
    features: ["Advanced Brain Imaging", "Robotic Surgery"],
    img: "/assets/img/health/neurology-4.webp",
    icon: "bi-cpu",
    delay: 200,
  },
];

const highlights = [
  {
    id: "orthopedics",
    title: "Orthopedic Surgery",
    icon: "bi-shield-plus",
    text: "Comprehensive musculoskeletal care utilizing advanced arthroscopic techniques and joint replacement procedures.",
    items: ["Sports Medicine", "Joint Replacement", "Spine Surgery"],
  },
  {
    id: "pediatrics",
    title: "Pediatric Care",
    icon: "bi-people",
    text: "Child-centered healthcare services from newborn to adolescence with family-focused treatment approaches.",
    items: ["Neonatal Intensive Care", "Developmental Pediatrics", "Pediatric Surgery"],
  },
  {
    id: "oncology",
    title: "Cancer Treatment",
    icon: "bi-activity",
    text: "Multidisciplinary oncology program offering personalized cancer care with latest therapeutic innovations.",
    items: ["Precision Medicine", "Immunotherapy", "Radiation Oncology"],
  },
];

const FeaturedDepartmentsSection = () => {
  return (
    <section id="featured-departments" className="featured-departments section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Departments</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-5">
          {featured.map((d) => (
            <div className="col-lg-6" key={d.id} data-aos="zoom-in" data-aos-delay={d.delay}>
              <div className="specialty-card">
                <div className="specialty-content">
                  <div className="specialty-meta">
                    <span className="specialty-label">{d.label}</span>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <div className="specialty-features">
                    {d.features.map((f) => (
                      <span key={f}>
                        <i className="bi bi-check-circle-fill" aria-hidden="true" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link to={`/department-details?dept=${d.id}`} className="specialty-link">
                    {d.linkText} <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
                <div className="specialty-visual">
                  <img src={d.img} alt={d.title} className="img-fluid" />
                  <div className="visual-overlay">
                    <i className={`bi ${d.icon}`} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {highlights.map((d, i) => (
            <div className="col-lg-4" key={d.id} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <div className="department-highlight">
                <div className="highlight-icon">
                  <i className={`bi ${d.icon}`} aria-hidden="true" />
                </div>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
                <ul className="highlight-list">
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  to={`/department-details?dept=${d.id}`}
                  className="highlight-cta"
                  aria-label={`Learn more about ${d.title}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="emergency-banner" data-aos="fade-up" data-aos-delay={400}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="emergency-content">
                <h3>Emergency Services Available 24/7</h3>
                <p>
                  Our emergency department is equipped with state-of-the-art
                  technology and staffed by board-certified emergency physicians
                  ready to provide immediate care.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href={EMERGENCY_PHONE.href} className="emergency-btn">
                <i className="bi bi-telephone-fill" aria-hidden="true" />
                Call Emergency: {EMERGENCY_PHONE.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDepartmentsSection;