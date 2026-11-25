import { useRef, useState } from "react";

const departments = [
  {
    id: "neurology",
    tab: "Neurology",
    title: "Neurological Sciences Department",
    img: "/assets/img/health/neurology-3.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    services: [
      { icon: "fas fa-brain", name: "Brain Monitoring", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
      { icon: "fas fa-wave-square", name: "EEG Testing", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
      { icon: "fas fa-stethoscope", name: "Neurological Exam", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium." },
      { icon: "fas fa-file-medical", name: "Treatment Plans", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
    ],
  },
  {
    id: "surgery",
    tab: "Surgery",
    title: "Surgical Services Department",
    img: "/assets/img/health/surgery-2.webp",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    services: [
      { icon: "fas fa-cut", name: "Minimally Invasive", text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." },
      { icon: "fas fa-tools", name: "Advanced Procedures", text: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora." },
      { icon: "fas fa-shield-alt", name: "Safe Operations", text: "Incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
      { icon: "fas fa-clock", name: "Recovery Support", text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis." },
    ],
  },
  {
    id: "dental",
    tab: "Dental Care",
    title: "Dental Care Department",
    img: "/assets/img/health/dermatology-1.webp",
    description:
      "Suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    services: [
      { icon: "far fa-smile", name: "Oral Health", text: "Consequatur aut perferendis doloribus asperiores repellat tempore." },
      { icon: "fas fa-tooth", name: "Teeth Cleaning", text: "Et harum quidem rerum facilis est et expedita distinctio nam libero." },
      { icon: "fas fa-star", name: "Cosmetic Dentistry", text: "Tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus." },
      { icon: "fas fa-cog", name: "Orthodontics", text: "Id quod maxime placeat facere possimus, omnis voluptas assumenda est." },
    ],
  },
  {
    id: "ophthalmology",
    tab: "Ophthalmology",
    title: "Ophthalmology Department",
    img: "/assets/img/health/pediatrics-4.webp",
    description:
      "Omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
    services: [
      { icon: "fas fa-eye", name: "Vision Testing", text: "Sint et voluptatum sint quia dolor sit amet consectetur adipiscing elit." },
      { icon: "fas fa-camera", name: "Retinal Imaging", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut." },
      { icon: "fas fa-bolt", name: "Laser Surgery", text: "Enim ad minim veniam quis nostrud exercitation ullamco laboris nisi." },
      { icon: "fas fa-prescription-bottle", name: "Eye Care Plans", text: "Ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit." },
    ],
  },
  {
    id: "cardiology",
    tab: "Cardiology",
    title: "Cardiology Department",
    img: "/assets/img/health/cardiology-3.webp",
    description:
      "In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.",
    services: [
      { icon: "fas fa-heartbeat", name: "Heart Monitoring", text: "Mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error." },
      { icon: "fas fa-chart-line", name: "ECG Analysis", text: "Sit voluptatem accusantium doloremque laudantium totam rem aperiam." },
      { icon: "fas fa-tint", name: "Blood Tests", text: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae." },
      { icon: "fas fa-shield-heart", name: "Preventive Care", text: "Vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit." },
    ],
  },
];

const DepartmentsTabs = () => {
  const [activeId, setActiveId] = useState(departments[0].id);
  const tabRefs = useRef({});

  const active = departments.find((d) => d.id === activeId);

  const handleKeyDown = (e, index) => {
    let next = null;
    if (e.key === "ArrowRight") next = (index + 1) % departments.length;
    if (e.key === "ArrowLeft") next = (index - 1 + departments.length) % departments.length;
    if (next === null) return;
    e.preventDefault();
    const id = departments[next].id;
    setActiveId(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <section id="departments-tabs" className="departments-tabs section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="medical-specialties">
          <div className="row">
            <div className="col-12">
              <div className="specialty-navigation">
                <div className="nav nav-pills d-flex" role="tablist" aria-label="Departments">
                  {departments.map((d, i) => (
                    <button
                      key={d.id}
                      ref={(el) => (tabRefs.current[d.id] = el)}
                      type="button"
                      role="tab"
                      id={`${d.id}-tab`}
                      aria-controls={`departments-tabs-${d.id}`}
                      aria-selected={activeId === d.id}
                      tabIndex={activeId === d.id ? 0 : -1}
                      className={`nav-link department-tab ${activeId === d.id ? "active" : ""}`}
                      onClick={() => setActiveId(d.id)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                    >
                      {d.tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="tab-content department-content">
                <div
                  key={active.id}
                  className="tab-pane fade show active"
                  id={`departments-tabs-${active.id}`}
                  role="tabpanel"
                  aria-labelledby={`${active.id}-tab`}
                >
                  <div className="row department-layout">
                    <div className="col-lg-4 order-lg-2">
                      <div className="department-image">
                        <img src={active.img} alt={`${active.tab} Department`} className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <div className="department-info">
                        <h2 className="department-title">{active.title}</h2>
                        <p className="department-description">{active.description}</p>
                        <div className="row mt-4">
                          {active.services.map((s) => (
                            <div className="col-md-6" key={s.name}>
                              <div className="service-item">
                                <div className="service-icon">
                                  <i className={s.icon} aria-hidden="true" />
                                </div>
                                <div className="service-content">
                                  <h4>{s.name}</h4>
                                  <p>{s.text}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsTabs;