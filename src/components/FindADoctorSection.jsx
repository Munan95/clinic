const FindADoctorSection = () => {
  return (
    <section id='find-a-doctor' className='find-a-doctor section'>
      {/* Section Title */}
      <div className='container section-title' data-aos='fade-up'>
        <h2>Find A Doctor</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className='container' data-aos='fade-up' data-aos-delay={100}>
        <div
          className='row justify-content-center mb-5'
          data-aos='fade-up'
          data-aos-delay={200}
        >
          <div className='col-lg-8 text-center'>
            <div className='search-section'>
              <h3 className='search-title'>
                Find Your Perfect Healthcare Provider
              </h3>
              <p className='search-subtitle'>
                Search through our comprehensive directory of experienced
                medical professionals
              </p>
              <form className='search-form' action='#!' method='#'>
                <div className='search-input-group'>
                  <div className='input-wrapper'>
                    <i className='bi bi-person' />
                    <input
                      type='text'
                      className='form-control'
                      name='doctor_name'
                      placeholder='Enter doctor name'
                    />
                  </div>
                  <div className='select-wrapper'>
                    <i className='bi bi-heart-pulse' />
                    <select className='form-select' name='specialty'>
                      <option value=''>All Specialties</option>
                      <option value='cardiology'>Cardiology</option>
                      <option value='neurology'>Neurology</option>
                      <option value='orthopedics'>Orthopedics</option>
                      <option value='pediatrics'>Pediatrics</option>
                      <option value='dermatology'>Dermatology</option>
                      <option value='oncology'>Oncology</option>
                    </select>
                  </div>
                  <button type='submit' className='search-btn'>
                    <i className='bi bi-search' />
                    Find Doctors
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='doctors-grid' data-aos='fade-up' data-aos-delay={300}>
          <div
            className='doctor-profile'
            data-aos='zoom-in'
            data-aos-delay={100}
          >
            <div className='profile-header'>
              <div className='doctor-avatar'>
                <img
                  src='assets/img/health/staff-2.webp'
                  alt='Dr. Amanda Foster'
                  className='img-fluid'
                />
                <div className='status-indicator available' />
              </div>
              <div className='doctor-details'>
                <h4>Dr. Amanda Foster</h4>
                <span className='specialty-tag'>Cardiology Specialist</span>
                <div className='experience-info'>
                  <i className='bi bi-award' />
                  <span>14 years experience</span>
                </div>
              </div>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
              </div>
              <span className='rating-score'>4.9</span>
              <span className='review-count'>(127 reviews)</span>
            </div>
            <div className='action-buttons'>
              <a href='#!' className='btn-secondary'>
                View Details
              </a>
              <a href='#!' className='btn-primary'>
                Book Now
              </a>
            </div>
          </div>
          {/* End Doctor Profile */}
          <div
            className='doctor-profile'
            data-aos='zoom-in'
            data-aos-delay={200}
          >
            <div className='profile-header'>
              <div className='doctor-avatar'>
                <img
                  src='assets/img/health/staff-6.webp'
                  alt='Dr. Marcus Johnson'
                  className='img-fluid'
                />
                <div className='status-indicator busy' />
              </div>
              <div className='doctor-details'>
                <h4>Dr. Marcus Johnson</h4>
                <span className='specialty-tag'>Neurology Expert</span>
                <div className='experience-info'>
                  <i className='bi bi-award' />
                  <span>16 years experience</span>
                </div>
              </div>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-half' />
              </div>
              <span className='rating-score'>4.8</span>
              <span className='review-count'>(89 reviews)</span>
            </div>
            <div className='action-buttons'>
              <a href='#!' className='btn-secondary'>
                View Details
              </a>
              <a href='#!' className='btn-primary'>
                Schedule
              </a>
            </div>
          </div>
          {/* End Doctor Profile */}
          <div
            className='doctor-profile'
            data-aos='zoom-in'
            data-aos-delay={300}
          >
            <div className='profile-header'>
              <div className='doctor-avatar'>
                <img
                  src='assets/img/health/staff-4.webp'
                  alt='Dr. Rachel Williams'
                  className='img-fluid'
                />
                <div className='status-indicator available' />
              </div>
              <div className='doctor-details'>
                <h4>Dr. Rachel Williams</h4>
                <span className='specialty-tag'>Pediatrics Care</span>
                <div className='experience-info'>
                  <i className='bi bi-award' />
                  <span>11 years experience</span>
                </div>
              </div>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
              </div>
              <span className='rating-score'>5.0</span>
              <span className='review-count'>(203 reviews)</span>
            </div>
            <div className='action-buttons'>
              <a href='#!' className='btn-secondary'>
                View Details
              </a>
              <a href='#!' className='btn-primary'>
                Book Now
              </a>
            </div>
          </div>
          {/* End Doctor Profile */}
          <div
            className='doctor-profile'
            data-aos='zoom-in'
            data-aos-delay={400}
          >
            <div className='profile-header'>
              <div className='doctor-avatar'>
                <img
                  src='assets/img/health/staff-8.webp'
                  alt='Dr. David Chen'
                  className='img-fluid'
                />
                <div className='status-indicator offline' />
              </div>
              <div className='doctor-details'>
                <h4>Dr. David Chen</h4>
                <span className='specialty-tag'>Orthopedic Surgery</span>
                <div className='experience-info'>
                  <i className='bi bi-award' />
                  <span>22 years experience</span>
                </div>
              </div>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-half' />
              </div>
              <span className='rating-score'>4.7</span>
              <span className='review-count'>(156 reviews)</span>
            </div>
            <div className='action-buttons'>
              <a href='#!' className='btn-secondary'>
                View Details
              </a>
              <a href='#!' className='btn-primary'>
                Schedule
              </a>
            </div>
          </div>
          {/* End Doctor Profile */}
          <div
            className='doctor-profile'
            data-aos='zoom-in'
            data-aos-delay={500}
          >
            <div className='profile-header'>
              <div className='doctor-avatar'>
                <img
                  src='assets/img/health/staff-11.webp'
                  alt='Dr. Victoria Torres'
                  className='img-fluid'
                />
                <div className='status-indicator available' />
              </div>
              <div className='doctor-details'>
                <h4>Dr. Victoria Torres</h4>
                <span className='specialty-tag'>Dermatology Care</span>
                <div className='experience-info'>
                  <i className='bi bi-award' />
                  <span>9 years experience</span>
                </div>
              </div>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star' />
              </div>
              <span className='rating-score'>4.5</span>
              <span className='review-count'>(74 reviews)</span>
            </div>
            <div className='action-buttons'>
              <a href='#!' className='btn-secondary'>
                View Details
              </a>
              <a href='#!' className='btn-primary'>
                Book Now
              </a>
            </div>
          </div>
          {/* End Doctor Profile */}
          <div
            className='doctor-profile'
            data-aos='zoom-in'
            data-aos-delay={600}
          >
            <div className='profile-header'>
              <div className='doctor-avatar'>
                <img
                  src='assets/img/health/staff-14.webp'
                  alt='Dr. Benjamin Lee'
                  className='img-fluid'
                />
                <div className='status-indicator available' />
              </div>
              <div className='doctor-details'>
                <h4>Dr. Benjamin Lee</h4>
                <span className='specialty-tag'>Oncology Treatment</span>
                <div className='experience-info'>
                  <i className='bi bi-award' />
                  <span>19 years experience</span>
                </div>
              </div>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
                <i className='bi bi-star-fill' />
              </div>
              <span className='rating-score'>4.9</span>
              <span className='review-count'>(194 reviews)</span>
            </div>
            <div className='action-buttons'>
              <a href='#!' className='btn-secondary'>
                View Details
              </a>
              <a href='#!' className='btn-primary'>
                Schedule
              </a>
            </div>
          </div>
          {/* End Doctor Profile */}
        </div>
        <div
          className='text-center mt-5'
          data-aos='fade-up'
          data-aos-delay={700}
        >
          <a href='doctors.html' className='btn-view-all'>
            View All Doctors
            <i className='bi bi-arrow-right' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindADoctorSection;
