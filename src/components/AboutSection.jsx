import Counter from "../components/Counter";

const stats = [
  { end: 15000, label: "Patients Treated" },
  { end: 25, label: "Years Experience" },
  { end: 50, label: "Medical Specialists" },
];

const values = [
  { icon: "bi-heart-pulse", title: "Compassion", text: "Providing care with empathy and understanding for every patient's unique needs and circumstances." },
  { icon: "bi-shield-check", title: "Excellence", text: "Maintaining the highest standards of medical care through continuous learning and innovation." },
  { icon: "bi-people", title: "Integrity", text: "Building trust through honest communication and ethical practices in all our interactions." },
  { icon: "bi-lightbulb", title: "Innovation", text: "Embracing cutting-edge technology and treatments to improve patient outcomes." },
];

const certifications = [
  { img: "/assets/img/clients/clients-1.webp", alt: "Accreditation logo 1" },
  { img: "/assets/img/clients/clients-2.webp", alt: "Accreditation logo 2" },
  { img: "/assets/img/clients/clients-3.webp", alt: "Accreditation logo 3" },
  { img: "/assets/img/clients/clients-4.webp", alt: "Accreditation logo 4" },
  { img: "/assets/img/clients/clients-5.webp", alt: "Accreditation logo 5" },
]; // replace each alt with the real organization name

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
            <div className="about-content">
              <h2>Compassionate Care for Every Family</h2>
              <p className="lead">
                For over two decades, we have been dedicated to providing
                exceptional healthcare services to our community. Our commitment
                goes beyond medical treatment—we believe in building lasting
                relationships with our patients and their families.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="stats-grid">
                {stats.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <span className="stat-number">
                      <Counter end={s.end} />
                    </span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
            <div className="image-wrapper">
              <img
                src="/assets/img/health/facilities-6.webp"
                className="img-fluid main-image"
                alt="Healthcare facility"
              />
              <div className="floating-image" data-aos="zoom-in" data-aos-delay={400}>
                <img
                  src="/assets/img/health/staff-8.webp"
                  className="img-fluid"
                  alt="Medical team"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="values-section" data-aos="fade-up" data-aos-delay={300}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Our Core Values</h3>
              <p className="section-description">
                These principles guide everything we do in our commitment to
                exceptional healthcare
              </p>
            </div>
          </div>
          <div className="row">
            {values.map((v, i) => (
              <div className="col-lg-3 col-md-6" key={v.title} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="value-item">
                  <div className="value-icon">
                    <i className={`bi ${v.icon}`} aria-hidden="true" />
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section" data-aos="fade-up" data-aos-delay={400}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Accreditations &amp; Certifications</h3>
              <p className="section-description">
                Recognized by leading healthcare organizations for our
                commitment to quality care
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {certifications.map((c, i) => (
              <div
                className="col-lg-2 col-md-3 col-sm-4 col-6"
                key={c.img}
                data-aos="zoom-in"
                data-aos-delay={(i + 1) * 100}
              >
                <div className="certification-item">
                  <img src={c.img} className="img-fluid" alt={c.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;