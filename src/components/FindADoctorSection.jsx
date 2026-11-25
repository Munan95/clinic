import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const specialties = [
  { value: "cardiology", label: "Cardiology" },
  { value: "neurology", label: "Neurology" },
  { value: "orthopedics", label: "Orthopedics" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "dermatology", label: "Dermatology" },
  { value: "oncology", label: "Oncology" },
];

const doctors = [
  { id: 1, name: "Dr. Amanda Foster", specialty: "cardiology", tag: "Cardiology Specialist", years: 14, rating: 4.9, reviews: 127, status: "available", img: "/assets/img/health/staff-2.webp" },
  { id: 2, name: "Dr. Marcus Johnson", specialty: "neurology", tag: "Neurology Expert", years: 16, rating: 4.8, reviews: 89, status: "busy", img: "/assets/img/health/staff-6.webp" },
  { id: 3, name: "Dr. Rachel Williams", specialty: "pediatrics", tag: "Pediatrics Care", years: 11, rating: 5.0, reviews: 203, status: "available", img: "/assets/img/health/staff-4.webp" },
  { id: 4, name: "Dr. David Chen", specialty: "orthopedics", tag: "Orthopedic Surgery", years: 22, rating: 4.7, reviews: 156, status: "offline", img: "/assets/img/health/staff-8.webp" },
  { id: 5, name: "Dr. Victoria Torres", specialty: "dermatology", tag: "Dermatology Care", years: 9, rating: 4.5, reviews: 74, status: "available", img: "/assets/img/health/staff-11.webp" },
  { id: 6, name: "Dr. Benjamin Lee", specialty: "oncology", tag: "Oncology Treatment", years: 19, rating: 4.9, reviews: 194, status: "available", img: "/assets/img/health/staff-14.webp" },
];

const Stars = ({ rating }) => {
  const rounded = Math.round(rating * 2) / 2; // nearest half star
  return (
    <div className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => {
        let icon = "bi-star";
        if (rounded >= n) icon = "bi-star-fill";
        else if (rounded === n - 0.5) icon = "bi-star-half";
        return <i key={n} className={`bi ${icon}`} aria-hidden="true" />;
      })}
    </div>
  );
};

const FindADoctorSection = () => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [query, setQuery] = useState({ name: "", specialty: "" });

  const results = useMemo(
    () =>
      doctors.filter(
        (d) =>
          d.name.toLowerCase().includes(query.name.trim().toLowerCase()) &&
          (!query.specialty || d.specialty === query.specialty)
      ),
    [query]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ name, specialty });
  };

  return (
    <section id="find-a-doctor" className="find-a-doctor section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Find A Doctor</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="search-section">
              <h3 className="search-title">Find Your Perfect Healthcare Provider</h3>
              <p className="search-subtitle">
                Search through our comprehensive directory of experienced medical professionals
              </p>

              <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-input-group">
                  <div className="input-wrapper">
                    <i className="bi bi-person" />
                    <input
                      type="text"
                      className="form-control"
                      name="doctor_name"
                      placeholder="Enter doctor name"
                      aria-label="Doctor name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="select-wrapper">
                    <i className="bi bi-heart-pulse" />
                    <select
                      className="form-select"
                      name="specialty"
                      aria-label="Specialty"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                    >
                      <option value="">All Specialties</option>
                      {specialties.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="search-btn">
                    <i className="bi bi-search" />
                    Find Doctors
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {results.length === 0 ? (
          <p className="text-center">No doctors match your search.</p>
        ) : (
          <div className="doctors-grid">
            {results.map((d) => (
              <div className="doctor-profile" key={d.id}>
                <div className="profile-header">
                  <div className="doctor-avatar">
                    <img src={d.img} alt={d.name} className="img-fluid" />
                    <div
                      className={`status-indicator ${d.status}`}
                      title={d.status}
                      role="img"
                      aria-label={`Status: ${d.status}`}
                    />
                  </div>
                  <div className="doctor-details">
                    <h4>{d.name}</h4>
                    <span className="specialty-tag">{d.tag}</span>
                    <div className="experience-info">
                      <i className="bi bi-award" />
                      <span>{d.years} years experience</span>
                    </div>
                  </div>
                </div>

                <div className="rating-section">
                  <Stars rating={d.rating} />
                  <span className="rating-score">{d.rating.toFixed(1)}</span>
                  <span className="review-count">({d.reviews} reviews)</span>
                </div>

                <div className="action-buttons">
                  <Link to={`/doctors/${d.id}`} className="btn-secondary">View Details</Link>
                  <Link to={`/appointment?doctor=${d.id}`} className="btn-primary">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-5">
          <Link to="/doctors" className="btn-view-all">
            View All Doctors
            <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FindADoctorSection;