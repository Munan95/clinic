import { Link } from "react-router-dom";

const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "fas fa-heartbeat",
    img: "/assets/img/health/cardiology-3.webp",
    text: "Comprehensive heart care with advanced diagnostic tools and expert cardiologists dedicated to your cardiovascular health.",
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "fas fa-brain",
    img: "/assets/img/health/neurology-2.webp",
    text: "Advanced treatment for neurological disorders with cutting-edge technology and specialized neurological care teams.",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "fas fa-bone",
    img: "/assets/img/health/orthopedics-4.webp",
    text: "Expert bone and joint care offering comprehensive treatment from sports injuries to complex reconstructive surgery.",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "fas fa-child",
    img: "/assets/img/health/pediatrics-3.webp",
    text: "Specialized medical care for infants, children, and adolescents with compassionate pediatric specialists.",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "fas fa-hand-holding-medical",
    img: "/assets/img/health/dermatology-4.webp",
    text: "Complete skin care services from medical dermatology to cosmetic procedures for healthy, beautiful skin.",
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: "fas fa-ribbon",
    img: "/assets/img/health/oncology-2.webp",
    text: "Comprehensive cancer care with multidisciplinary approach and latest treatment options for all cancer types.",
  },
];

const Departments = () => {
  return (
    <section id="departments" className="departments section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-5">
          {departments.map((d, i) => (
            <div
              key={d.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={((i % 3) + 1) * 100}
            >
              <div className="department-card">
                <div className="department-icon">
                  <i className={d.icon} aria-hidden="true" />
                </div>
                <div className="department-image">
                  <img src={d.img} alt={`${d.name} Department`} className="img-fluid" />
                </div>
                <div className="department-content">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                  <Link
                    to={`/department-details?dept=${d.id}`}
                    className="learn-more"
                    aria-label={`Learn more about ${d.name}`}
                  >
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right" aria-hidden="true" />
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

export default Departments;