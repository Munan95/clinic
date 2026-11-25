const CallToActionSection = () => {
  return (
    <section
      id='call-to-action'
      className='call-to-action section light-background'
    >
      <div className='container' data-aos='fade-up' data-aos-delay={100}>
        <div className='hero-content'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div
                className='content-wrapper'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <h1>Excellence in Medical Care, Every Day</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className='cta-wrapper'>
                  <a href='/appointment' className='primary-cta'>
                    <span>Schedule Consultation</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                  <a href='/services' className='secondary-cta'>
                    <span>Explore Services</span>
                    <i className='bi bi-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='image-container'
                data-aos='fade-left'
                data-aos-delay={300}
              >
                <img
                  src='assets/img/health/facilities-9.webp'
                  alt='Medical Excellence'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='features-section'>
          <div className='row g-0'>
            <div className='col-lg-4'>
              <div
                className='feature-block'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <div className='feature-icon'>
                  <i className='bi bi-shield-check' />
                </div>
                <h3>Advanced Technology</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='feature-block'
                data-aos='fade-up'
                data-aos-delay={300}
              >
                <div className='feature-icon'>
                  <i className='bi bi-clock' />
                </div>
                <h3>24/7 Availability</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='feature-block'
                data-aos='fade-up'
                data-aos-delay={400}
              >
                <div className='feature-icon'>
                  <i className='bi bi-people' />
                </div>
                <h3>Expert Team</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-block'>
          <div className='row'>
            <div className='col-lg-8'>
              <div
                className='contact-content'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <h2>Need Immediate Medical Assistance?</h2>
                <p>
                  Our emergency response team is available around the clock to
                  provide immediate medical support when you need it most.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='contact-actions'
                data-aos='fade-up'
                data-aos-delay={300}
              >
                <a href='tel:5551234567' className='emergency-call'>
                  <i className='bi bi-telephone' />
                  <span>(555) 123-4567</span>
                </a>
                <a href='/contact' className='contact-link'>
                  Find Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
