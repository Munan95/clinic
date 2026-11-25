const HomeAboutSection = () => {
  return (
    <section id='home-about' className='home-about section'>
      <div className='container' data-aos='fade-up' data-aos-delay={100}>
        <div className='row align-items-center'>
          <div
            className='col-lg-6 mb-5 mb-lg-0'
            data-aos='fade-right'
            data-aos-delay={200}
          >
            <div className='about-content'>
              <h2 className='section-heading'>
                Compassionate Care, Advanced Medicine
              </h2>
              <p className='lead-text'>
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
              <div className='stats-grid'>
                <div className='stat-item'>
                  <div className='stat-number purecounter'>25000</div>
                  <div className='stat-label'>Patients Served</div>
                </div>
                <div className='stat-item'>
                  <div className='stat-number purecounter'>25</div>
                  <div className='stat-label'>Years of Excellence</div>
                </div>
                <div className='stat-item'>
                  <div className='stat-number purecounter'>50</div>
                  <div className='stat-label'>Medical Specialists</div>
                </div>
              </div>
              <div className='cta-section'>
                <a href='/about' className='btn-primary'>
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6' data-aos='fade-left' data-aos-delay={300}>
            <div className='about-visual'>
              <div className='main-image'>
                <img
                  src='assets/img/health/facilities-9.webp'
                  alt='Modern medical facility'
                  className='img-fluid'
                />
              </div>
              <div className='floating-card'>
                <div className='card-content'>
                  <div className='icon'>
                    <i className='bi bi-heart-pulse' />
                  </div>
                  <div className='card-text'>
                    <h4>24/7 Emergency Care</h4>
                    <p>Always here when you need us most</p>
                  </div>
                </div>
              </div>
              <div className='experience-badge'>
                <div className='badge-content'>
                  <span className='years'>25+</span>
                  <span className='text'>Years of Trusted Care</span>
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
