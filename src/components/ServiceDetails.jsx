import { Link, useSearchParams } from "react-router-dom";

const EMERGENCY_PHONE = { display: "+1 (555) 123-4567", href: "tel:+15551234567" };

const services = {
  neurology: {
    category: "Advanced Neurology",
    title: "Comprehensive Neurological Care Services",
    lead: "Expert diagnosis and treatment for complex neurological conditions using state-of-the-art technology",
    img: "/assets/img/health/neurology-2.webp",
    details: [
      { icon: "bi-activity", title: "Neurological Assessment", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam." },
      { icon: "bi-diagram-2", title: "Brain Imaging & Diagnosis", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti." },
      { icon: "bi-prescription2", title: "Treatment Planning", text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim laborum." },
    ],
    stats: [
      { number: "95%", label: "Success Rate" }, // verify or remove
      { number: "24/7", label: "Emergency Care" },
    ],
    whyTitle: "Why Choose Our Neurology Department",
    whyText: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      { icon: "bi-award", text: "Board Certified Specialists" },
      { icon: "bi-clock-history", text: "Same Day Appointments" },
      { icon: "bi-shield-plus", text: "Advanced Treatment Options" },
      { icon: "bi-heart-pulse", text: "Patient-Centered Care" },
    ],
    conditions: [
      "Stroke Recovery", "Epilepsy Management", "Memory Disorders", "Headache Disorders",
      "Movement Disorders", "Peripheral Neuropathy", "Multiple Sclerosis", "Parkinson's Disease",
    ],
  },
};

const ServiceDetails = () => {
  const [params] = useSearchParams();
  const id = params.get("service") ?? "neurology";
  const s = services[id];

  if (!s) {
    return (
      <section id="service-details-2" className="service-details-2 section">
        <div className="container text-center">
          <h2>Service not found</h2>
          <Link to="/services" className="btn-action">View all services</Link>
        </div>
      </section>
    );
  }

  const actions = [
    {
      type: "primary",
      icon: "bi-calendar-check",
      title: "Schedule Consultation",
      text: "Book your evaluation with our expert team",
      cta: <Link to={`/appointment?service=${id}`} className="btn-action">Book Now</Link>,
      note: "Next available: Tomorrow", // replace with real data
    },
    {
      type: "secondary",
      icon: "bi-telephone",
      title: "Emergency Consultation",
      text: "24/7 emergency support and rapid response",
      cta: <a href={EMERGENCY_PHONE.href} className="btn-action">Call Now</a>,
      note: EMERGENCY_PHONE.display,
    },
    {
      type: "tertiary",
      icon: "bi-file-text",
      title: "Get Second Opinion",
      text: "Expert review of existing diagnoses and treatment plans",
      cta: <Link to="/contact" className="btn-action">Request Review</Link>,
      note: "Response within 48h", // replace with real data
    },
  ];

  return (
    <section id="service-details-2" className="service-details-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5" data-aos="fade-up" data-aos-delay={150}>
            <div className="service-header">
              <div className="service-category">
                <span>{s.category}</span>
              </div>
              <h2>{s.title}</h2>
              <p className="lead">{s.lead}</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 align-items-center">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay={200}>
            <div className="service-details">
              {s.details.map((d) => (
                <div className="detail-item" key={d.title}>
                  <div className="icon-wrapper">
                    <i className={`bi ${d.icon}`} aria-hidden="true" />
                  </div>
                  <div className="content">
                    <h4>{d.title}</h4>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay={300}>
            <div className="service-visual">
              <img src={s.img} alt={`${s.category} services`} className="img-fluid" />
              <div className="visual-overlay">
                <div className="stats-card">
                  {s.stats.map((st) => (
                    <div className="stat" key={st.label}>
                      <span className="number">{st.number}</span>
                      <span className="label">{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="service-overview">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3>{s.whyTitle}</h3>
                  <p>{s.whyText}</p>
                  <div className="features-grid">
                    {s.features.map((f) => (
                      <div className="feature" key={f.text}>
                        <i className={`bi ${f.icon}`} aria-hidden="true" />
                        <span>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="treatment-areas">
                    <h4>Conditions We Treat</h4>
                    <div className="condition-tags">
                      {s.conditions.map((c) => (
                        <span className="tag" key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-5">
          {actions.map((a, i) => (
            <div className="col-lg-4" key={a.title} data-aos="zoom-in" data-aos-delay={(i + 1) * 100}>
              <div className={`action-card ${a.type}`}>
                <div className="card-header">
                  <i className={`bi ${a.icon}`} aria-hidden="true" />
                  <h4>{a.title}</h4>
                </div>
                <p>{a.text}</p>
                <div className="card-footer">
                  {a.cta}
                  <span className="availability">{a.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;