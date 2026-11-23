const Departments = () => {
    return (
        <section id="departments" className="departments section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row g-5">
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div className="department-card">
                            <div className="department-icon">
                                <i className="fas fa-heartbeat" />
                            </div>
                            <div className="department-image">
                                <img
                                    src="assets/img/health/cardiology-3.webp"
                                    alt="Cardiology Department"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="department-content">
                                <h3>Cardiology</h3>
                                <p>
                                    Comprehensive heart care with advanced diagnostic tools and expert
                                    cardiologists dedicated to your cardiovascular health.
                                </p>
                                <a href="#!" className="learn-more">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Department Card */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        <div className="department-card">
                            <div className="department-icon">
                                <i className="fas fa-brain" />
                            </div>
                            <div className="department-image">
                                <img
                                    src="assets/img/health/neurology-2.webp"
                                    alt="Neurology Department"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="department-content">
                                <h3>Neurology</h3>
                                <p>
                                    Advanced treatment for neurological disorders with cutting-edge
                                    technology and specialized neurological care teams.
                                </p>
                                <a href="#!" className="learn-more">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Department Card */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={300}
                    >
                        <div className="department-card">
                            <div className="department-icon">
                                <i className="fas fa-bone" />
                            </div>
                            <div className="department-image">
                                <img
                                    src="assets/img/health/orthopedics-4.webp"
                                    alt="Orthopedics Department"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="department-content">
                                <h3>Orthopedics</h3>
                                <p>
                                    Expert bone and joint care offering comprehensive treatment from
                                    sports injuries to complex reconstructive surgery.
                                </p>
                                <a href="#!" className="learn-more">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Department Card */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div className="department-card">
                            <div className="department-icon">
                                <i className="fas fa-child" />
                            </div>
                            <div className="department-image">
                                <img
                                    src="assets/img/health/pediatrics-3.webp"
                                    alt="Pediatrics Department"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="department-content">
                                <h3>Pediatrics</h3>
                                <p>
                                    Specialized medical care for infants, children, and adolescents
                                    with compassionate pediatric specialists.
                                </p>
                                <a href="#!" className="learn-more">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Department Card */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        <div className="department-card">
                            <div className="department-icon">
                                <i className="fas fa-hand-holding-medical" />
                            </div>
                            <div className="department-image">
                                <img
                                    src="assets/img/health/dermatology-4.webp"
                                    alt="Dermatology Department"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="department-content">
                                <h3>Dermatology</h3>
                                <p>
                                    Complete skin care services from medical dermatology to cosmetic
                                    procedures for healthy, beautiful skin.
                                </p>
                                <a href="#!" className="learn-more">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Department Card */}
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay={300}
                    >
                        <div className="department-card">
                            <div className="department-icon">
                                <i className="fas fa-ribbon" />
                            </div>
                            <div className="department-image">
                                <img
                                    src="assets/img/health/oncology-2.webp"
                                    alt="Oncology Department"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="department-content">
                                <h3>Oncology</h3>
                                <p>
                                    Comprehensive cancer care with multidisciplinary approach and
                                    latest treatment options for all cancer types.
                                </p>
                                <a href="#!" className="learn-more">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Department Card */}
                </div>
            </div>
        </section>
    )
};

export default Departments;