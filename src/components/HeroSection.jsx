import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Counter = ({ end, duration = 1000 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return <span>{value.toLocaleString()}</span>;
};

const badges = [
  { icon: "bi-shield-check", label: "Accredited" },
  { icon: "bi-clock", label: "24/7 Emergency" },
  { icon: "bi-star-fill", label: "4.9/5 Rating" },
];

const stats = [
  { end: 15, label: "Years Experience" },
  { end: 5000, label: "Patients Treated" },
  { end: 50, label: "Medical Experts" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="trust-badges mb-4" data-aos="fade-right" data-aos-delay={200}>
                {badges.map((b) => (
                  <div className="badge-item" key={b.label}>
                    <i className={`bi ${b.icon}`} aria-hidden="true" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>

              <h1 data-aos="fade-right" data-aos-delay={300}>
                Excellence in <span className="highlight">Healthcare</span> With
                Compassionate Care
              </h1>

              <p className="hero-description" data-aos="fade-right" data-aos-delay={400}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="hero-stats mb-4" data-aos="fade-right" data-aos-delay={500}>
                {stats.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <h3>
                      <Counter end={s.end} />+
                    </h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="hero-actions" data-aos="fade-right" data-aos-delay={600}>
                <Link to="/appointment" className="btn btn-primary">
                  Book Appointment
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-play-circle me-2" aria-hidden="true" />
                  Watch Our Story
                </a>
              </div>

              <div className="emergency-contact" data-aos="fade-right" data-aos-delay={700}>
                <div className="emergency-icon">
                  <i className="bi bi-telephone-fill" aria-hidden="true" />
                </div>
                <div className="emergency-info">
                  <small>Emergency Hotline</small>
                  <strong>
                    <a href="tel:+15559112468">+1 (555) 911-2468</a>
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual" data-aos="fade-left" data-aos-delay={400}>
              <div className="main-image">
                <img
                  src="/assets/img/health/staff-10.webp"
                  alt="Our medical team"
                  className="img-fluid"
                  fetchPriority="high"
                />

                <div className="floating-card appointment-card">
                  <div className="card-icon">
                    <i className="bi bi-calendar-check" aria-hidden="true" />
                  </div>
                  <div className="card-content">
                    <h6>Next Available</h6>
                    <p>Today 2:30 PM</p>
                    <small>Dr. Sarah Johnson</small>
                  </div>
                </div>

                <div className="floating-card rating-card">
                  <div className="card-content">
                    <div className="rating-stars" role="img" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <i key={n} className="bi bi-star-fill" aria-hidden="true" />
                      ))}
                    </div>
                    <h6>4.9/5</h6>
                    <small>1,234 Reviews</small>
                  </div>
                </div>
              </div>

              <div className="background-elements" aria-hidden="true">
                <div className="element element-1" />
                <div className="element element-2" />
                <div className="element element-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;