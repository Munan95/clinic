import React from "react";

const FeaturedDepartmentsSection = () => {
  return (
    <section id='featured-departments' className='featured-departments section'>
      {/* Section Title */}
      <div className='container section-title' data-aos='fade-up'>
        <h2>Featured Departments</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className='container' data-aos='fade-up' data-aos-delay={100}>
        <div className='row g-5'>
          <div className='col-lg-6' data-aos='zoom-in' data-aos-delay={100}>
            <div className='specialty-card'>
              <div className='specialty-content'>
                <div className='specialty-meta'>
                  <span className='specialty-label'>Specialized Care</span>
                </div>
                <h3>Cardiovascular Medicine</h3>
                <p>
                  Advanced diagnostic imaging and interventional procedures for
                  comprehensive heart health management with personalized
                  treatment protocols.
                </p>
                <div className='specialty-features'>
                  <span>
                    <i className='bi bi-check-circle-fill' />
                    24/7 Emergency Cardiac Care
                  </span>
                  <span>
                    <i className='bi bi-check-circle-fill' />
                    Minimally Invasive Procedures
                  </span>
                </div>
                <a href='department-details.html' className='specialty-link'>
                  Explore Cardiology <i className='bi bi-arrow-right' />
                </a>
              </div>
              <div className='specialty-visual'>
                <img
                  src='assets/img/health/cardiology-1.webp'
                  alt='Cardiovascular Medicine'
                  className='img-fluid'
                />
                <div className='visual-overlay'>
                  <i className='bi bi-heart-pulse' />
                </div>
              </div>
            </div>
          </div>
          {/* End Specialty Card */}
          <div className='col-lg-6' data-aos='zoom-in' data-aos-delay={200}>
            <div className='specialty-card'>
              <div className='specialty-content'>
                <div className='specialty-meta'>
                  <span className='specialty-label'>Expert Care</span>
                </div>
                <h3>Neurological Sciences</h3>
                <p>
                  Cutting-edge neuroimaging and neurosurgical expertise for
                  complex brain and spinal cord conditions with innovative
                  treatment approaches.
                </p>
                <div className='specialty-features'>
                  <span>
                    <i className='bi bi-check-circle-fill' />
                    Advanced Brain Imaging
                  </span>
                  <span>
                    <i className='bi bi-check-circle-fill' />
                    Robotic Surgery
                  </span>
                </div>
                <a href='department-details.html' className='specialty-link'>
                  Explore Neurology <i className='bi bi-arrow-right' />
                </a>
              </div>
              <div className='specialty-visual'>
                <img
                  src='assets/img/health/neurology-4.webp'
                  alt='Neurological Sciences'
                  className='img-fluid'
                />
                <div className='visual-overlay'>
                  <i className='bi bi-cpu' />
                </div>
              </div>
            </div>
          </div>
          {/* End Specialty Card */}
          <div className='col-lg-4' data-aos='fade-up' data-aos-delay={100}>
            <div className='department-highlight'>
              <div className='highlight-icon'>
                <i className='bi bi-shield-plus' />
              </div>
              <h4>Orthopedic Surgery</h4>
              <p>
                Comprehensive musculoskeletal care utilizing advanced
                arthroscopic techniques and joint replacement procedures.
              </p>
              <ul className='highlight-list'>
                <li>Sports Medicine</li>
                <li>Joint Replacement</li>
                <li>Spine Surgery</li>
              </ul>
              <a href='department-details.html' className='highlight-cta'>
                Learn More
              </a>
            </div>
          </div>
          {/* End Department Highlight */}
          <div className='col-lg-4' data-aos='fade-up' data-aos-delay={200}>
            <div className='department-highlight'>
              <div className='highlight-icon'>
                <i className='bi bi-people' />
              </div>
              <h4>Pediatric Care</h4>
              <p>
                Child-centered healthcare services from newborn to adolescence
                with family-focused treatment approaches.
              </p>
              <ul className='highlight-list'>
                <li>Neonatal Intensive Care</li>
                <li>Developmental Pediatrics</li>
                <li>Pediatric Surgery</li>
              </ul>
              <a href='department-details.html' className='highlight-cta'>
                Learn More
              </a>
            </div>
          </div>
          {/* End Department Highlight */}
          <div className='col-lg-4' data-aos='fade-up' data-aos-delay={300}>
            <div className='department-highlight'>
              <div className='highlight-icon'>
                <i className='bi bi-activity' />
              </div>
              <h4>Cancer Treatment</h4>
              <p>
                Multidisciplinary oncology program offering personalized cancer
                care with latest therapeutic innovations.
              </p>
              <ul className='highlight-list'>
                <li>Precision Medicine</li>
                <li>Immunotherapy</li>
                <li>Radiation Oncology</li>
              </ul>
              <a href='department-details.html' className='highlight-cta'>
                Learn More
              </a>
            </div>
          </div>
          {/* End Department Highlight */}
        </div>
        <div
          className='emergency-banner'
          data-aos='fade-up'
          data-aos-delay={400}
        >
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <div className='emergency-content'>
                <h3>Emergency Services Available 24/7</h3>
                <p>
                  Our emergency department is equipped with state-of-the-art
                  technology and staffed by board-certified emergency physicians
                  ready to provide immediate care.
                </p>
              </div>
            </div>
            <div className='col-lg-4 text-lg-end'>
              <a href='tel:+15551234567' className='emergency-btn'>
                <i className='bi bi-telephone-fill' />
                Call Emergency: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDepartmentsSection;
