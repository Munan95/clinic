import { useMemo, useState } from "react";

// Change this to your real backend endpoint (expects a JSON POST).
const API_URL = "/api/appointments";

const DEPARTMENTS = [
  { value: "general", label: "General Consultation" },
  { value: "cardiology", label: "Cardiology" },
  { value: "neurology", label: "Neurology" },
  { value: "orthopedics", label: "Orthopedics" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "dermatology", label: "Dermatology" },
  { value: "oncology", label: "Oncology" },
];

// Each doctor belongs to a department so the doctor list can be filtered.
// Adjust the department assignments to match your real staff.
const DOCTORS = [
  { value: "dr-sarah-johnson", label: "Dr. Sarah Johnson", department: "general" },
  { value: "dr-michael-chen", label: "Dr. Michael Chen", department: "cardiology" },
  { value: "dr-emily-davis", label: "Dr. Emily Davis", department: "neurology" },
  { value: "dr-robert-smith", label: "Dr. Robert Smith", department: "orthopedics" },
  { value: "dr-lisa-brown", label: "Dr. Lisa Brown", department: "pediatrics" },
  { value: "dr-david-wilson", label: "Dr. David Wilson", department: "dermatology" },
  { value: "dr-maria-rodriguez", label: "Dr. Maria Rodriguez", department: "oncology" },
];

// 30-minute slots, 09:00 - 16:30, with a lunch break at 13:00.
const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  department: "",
  doctor: "",
  date: "",
  time: "",
  message: "",
};

const formatSlot = (slot) => {
  const [h, m] = slot.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
};

// Local date as YYYY-MM-DD (toISOString would shift the date by timezone).
const getLocalDate = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const isSlotInPast = (date, slot) => {
  if (date !== getLocalDate()) return false;
  const now = new Date();
  const [h, m] = slot.split(":").map(Number);
  return h * 60 + m <= now.getHours() * 60 + now.getMinutes();
};

const Appointment = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const today = useMemo(getLocalDate, []);

  const isSubmitting = status.type === "loading";

  const availableDoctors = DOCTORS.filter(
    (doctor) => doctor.department === form.department
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = { ...prev, [name]: value };
      // Changing department invalidates the previously chosen doctor.
      if (name === "department") next.doctor = "";
      // Changing date may make the chosen time slot unavailable.
      if (name === "date" && isSlotInPast(value, prev.time)) next.time = "";
      return next;
    });

    if (status.type === "error" || status.type === "success") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return "Please enter a valid phone number.";
    }

    if (form.date < today) return "Please choose today or a future date.";

    if (isSlotInPast(form.date, form.time)) {
      return "That time slot has already passed. Please pick another.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationError = validate();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        let detail = "";
        try {
          const data = await response.json();
          detail = data.message || data.error || "";
        } catch {
          // Response had no JSON body; fall back to the generic message.
        }
        throw new Error(
          detail || "We couldn't book your appointment. Please try again."
        );
      }

      setForm(INITIAL_FORM);
      setStatus({
        type: "success",
        message: "Your appointment has been scheduled. Thank you!",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof TypeError
            ? "Network error. Please check your connection and try again."
            : err.message,
      });
    }
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="booking-wrapper">
              <div
                className="booking-header text-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h2>Schedule Your Appointment</h2>
                <p>
                  Book your medical appointment in just a few simple steps. Our
                  experienced healthcare professionals are ready to provide you
                  with the best care possible.
                </p>
              </div>

              <div
                className="booking-steps"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="step">
                  <div className="step-icon">
                    <i className="bi bi-calendar-check" />
                  </div>
                  <div className="step-content">
                    <h4>Select Service</h4>
                    <p>Choose the medical service you need</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-icon">
                    <i className="bi bi-clock" />
                  </div>
                  <div className="step-content">
                    <h4>Pick Date &amp; Time</h4>
                    <p>Select your preferred appointment slot</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-icon">
                    <i className="bi bi-person-check" />
                  </div>
                  <div className="step-content">
                    <h4>Confirm Details</h4>
                    <p>Provide your information and confirm</p>
                  </div>
                </div>
              </div>

              <div
                className="appointment-form"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        aria-label="Full Name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <select
                        name="department"
                        className="form-select"
                        aria-label="Department"
                        value={form.department}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      >
                        <option value="">Select Department</option>
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <select
                        name="doctor"
                        className="form-select"
                        aria-label="Doctor"
                        value={form.doctor}
                        onChange={handleChange}
                        disabled={isSubmitting || !form.department}
                        required
                      >
                        <option value="">
                          {form.department
                            ? "Select Doctor"
                            : "Select a department first"}
                        </option>
                        {availableDoctors.map((doctor) => (
                          <option key={doctor.value} value={doctor.value}>
                            {doctor.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        aria-label="Appointment Date"
                        min={today}
                        value={form.date}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <select
                        name="time"
                        className="form-select"
                        aria-label="Appointment Time"
                        value={form.time}
                        onChange={handleChange}
                        disabled={isSubmitting || !form.date}
                        required
                      >
                        <option value="">
                          {form.date ? "Select Time" : "Pick a date first"}
                        </option>
                        {TIME_SLOTS.map((slot) => (
                          <option
                            key={slot}
                            value={slot}
                            disabled={isSlotInPast(form.date, slot)}
                          >
                            {formatSlot(slot)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows={4}
                        placeholder="Additional notes or symptoms (optional)"
                        aria-label="Additional notes or symptoms"
                        value={form.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-12">
                      <div aria-live="polite">
                        {status.type === "loading" && (
                          <div className="text-center mb-3">
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            />
                            Booking your appointment...
                          </div>
                        )}

                        {status.type === "error" && (
                          <div className="alert alert-danger" role="alert">
                            {status.message}
                          </div>
                        )}

                        {status.type === "success" && (
                          <div className="alert alert-success" role="status">
                            {status.message}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="btn-book"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Booking..." : "Book Appointment Now"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                className="emergency-info"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <p>
                  <i className="bi bi-exclamation-triangle" /> For medical
                  emergencies, please call <strong>911</strong> or go to the
                  nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;