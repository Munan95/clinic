import { Link } from "react-router-dom";
import Counter from "../components/Counter";

const stats = [
  { end: 25000, label: "Patients Served" },
  { end: 25, label: "Years of Excellence" },
  { end: 50, label: "Medical Specialists" },
];

const HomeAboutSection = () => {
  return (
    <section id="home-about" className="home-about section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay={200}>
            <div className="about-content">
              <h2 className="section-heading">Compassionate Care, Advanced Medicine</h2>
              <p className="lead-text">
                For over two decades, we've been dedicated to providing
                exceptional healthcare that combines cutting-edge medical
                technology with the personal touch our patients deserve.
              </p>
              <p>
                Our multidisciplinary team of specialists works collaboratively
                to ensure every patient receives comprehensive care tailored to
                their unique needs. From preventive services to complex
                procedures, we maintain the highest standards of medical
                excellence while fostering an environment of trust and healing.
              </p>

              <div className="stats-grid">
                {stats.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <div className="stat-number">
                      <Counter end={s.end} />
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="cta-section">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
            <div className="about-visual">
              <div className="main-image">
                <img
                  src="/assets/img/health/facilities-9.webp"
                  alt="Modern medical facility"
                  className="img-fluid"
                />
              </div>
              <div className="floating-card">
                <div className="card-content">
                  <div className="icon">
                    <i className="bi bi-heart-pulse" aria-hidden="true" />
                  </div>
                  <div className="card-text">
                    <h4>24/7 Emergency Care</h4>
                    <p>Always here when you need us most</p>
                  </div>
                </div>
              </div>
              <div className="experience-badge">
                <div className="badge-content">
                  <span className="years">{stats[1].end}+</span>
                  <span className="text">Years of Trusted Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;