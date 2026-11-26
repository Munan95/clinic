import { Link, useSearchParams } from "react-router-dom";

const departments = {
  neurology: {
    badge: "Neurology",
    title: "Advanced Neurological Care",
    intro:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    highlights: [
      { number: "24/7", text: "Emergency Neurology" },
      { number: "15+", text: "Specialist Neurologists" },
      { number: "95%", text: "Patient Satisfaction" },
    ],
    heroImg: "/assets/img/health/neurology-2.webp",
    card: {
      icon: "bi-activity",
      title: "Brain Health Experts",
      text: "Comprehensive neurological assessment and treatment",
    },
    servicesTitle: "Our Neurological Services",
    servicesIntro:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    services: [
      { icon: "bi-lightning-charge", name: "Epilepsy Treatment", text: "Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta." },
      { icon: "bi-search", name: "Diagnostic Imaging", text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis." },
      { icon: "bi-heart-pulse", name: "Stroke Prevention", text: "Donec sollicitudin molestie malesuada. Proin eget tortor risus cras ultricies ligula." },
      { icon: "bi-person-gear", name: "Movement Disorders", text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui." },
      { icon: "bi-moon", name: "Sleep Disorders", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor." },
      { icon: "bi-shield-check", name: "Memory Care", text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a vestibulum ac diam." },
    ],
    expertTitle: "Leading Neurological Expertise",
    expertLead:
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh donec rutrum congue leo eget malesuada.",
    expertImg: "/assets/img/health/neurology-4.webp",
    expertise: [
      "Board-certified neurologists and neurosurgeons",
      "State-of-the-art diagnostic equipment and facilities",
      "Comprehensive care from diagnosis to rehabilitation",
      "Personalized treatment plans for every patient",
    ],
    emergency: { label: "Emergency Neurology", display: "+1 (555) 234-5678", href: "tel:+15552345678" },
    hours: "Mon - Fri, 8:00 AM - 6:00 PM",
  },
};

const DepartmentDetails = () => {
  const [params] = useSearchParams();
  const id = params.get("dept") ?? "neurology";
  const d = departments[id];

  if (!d) {
    return (
      <section id="department-details" className="department-details section">
        <div className="container text-center">
          <h2>Department not found</h2>
          <Link to="/departments" className="btn-primary">View all departments</Link>
        </div>
      </section>
    );
  }

  return (
    <section id="department-details" className="department-details section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="department-hero" data-aos="fade-right" data-aos-delay={200}>
              <div className="badge-wrap">
                <span className="specialty-badge">{d.badge}</span>
              </div>
              <h2 className="department-title">{d.title}</h2>
              <p className="department-intro">{d.intro}</p>

              <div className="key-highlights">
                {d.highlights.map((h) => (
                  <div className="highlight-item" key={h.text}>
                    <span className="highlight-number">{h.number}</span>
                    <span className="highlight-text">{h.text}</span>
                  </div>
                ))}
              </div>

              <div className="action-group">
                <Link to={`/appointment?dept=${id}`} className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link to="/services" className="btn-secondary">
                  <span>View All Services</span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-5">
            <div className="department-visual" data-aos="fade-left" data-aos-delay={300}>
              <div className="image-container">
                <img src={d.heroImg} alt={`${d.badge} Department`} className="img-fluid primary-image" />
                <div className="floating-card" data-aos="zoom-in" data-aos-delay={500}>
                  <div className="card-icon">
                    <i className={`bi ${d.card.icon}`} aria-hidden="true" />
                  </div>
                  <div className="card-content">
                    <h4>{d.card.title}</h4>
                    <p>{d.card.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-overview" data-aos="fade-up" data-aos-delay={200}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="overview-header">
                <h3>{d.servicesTitle}</h3>
                <p>{d.servicesIntro}</p>
              </div>
            </div>
          </div>
          <div className="row gy-4 services-grid">
            {d.services.map((s, i) => (
              <div className="col-lg-4 col-md-6" key={s.name} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="service-item">
                  <div className="service-icon">
                    <i className={`bi ${s.icon}`} aria-hidden="true" />
                  </div>
                  <h4>{s.name}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="expert-care-section" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="expert-image">
                <img src={d.expertImg} alt={`${d.badge} specialist`} className="img-fluid" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="expert-content">
                <h3>{d.expertTitle}</h3>
                <p className="lead">{d.expertLead}</p>

                <div className="expertise-list">
                  {d.expertise.map((e) => (
                    <div className="expertise-item" key={e}>
                      <i className="bi bi-check2" aria-hidden="true" />
                      <span>{e}</span>
                    </div>
                  ))}
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-telephone" aria-hidden="true" />
                    <div>
                      <span className="contact-label">{d.emergency.label}</span>
                      <a href={d.emergency.href} className="contact-value">{d.emergency.display}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-calendar-check" aria-hidden="true" />
                    <div>
                      <span className="contact-label">Appointments</span>
                      <span className="contact-value">{d.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetails;