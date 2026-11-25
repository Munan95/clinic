import { Link } from "react-router-dom";

const doctors = [
  { id: 1, name: "Dr. Marcus Johnson", specialty: "Cardiologist", dept: "Cardiology", years: 15, img: "/assets/img/health/staff-1.webp", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 2, name: "Dr. Sarah Williams", specialty: "Neurologist", dept: "Neurology", years: 12, img: "/assets/img/health/staff-2.webp", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 3, name: "Dr. Michael Chen", specialty: "Orthopedic Surgeon", dept: "Orthopedics", years: 18, img: "/assets/img/health/staff-3.webp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 4, name: "Dr. Emily Rodriguez", specialty: "Pediatrician", dept: "Pediatrics", years: 10, img: "/assets/img/health/staff-4.webp", bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 5, name: "Dr. David Thompson", specialty: "Dermatologist", dept: "Dermatology", years: 14, img: "/assets/img/health/staff-5.webp", bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  { id: 6, name: "Dr. Lisa Anderson", specialty: "Oncologist", dept: "Oncology", years: 16, img: "/assets/img/health/staff-6.webp", bio: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." },
  { id: 7, name: "Dr. Robert Martinez", specialty: "Emergency Medicine", dept: "Emergency", years: 11, img: "/assets/img/health/staff-7.webp", bio: "Explicabo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur." },
  { id: 8, name: "Dr. Jennifer Lee", specialty: "Radiologist", dept: "Radiology", years: 13, img: "/assets/img/health/staff-8.webp", bio: "Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem." },
];

const Doctors = () => {
  return (
    <section id="doctors" className="doctors section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          {doctors.map((d, i) => (
            <div
              key={d.id}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={((i % 4) + 1) * 100}
            >
              <div className="doctor-card">
                <div className="doctor-image">
                  <img src={d.img} alt={d.name} className="img-fluid" />
                  <div className="doctor-overlay">
                    <div className="social-links">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label={`${d.name} on LinkedIn`}>
                        <i className="bi bi-linkedin" aria-hidden="true" />
                      </a>
                      <a href="mailto:contact@example.com" aria-label={`Email ${d.name}`}>
                        <i className="bi bi-envelope" aria-hidden="true" />
                      </a>
                      <a href="tel:+15589554885" aria-label={`Call ${d.name}`}>
                        <i className="bi bi-phone" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="doctor-content">
                  <h4>{d.name}</h4>
                  <span className="specialty">{d.specialty}</span>
                  <p>{d.bio}</p>
                  <div className="doctor-meta">
                    <div className="experience">
                      <i className="bi bi-award" aria-hidden="true" />
                      <span>{d.years}+ Years Experience</span>
                    </div>
                    <div className="department">
                      <i className="bi bi-building" aria-hidden="true" />
                      <span>{d.dept} Dept.</span>
                    </div>
                  </div>
                  <Link to={`/appointment?doctor=${d.id}`} className="btn-appointment">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;